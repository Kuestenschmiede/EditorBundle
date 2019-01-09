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
use con4gis\MapsBundle\Classes\Caches\C4GLayerApiCache;
use con4gis\EditorBundle\Classes\Cache\C4GEditorConfigurationCache;
use con4gis\EditorBundle\Classes\Events\DeleteDataEvent;
use con4gis\EditorBundle\Classes\Events\DeleteProjectEvent;
use con4gis\EditorBundle\Classes\Events\InstantiateDataPluginsEvent;
use con4gis\EditorBundle\Classes\Events\InstantiateProjectPluginsEvent;
use con4gis\EditorBundle\Classes\Events\SaveProjectEvent;
use con4gis\EditorBundle\Classes\Events\LoadPluginsEvent;
use con4gis\EditorBundle\Classes\Events\ShowEditProjectDialogEvent;
use con4gis\EditorBundle\Classes\EditorBrickTypes;
use con4gis\EditorBundle\Classes\Plugins\DefaultProjectPlugin;
use con4gis\EditorBundle\Classes\Plugins\ProjectPluginInterface;
use con4gis\EditorBundle\Classes\Events\CreateProjectEvent;
use con4gis\EditorBundle\Entity\EditorMapProject;
use con4gis\EditorBundle\Entity\EditorMapData;
use Contao\Database;
use Contao\FrontendUser;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ProjectController extends BaseController
{
    public function createProjectAction(Request $request)
    {
        $this->initialize();
        if (!$this->checkFeUser()) {
            return new Response("No user logged in!", 403);
        }
        $plugins = $this->getPlugins();
        $event = new CreateProjectEvent();
        $event->setPlugins($plugins);
        $this->eventDispatcher->dispatch($event::NAME, $event);
        $response = new JsonResponse($event->getView());
        return $response;
    }

    public function saveProjectAction(Request $request)
    {
        $this->initialize();
        if (!$this->checkFeUser()) {
            return new Response("No user logged in!", 403);
        }
        $plugins = $this->getPlugins();
        $event = new SaveProjectEvent();
        // get entities
        $event->setEntities($this->getEntities($plugins));
        $data = $request->request->all();
        $data['createGroup'] = true;
        $event->setPluginInstances($plugins);
        $event->setData($data);
        $this->eventDispatcher->dispatch($event::NAME, $event);
        // return the layer for the project
        $response = new JsonResponse($this->getProjectLayer($event));
        // data was updated, clear caches
        C4GLayerApiCache::getInstance()->clearCache();
        C4GEditorConfigurationCache::getInstance()->clearCache();
        return $response;
    }

    public function deleteProjectAction(Request $request)
    {
        $this->initialize();
        if (!$this->checkFeUser()) {
            return new Response("No user logged in!", 403);
        }
        $plugins = $this->getPlugins();
        $projectId = $request->request->all()['id'];
        $delEvent = new DeleteProjectEvent();
        $delEvent->setPlugins($plugins);
        $delEvent->setProjectId($projectId);
        $this->eventDispatcher->dispatch($delEvent::NAME, $delEvent);

        // delete all data from the project
        $data = $this->entityManager->getRepository(EditorMapData::class)
            ->findBy(['projectid' => $projectId]);
        foreach ($data as $datum) {
            $typeId = $datum->getTypeid();
            $dataId = $datum->getId();
            $loadEvent = new LoadPluginsEvent();
            $this->eventDispatcher->dispatch($loadEvent::NAME, $loadEvent);

            $instEvent = new InstantiateDataPluginsEvent();
            $instEvent->setPluginConfigs($loadEvent->getConfigs());
            $instEvent->setElementId($typeId);
            $this->eventDispatcher->dispatch($instEvent::NAME, $instEvent);

            $event = new DeleteDataEvent();
            $event->setPlugins($instEvent->getInstances());
            $event->setProjectId($projectId);
            $event->setDataId($dataId);
            $this->eventDispatcher->dispatch($event::NAME, $event);
        }
        // data was updated, clear caches
        C4GLayerApiCache::getInstance()->clearCache();
        C4GEditorConfigurationCache::getInstance()->clearCache();
        return new JsonResponse(['success' => $delEvent->getSuccess()]);
    }

    public function editProjectAction(Request $request, $projectId)
    {
        $this->initialize();
        $plugins = $this->getPlugins();
        $event = new ShowEditProjectDialogEvent();
        $event->setProjectId($projectId);
        $event->setPlugins($plugins);
        $this->eventDispatcher->dispatch($event::NAME, $event);
        return new JsonResponse(['form' => $event->getDialog()]);
    }

    public function saveEditedProjectAction(Request $request, $projectId)
    {
        $this->initialize();
        $plugins = $this->getPlugins();
        $event = new SaveProjectEvent();
        $event->setPluginInstances($plugins);
        $data = array_merge($request->request->all(), ['id' => $projectId]);
        foreach ($data as $key => $value) {
            $key = str_replace("c4g_", "", $key);
            $key = str_replace("_", "", $key); //temp
            $data[$key] = $value;
        }
        $data['createGroup'] = false;
        $event->setData($data);
        $event->setEntities($this->loadExistingEntities($plugins, $data));
        $this->eventDispatcher->dispatch($event::NAME, $event);
        // data was updated, clear caches
        C4GLayerApiCache::getInstance()->clearCache();
        C4GEditorConfigurationCache::getInstance()->clearCache();
        return new JsonResponse($event->getData());
    }

    private function getPlugins(): array
    {
        $loadEvent = new LoadPluginsEvent();
        $this->eventDispatcher->dispatch($loadEvent::NAME, $loadEvent);
//        $subDomain = $this->getActiveSubdomain();
        $instEvent = new InstantiateProjectPluginsEvent();
        $instEvent->setPluginConfigs($loadEvent->getConfigs());
//        $scenarios = $subDomain->getScenarios();
        $this->eventDispatcher->dispatch($instEvent::NAME, $instEvent);
        $plugins = $instEvent->getInstances();
//        foreach ($scenarios as $scenarioId) {
//            $instEvent->setScenarioId($scenarioId);
//
//            $currentPlugins = $instEvent->getInstances();
//            foreach ($currentPlugins as $currentPlugin) {
//                if (!in_array($currentPlugin, $plugins)) {
//                    $plugins[] = $currentPlugin;
//                }
//            }
//        }
        // TODO das hier im InstantiateProjectPluginsListener im ApplicationBundle erledigen, und hier nur die
        // TODO plugins zurückgeben
        return $plugins;
    }

//    private function getActiveSubdomain() : MapsProjectSubdomains
//    {
//        $subd = \Contao\Environment::get('serverName');
//        if ($strpos = strpos($subd,'.')) {
//            $subd = strtolower(substr($subd, 0, $strpos));
//        }
//        $subDomain = $this->entityManager->getRepository(MapsProjectSubdomains::class)
//            ->findOneBy(['subdomain' => $subd, 'published' => 1]);
//        return $subDomain;
//    }

    private function getEntities($plugins)
    {
        $entities = [];
        foreach ($plugins as $instance) {
            if ($instance instanceof ProjectPluginInterface) {
                // create entity
                $entityName = $instance->getEntityClass();
                $entities[] = new $entityName();
            }
        }
        return $entities;
    }

    private function getProjectLayer(SaveProjectEvent $event)
    {
        $returnData = $event->getReturnData();
        $data = $event->getData();
        $database = Database::getInstance();
        $type = EditorBrickTypes::BRICK_GENERIC_PROJECT;
        $frontend = $this->get('editor_frontend');
        $projectElem = $database->prepare("SELECT * FROM tl_c4g_maps WHERE location_type = '$type'")->execute();
        $arrData = $frontend->addMapStructureElementWithIdCalc(
            $returnData['id'],
            $projectElem->id,
            $projectElem->pid,
            69,
            'none',
            $data['caption'],
            $data['caption'],
            true,
            ""
        );
        $arrData['content'] = [];
        $arrData['display'] = true;
        $arrData['childs'] = [];
        $arrData['hasChilds'] = false;
        $arrData['childsCount'] = 0;
        $returnData['name'] = $data['caption'];
        $returnData['projectLayer'] = $arrData;
        return $returnData;
    }

    private function loadExistingEntities($plugins, $data)
    {
        $entities = [];
        foreach ($plugins as $instance) {
            if ($instance instanceof ProjectPluginInterface) {
                // create entity
                $entityName = $instance->getEntityClass();
                if ($entityName === EditorMapProject::class) {
                    $entity = $this->entityManager->getRepository($entityName)
                        ->findOneBy(['id' => $data['id']]);
                } else {
                    $entity = $this->entityManager->getRepository($entityName)
                        ->findOneBy(['pid' => $data['id']]);
                }
                if ($entity) {
                    $entities[] = $entity;
                }
            }
        }
        return $entities;
    }
}