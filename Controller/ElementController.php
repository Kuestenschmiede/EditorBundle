<?php
/**
 * con4gis - the gis-kit
 *
 * @version   php 7
 * @package   con4gis
 * @author    con4gis contributors (see "authors.txt")
 * @license   GNU/LGPL http://opensource.org/licenses/lgpl-3.0.html
 * @copyright Küstenschmiede GmbH Software & Design 2011 - 2018.
 * @link      https://www.kuestenschmiede.de
 */

namespace con4gis\EditorBundle\Controller;


use con4gis\CoreBundle\Controller\BaseController;
use con4gis\CoreBundle\Resources\contao\classes\C4GApiCache;
use con4gis\EditorBundle\Classes\Helper\EditorCommon;
use con4gis\EditorBundle\Classes\Services\PluginService;
use con4gis\EditorBundle\Entity\EditorProject;
use con4gis\MapsBundle\Classes\Caches\C4GLayerApiCache;
use con4gis\EditorBundle\Classes\Cache\C4GEditorConfigurationCache;
use con4gis\EditorBundle\Classes\Events\DuplicateDataEvent;
use con4gis\EditorBundle\Classes\Events\InstantiateDataPluginsEvent;
use con4gis\EditorBundle\Classes\Events\SaveMetadataEvent;
use con4gis\EditorBundle\Classes\Events\ShowMetadataDialogEvent;
use con4gis\EditorBundle\Classes\Events\ChangeDataEvent;
use con4gis\EditorBundle\Classes\Events\CreateDataEvent;
use con4gis\EditorBundle\Classes\Events\CreateProjectEvent;
use con4gis\EditorBundle\Classes\Events\DeleteDataEvent;
use con4gis\EditorBundle\Classes\Events\LoadPluginsEvent;
use con4gis\EditorBundle\Entity\EditorMapProject;
use con4gis\EditorBundle\Entity\EditorElement;
use con4gis\ProjectsBundle\Classes\Common\C4GBrickCommon;
use con4gis\ProjectsBundle\Classes\Models\C4gProjectsModel;
use Contao\System;
use Doctrine\ORM\ORMException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class ElementController
 * Handles all the requests that create, modify or delete project data.
 * @package con4gis\MapsProjectBundle\Controller
 */
class ElementController extends BaseController
{
    /**
     * @var PluginService
     */
    private $pluginService = null;
    
    /**
     * ElementController constructor.
     */
    public function __construct()
    {
        parent::__construct();
        $this->pluginService = System::getContainer()->get('editor_plugin_service');
    }
    
    public function createDataAction(Request $request, $projectId)
    {
        $this->initialize();
        if (!$this->checkFeUser()) {
            return new Response("No user logged in!", 403);
        }
        $layerData = $request->request->all();
        $event = new CreateDataEvent();
        $event->setLayerData($layerData);
        $event->setProjectId($projectId);
        $this->eventDispatcher->dispatch($event::NAME, $event);
        $response = new JsonResponse();
        $response->setData($event->getReturnData());
        // data was updated, clear caches
        C4GLayerApiCache::getInstance()->clearCache();
        return $response;
    }

    public function deleteDataAction(Request $request, $projectId, $dataId)
    {
        $this->initialize();
        if (!$this->checkFeUser()) {
            return new Response("No user logged in!", 403);
        }
        
        // TODO Check permissions. Check if the logged in user actually has the right to delete the data.
        // TODO otherwise some malicious user could delete all our data.
        $realId = C4GBrickCommon::getLayerIDParam($dataId, 'id');
        $response = new JsonResponse();

        $data = $this->entityManager->getRepository(EditorElement::class)
            ->findOneBy(['id' => $realId]);
        $plugins = $this->pluginService->getDataPlugins($data->getTypeid());
        $event = new DeleteDataEvent();
        $event->setPlugins($plugins);
        $event->setProjectId($projectId);
        $event->setDataId($realId);
        $this->eventDispatcher->dispatch($event::NAME, $event);
        $errors = $event->getErrors();
        if (count($errors) > 0) {
            $response->setData($errors);
        }
        // data was updated, clear caches
        C4GLayerApiCache::getInstance()->clearCache();
        return $response;
    }

    public function updateDataAction(Request $request, $projectId, $dataId)
    {
        $this->initialize();
        if (!$this->checkFeUser()) {
            return new Response("No user logged in!", 403);
        }
        $response = new JsonResponse();
        $changes = $request->request->all();
        $event = new ChangeDataEvent();
        $event->setDataId($dataId);
        $event->setProjectId(intval($projectId));
        $event->setChanges($changes);
        $this->eventDispatcher->dispatch($event::NAME, $event);
        $errors = $event->getErrors();
        if (count($errors) > 0) {
            $response->setData($errors);
        }
        // data was updated, clear caches
        C4GLayerApiCache::getInstance()->clearCache();
//        C4GEditorConfigurationCache::getInstance()->clearCache();
        return $response;
    }

