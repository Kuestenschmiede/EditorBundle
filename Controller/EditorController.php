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
use con4gis\EditorBundle\Classes\Cache\C4GEditorConfigurationCache;
use con4gis\EditorBundle\Classes\Contao\GeoEditor;
use con4gis\EditorBundle\Classes\Events\EditorConfigurationEvent;
use con4gis\EditorBundle\Classes\Events\LoadProjectsEvent;
use con4gis\GroupsBundle\Resources\contao\models\MemberGroupModel;
use con4gis\GroupsBundle\Resources\contao\models\MemberModel;
use con4gis\ProjectsBundle\Classes\Common\C4GBrickCommon;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class EditorController extends BaseController
{
    /**
     * EditorController constructor.
     */
    public function __construct()
    {
        $this->cacheInstance = C4GEditorConfigurationCache::getInstance();
    }

    public function configEditorAction(Request $request, $configId)
    {
        $this->initialize();
        if (!$this->checkFeUser()) {
            return new Response("No user logged in!", 403);
        }
        // check for cache
        $this->checkForCacheSettings("projectEditorService");
        if (self::$useCache) {
            $this->checkAndStoreCachedData($request);
        }
        $response = new JsonResponse();
        // return if cached data exists
        if (!self::$outputFromCache) {
            $configurationEvent = new EditorConfigurationEvent();
            $configurationEvent->setConfigId($configId);
            $this->eventDispatcher->dispatch($configurationEvent::NAME, $configurationEvent);
            if (\FrontendUser::getInstance()->id) {
                $loadProjectsEvent = new LoadProjectsEvent();
                $loadProjectsEvent->setMemberId(\FrontendUser::getInstance()->id);
                $this->eventDispatcher->dispatch($loadProjectsEvent::NAME, $loadProjectsEvent);
                $projects = $loadProjectsEvent->getProjects();
            } else {
                // fallback
                $projects = [];
            }

            $formattedProjects = [];
            // reformat project data for editor display
            foreach ($projects as $project) {
                $formattedProjects[] = [
                    'id' => $project->getId(),
                    'name' => $project->getCaption(),
                    'groupid' => $project->getGroupid()
                ];
            }
            $editorConfig = $configurationEvent->getEditorConfig();
            $editorConfig['projects'] = $formattedProjects;
            $editorConfig['groups'] = $this->getGroupsForProjects($formattedProjects);
            $this->responseData = $editorConfig;
            $this->storeDataInCache($request);
        } else {
            // load from cache
            $editorConfig = $this->responseData;
            $editorConfig['fromcache'] = true;
            $this->responseData = $editorConfig;
        }
        $response->setData($this->responseData);
        return $response;
    }

    public function getIdAction(Request $request)
    {
        $this->initialize();
        if (!$this->checkFeUser()) {
            return new Response("No user logged in!", 403);
        }
        $data = $request->request->all();
        if (!$data['id'] || !$data['key'] || !$data['ident']) {
            return new Response("", 400);
        } else {
            $id = C4GBrickCommon::calcLayerID($data['id'], $data['key'], $data['ident']);
            return new JsonResponse(['id' => $id]);
        }
    }
    
    public function beEditorAction(Request $request, $layerId)
    {
        $geoEditor = new GeoEditor($layerId);
        $strResponse = $geoEditor->run();
        $response = new Response($strResponse['data'], 200, array('Content-Type: Document'));
        return $response;
    }
    
    private function getGroupsForProjects($arrProjects)
    {
        $arrGroups = [];
        foreach ($arrProjects as $project) {
            $group = MemberGroupModel::findByPk($project['groupid'])->row();
            $arrGroup = [];
            $arrGroup['owner'] = $group['cg_owner_id'];
            $arrGroup['members'] = $this->getMembersForGroup($group);
            $arrGroup['projectId'] = $project['id'];
            $arrGroup['id'] = $group['id'];
            $arrGroups[]  = $arrGroup;
        }
        return $arrGroups;
    }
    
    private function getMembersForGroup($group)
    {
        $members = [];
        $memberIds = deserialize($group['cg_member']);
        foreach ($memberIds as $memberId) {
            $member = MemberModel::findByPk($memberId);
            $arrMember = [];
            $arrMember['name'] = $member->firstname . ' ' . $member->lastname;
            $arrMember['firstname'] = $member->firstname;
            $arrMember['lastname'] = $member->lastname;
            $arrMember['id'] = $member->id;
            $members[] = $arrMember;
        }
        return $members;
    }
}