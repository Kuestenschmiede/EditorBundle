<?php
/*
  * This file is part of con4gis,
  * the gis-kit for Contao CMS.
  *
  * @package   	con4gis
  * @version    6
  * @author  	con4gis contributors (see "authors.txt")
  * @license 	LGPL-3.0-or-later
  * @copyright 	Küstenschmiede GmbH Software & Design
  * @link       https://www.con4gis.org
  */

namespace con4gis\EditorBundle\Controller;

use con4gis\CoreBundle\Controller\BaseController;
use con4gis\CoreBundle\Resources\contao\classes\C4GApiCache;
use con4gis\EditorBundle\Entity\EditorProject;
use con4gis\GroupsBundle\Resources\contao\models\MemberModel;
use con4gis\MapsBundle\Classes\Caches\C4GLayerApiCache;
use con4gis\EditorBundle\Classes\Cache\C4GEditorConfigurationCache;
use con4gis\EditorBundle\Classes\Events\DeleteDataEvent;
use con4gis\EditorBundle\Classes\Events\DeleteProjectEvent;
use con4gis\EditorBundle\Classes\Events\SaveProjectEvent;
use con4gis\EditorBundle\Classes\Events\ShowEditProjectDialogEvent;
use con4gis\EditorBundle\Classes\EditorBrickTypes;
use con4gis\EditorBundle\Classes\Plugins\ProjectPluginInterface;
use con4gis\EditorBundle\Classes\Events\CreateProjectEvent;
use con4gis\EditorBundle\Entity\EditorElement;
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

    public function saveProjectAction(Request $request, $configId)
    {
        $this->initialize();
        // every logged in user is authorized to create new projects
        if (!$this->checkFeUser()) {
            return new Response("No user logged in!", 403);
        }
        $plugins = $this->getPlugins();
        $event = new SaveProjectEvent();
        // get entities
        $event->setConfigId($configId);
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

    public function deleteProjectAction(Request $request, $projectId)
    {
        $this->initialize();
        if (!$this->checkFeUser()) {
            return new Response("No user logged in!", 403);
        }
        if (!$this->hasWriteAccess($projectId)) {
            return new Response("Access not permitted!", 403);
        }
        $plugins = $this->getPlugins();
        $delEvent = new DeleteProjectEvent();
        $delEvent->setPlugins($plugins);
        $delEvent->setProjectId($projectId);
        $this->eventDispatcher->dispatch($delEvent::NAME, $delEvent);

        // delete all data from the project
        $data = $this->entityManager->getRepository(EditorElement::class)
            ->findBy(['projectid' => $projectId]);
        foreach ($data as $datum) {
            $typeId = $datum->getTypeid();
            $dataId = $datum->getId();
            $plugins = $this->get('editor_plugin_service')->getDataPlugins($typeId);

            $event = new DeleteDataEvent();
            $event->setPlugins($plugins);
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
        if (!$this->hasWriteAccess($projectId)) {
            return new Response("Access not permitted!", 403);
        }
        $plugins = $this->getPlugins();
        $event = new ShowEditProjectDialogEvent();
        $event->setProjectId($projectId);
        $event->setPlugins($plugins);
        $this->eventDispatcher->dispatch($event::NAME, $event);
        return new JsonResponse(['form' => $event->getDialog()]);
    }

    public function saveEditedProjectAction(Request $request, $projectId, $configId)
    {
        $this->initialize();
        if (!$this->hasWriteAccess($projectId)) {
            return new Response("Access not permitted!", 403);
        }
        $plugins = $this->getPlugins();
        $event = new SaveProjectEvent();
        $event->setConfigId($configId);
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
        $plugins = $this->get('editor_plugin_service')->getProjectPlugins();
        return $plugins;
    }

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
        // set pid as it's no generated id
        $arrData['pid'] = $projectElem->id;
        $arrData['content'] = [];
        $arrData['renderSpecial'] = true;
        $arrData['display'] = true;
        $arrData['childs'] = [];
        $arrData['hasChilds'] = false;
        // set the projectId to the DB id of the project entity
        $arrData['projectId'] = $returnData['id'];
        // it is assumed here that the parent of the project element is the starboard tab
        $arrData['tabId'] = $projectElem->pid;
        $arrData['childsCount'] = 0;
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
                if ($entityName === EditorProject::class) {
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
    
    private function hasReadAccess($projectId)
    {
        $project = $this->entityManager->getRepository(EditorProject::class)->findOneBy(['id' => $projectId]);
        $memberId = FrontendUser::getInstance()->id;
        // check permissions
        return MemberModel::hasRightInGroup($memberId, $project->getGroupid(), EditorBrickTypes::RIGHT_READ_PROJECT);
    }
    
    private function hasWriteAccess($projectId)
    {
        $project = $this->entityManager->getRepository(EditorProject::class)->findOneBy(['id' => $projectId]);
        $memberId = FrontendUser::getInstance()->id;
        // check permissions
        return MemberModel::hasRightInGroup($memberId, $project->getGroupid(), EditorBrickTypes::RIGHT_WRITE_PROJECT);
    }
}