    public function duplicateDataAction(Request $request, $projectId, $dataId)
    {
        $this->initialize();
        if (!$this->checkFeUser()) {
            return new Response("No user logged in!", 403);
        }
        $realId = C4GBrickCommon::getLayerIDParam($dataId, 'id');
        $data = $this->entityManager->getRepository(EditorElement::class)
            ->findOneBy(['id' => $realId]);
        $plugins = $this->pluginService->getDataPlugins($data->getTypeid());
        $copyEvent = new DuplicateDataEvent();
        $copyEvent->setDataId($realId);
        $copyEvent->setPlugins($plugins);
        $this->eventDispatcher->dispatch($copyEvent::NAME, $copyEvent);
        // data was updated, clear caches
        C4GLayerApiCache::getInstance()->clearCache();
//        C4GEditorConfigurationCache::getInstance()->clearCache();
        return new JsonResponse($copyEvent->getReturnData());
    }

    public function displaceDataAction(Request $request, $dataId, $newProjectId, $copy)
    {
        $this->initialize();
        $data = $this->entityManager->getRepository(EditorElement::class)
            ->findOneBy(['id' => C4GBrickCommon::getLayerIDParam($dataId, 'id')]);
        $project = $this->entityManager->getRepository(EditorProject::class)
            ->findOneBy(['id' => $newProjectId]);
        $copy = $copy === "true" ? true : false;
        if ($copy) {
            $realId = C4GBrickCommon::getLayerIDParam($dataId, 'id');
            $data = $this->entityManager->getRepository(EditorElement::class)
                ->findOneBy(['id' => $realId]);
            $plugins = $this->pluginService->getDataPlugins($data->getTypeid());
            $copyEvent = new DuplicateDataEvent();
            $copyEvent->setDataId($realId);
            $copyEvent->setPlugins($plugins);
            $this->eventDispatcher->dispatch($copyEvent::NAME, $copyEvent);
            $newData = $copyEvent->getNewEntities()['main'];
            $newData->setProjectId($newProjectId);
            $newData->setGroupid($project->getGroupid());
            try {
                $this->entityManager->persist($newData);
                $this->entityManager->flush();
            } catch(ORMException $e) {

            }
            $layerId = C4GBrickCommon::calcLayerID($newData->getId(), $newData->getTypeid(), 80);
            $pid = EditorCommon::calcLayerId($data->getTypeid(), $data->getCategoryid(), $newProjectId, 71);
        } else {
            $data->setProjectid($newProjectId);
            $data->setGroupid($project->getGroupid());
            try {
                $this->entityManager->persist($data);
                $this->entityManager->flush();
            } catch(ORMException $e) {

            }
            $layerId = C4GBrickCommon::calcLayerID($data->getId(), $data->getTypeid(), 80);
            $pid = EditorCommon::calcLayerId($data->getTypeid(), $data->getCategoryid(), $newProjectId, 71);
        }
        $response = new JsonResponse([
            "newProjectId" => $newProjectId,
            "id"           => $layerId,
            "pid"          => $pid
        ]);
        // data was updated, clear caches
        C4GLayerApiCache::getInstance()->clearCache();
//        C4GEditorConfigurationCache::getInstance()->clearCache();
        return $response;
    }

    public function getFormAction(Request $request, $projectId, $dataId)
    {
        $this->initialize();
        if (!$this->checkFeUser()) {
            return new Response("No user logged in!", 403);
        }
        $data = $this->entityManager->getRepository(EditorElement::class)
            ->findOneBy(['id' => C4GBrickCommon::getLayerIDParam($dataId, 'id')]);
        $plugins = $this->pluginService->getDataPlugins($data->getTypeid());
        $event = new ShowMetadataDialogEvent();
        $event->setPlugins($plugins);
        $event->setDataId(C4GBrickCommon::getLayerIDParam($dataId, 'id'));
        $event->setProjectId($projectId);
        $this->eventDispatcher->dispatch($event::NAME, $event);
        $response = new JsonResponse($event->getView());
        return $response;
    }

    public function postFormAction(Request $request, $projectId, $dataId)
    {
        $this->initialize();
        if (!$this->checkFeUser()) {
            return new Response("No user logged in!", 403);
        }
        $realId = C4GBrickCommon::getLayerIDParam($dataId, 'id');
        $data = $this->entityManager->getRepository(EditorElement::class)
            ->findOneBy(['id' => $realId]);
        $plugins = $this->pluginService->getDataPlugins($data->getTypeid());
        $event = new SaveMetadataEvent();
        $event->setDataId($realId);
        $event->setProjectId($projectId);
        $event->setData($request->request->all());
        $event->setPluginClasses($plugins);
        $this->eventDispatcher->dispatch($event::NAME, $event);
        $response = new JsonResponse($event->getData());
        // data was updated, clear caches
        C4GLayerApiCache::getInstance()->clearCache();
//        C4GEditorConfigurationCache::getInstance()->clearCache();
        return $response;
    }

    public function revertAction(Request $request, $layerId)
    {
        $historyService = System::getContainer()->get('editor_history');
        $realId = C4GBrickCommon::getLayerIDParam($layerId, 'id');
        $returnElement = $historyService->revertElement($realId);
        $frontendService = System::getContainer()->get('editor_frontend');
        $returnElement = $frontendService->getSingleDataArray($returnElement, ['hide' => '']);
        return new JsonResponse($returnElement);
    }
}