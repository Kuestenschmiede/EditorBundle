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
use con4gis\EditorBundle\Classes\Events\EditorConfigurationEvent;
use con4gis\EditorBundle\Classes\Events\LoadProjectsEvent;
//use con4gis\MapsProjectBundle\Entity\MapsProjectSubdomains;
use con4gis\ProjectsBundle\Classes\Common\C4GBrickCommon;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ProjectEditorController extends BaseController
{
    /**
     * ProjectEditorController constructor.
     */
    public function __construct()
    {
        $this->cacheInstance = C4GEditorConfigurationCache::getInstance();
    }

    public function projectEditorAction(Request $request)
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
//            $subd = \Contao\Environment::get('serverName');
//            if ($strpos = strpos($subd,'.')) {
//                $subd = strtolower(substr($subd, 0, $strpos));
//            }
//            $subDomain = $this->entityManager->getRepository(MapsProjectSubdomains::class)
//                ->findOneBy(['subdomain' => $subd, 'published' => 1]);
//            if (!$subDomain) {
//                return $response;
//            }
            $benchmarks = [];
            $benchmarks['configevent'] = [];
            $benchmarks['loadevent'] = [];
            $t = microtime(true);
            $micro = sprintf("%06d", ($t - floor($t)) * 1000000);
            $benchmarks['configevent']['astart'] = date("H:i:s " . $micro, time());
            $configurationEvent = new EditorConfigurationEvent();
//            $configurationEvent->setSubdomain($subDomain);
            $this->eventDispatcher->dispatch($configurationEvent::NAME, $configurationEvent);
            $t = microtime(true);
            $micro = sprintf("%06d", ($t - floor($t)) * 1000000);
            $benchmarks['configevent']['endend'] = date("H:i:s " . $micro, time());
            if (\FrontendUser::getInstance()->id) {
                $t = microtime(true);
                $micro = sprintf("%06d", ($t - floor($t)) * 1000000);
                $benchmarks['loadevent']['astart'] = date("H:i:s " . $micro, time());
                $loadProjectsEvent = new LoadProjectsEvent();
                $loadProjectsEvent->setMemberId(\FrontendUser::getInstance()->id);
                $this->eventDispatcher->dispatch($loadProjectsEvent::NAME, $loadProjectsEvent);
                $projects = $loadProjectsEvent->getProjects();
                $t = microtime(true);
                $micro = sprintf("%06d", ($t - floor($t)) * 1000000);
                $benchmarks['loadevent']['endend'] = date("H:i:s " . $micro, time());
            } else {
                // fallback
                $projects = [];
            }

            $formattedProjects = [];
            // reformat project data for editor display
            foreach ($projects as $project) {
                $formattedProjects[] = [
                    'id' => $project->getId(),
                    'name' => $project->getCaption()
                ];
            }
            $editorConfig = $configurationEvent->getEditorConfig();
            $editorConfig['projects'] = $formattedProjects;
            $editorConfig['benchmarks'] = $benchmarks;
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
}