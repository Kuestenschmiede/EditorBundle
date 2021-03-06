<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

namespace con4gis\EditorBundle\Controller;

use con4gis\CoreBundle\Controller\BaseController;
use con4gis\CoreBundle\Classes\C4GApiCache;
use con4gis\EditorBundle\Classes\EditorBrickTypes;
use con4gis\EditorBundle\Classes\Helper\EditorCommon;
use con4gis\EditorBundle\Classes\Services\PluginService;
use con4gis\EditorBundle\Entity\EditorProject;
use con4gis\GroupsBundle\Resources\contao\models\MemberGroupModel;
use con4gis\GroupsBundle\Resources\contao\models\MemberModel;
use con4gis\MapsBundle\Classes\Caches\C4GLayerApiCache;
use con4gis\EditorBundle\Classes\Cache\C4GEditorConfigurationCache;
use con4gis\EditorBundle\Classes\Events\DuplicateDataEvent;
use con4gis\EditorBundle\Classes\Events\InstantiateDataPluginsEvent;
use con4gis\EditorBundle\Classes\Events\SaveMetadataEvent;
use con4gis\EditorBundle\Classes\Events\ShowMetadataDialogEvent;
use con4gis\EditorBundle\Classes\Events\ChangeDataEvent;
use con4gis\EditorBundle\Classes\Events\CreateDataEvent;
use con4gis\EditorBundle\Classes\Events\DeleteDataEvent;
use con4gis\EditorBundle\Entity\EditorElement;
use con4gis\ProjectsBundle\Classes\Common\C4GBrickCommon;
use con4gis\ProjectsBundle\Classes\Models\C4gProjectsModel;
use Contao\FrontendUser;
use Contao\System;
use Doctrine\ORM\ORMException;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class ElementController
 * Handles all the requests that create, modify or delete data.
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
    public function __construct(ContainerInterface $container)
    {
        parent::__construct($container);
    }
    
    protected function initialize($withEntityManager = true)
    {
        $this->initializeContao();
        System::loadLanguageFile('default');
        $this->pluginService = System::getContainer()->get('editor_plugin_service');
        parent::initialize($withEntityManager);
    }
    
    public function createDataAction(Request $request, $projectId)
    {
        $this->initialize();
        if (!$this->checkFeUser()) {
            return new Response("No user logged in!", 403);
        }
        if (!$this->hasWriteAccess($projectId)) {
            return new Response($GLOBALS['TL_LANG']['editor_api']['permission_denied'], 403);
        }
        $layerData = $request->request->all();
        $event = new CreateDataEvent();
        $event->setLayerData($layerData);
        $event->setProjectId($projectId);
        $this->eventDispatcher->dispatch($event::NAME, $event);
        $response = new JsonResponse();
        $response->setData($event->getReturnData());
        return $response;
    }

    public function deleteDataAction(Request $request, $projectId, $dataId)
    {
        $this->initialize();
        if (!$this->checkFeUser()) {
            return new Response("No user logged in!", 403);
        }
        // check permissions
        if (!$this->hasWriteAccess($projectId)) {
            // access not permitted
            return new Response($GLOBALS['TL_LANG']['editor_api']['permission_denied'], 403);
        }
        
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
        return $response;
    }

    public function updateDataAction(Request $request, $projectId, $dataId)
    {
        $this->initialize();
        if (!$this->checkFeUser()) {
            return new Response("No user logged in!", 403);
        }
        if (!$this->hasWriteAccess($projectId)) {
            return new Response($GLOBALS['TL_LANG']['editor_api']['permission_denied'], 403);
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
        return $response;
    }

    public function duplicateDataAction(Request $request, $projectId, $dataId)
    {
        $this->initialize();
        if (!$this->checkFeUser()) {
            return new Response("No user logged in!", 403);
        }
        if (!$this->hasWriteAccess($projectId)) {
            return new Response($GLOBALS['TL_LANG']['editor_api']['permission_denied'], 403);
        }
        $realId = C4GBrickCommon::getLayerIDParam($dataId, 'id');
        $data = $this->entityManager->getRepository(EditorElement::class)
            ->findOneBy(['id' => $realId]);
        $plugins = $this->pluginService->getDataPlugins($data->getTypeid());
        $copyEvent = new DuplicateDataEvent();
        $copyEvent->setDataId($realId);
        $copyEvent->setPlugins($plugins);
        $this->eventDispatcher->dispatch($copyEvent::NAME, $copyEvent);
        return new JsonResponse($copyEvent->getReturnData());
    }

    public function displaceDataAction(Request $request, $dataId, $newProjectId, $copy)
    {
        $this->initialize();
        if (!$this->hasWriteAccess($newProjectId)) {
            return new Response($GLOBALS['TL_LANG']['editor_api']['permission_denied'], 403);
        }
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
        return $response;
    }

    public function getFormAction(Request $request, $projectId, $dataId)
    {
        $this->initialize();
        if (!$this->checkFeUser()) {
            return new Response("No user logged in!", 403);
        }
        if (!$this->hasReadAccess($projectId)) {
            return new Response($GLOBALS['TL_LANG']['editor_api']['permission_denied'], 403);
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
        if (!$this->hasWriteAccess($projectId)) {
            return new Response($GLOBALS['TL_LANG']['editor_api']['permission_denied'], 403);
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
        return $response;
    }

    public function revertAction(Request $request, $layerId, $projectId)
    {
        $this->initialize();
        if (!$this->hasWriteAccess($projectId)) {
            return new Response($GLOBALS['TL_LANG']['editor_api']['permission_denied'], 403);
        }
        $historyService = System::getContainer()->get('editor_history');
        $realId = C4GBrickCommon::getLayerIDParam($layerId, 'id');
        $returnElement = $historyService->revertElement($realId);
        $frontendService = System::getContainer()->get('editor_frontend');
        $returnElement = $frontendService->getSingleDataArray($returnElement, ['hide' => '']);
        return new JsonResponse($returnElement);
    }
    
    private function hasReadAccess($projectId)
    {
        $project = $this->entityManager->getRepository(EditorProject::class)->findOneBy(['id' => $projectId]);
        $memberId = FrontendUser::getInstance()->id;
        // check permissions
        return MemberModel::hasRightInGroup($memberId, $project->getGroupid(), EditorBrickTypes::RIGHT_READ_DATA);
    }
    
    private function hasWriteAccess($projectId)
    {
        $project = $this->entityManager->getRepository(EditorProject::class)->findOneBy(['id' => $projectId]);
        $memberId = FrontendUser::getInstance()->id;
        // check permissions
        return MemberModel::hasRightInGroup($memberId, $project->getGroupid(), EditorBrickTypes::RIGHT_WRITE_DATA);
    }
}