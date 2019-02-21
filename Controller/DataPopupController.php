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
use con4gis\EditorBundle\Classes\Events\GetPopupEvent;
use con4gis\EditorBundle\Classes\Events\InstantiateDataPluginsEvent;
use con4gis\EditorBundle\Classes\Services\PluginService;
use con4gis\EditorBundle\Entity\EditorElement;
use Contao\System;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DataPopupController extends BaseController
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
        $this->pluginService = System::getContainer()->get('editor_plugin_service');
    }
    
    public function getPopupAction(Request $request, $dataId)
    {
        $this->initialize();
        if (!$this->checkFeUser()) {
            return new Response("No user logged in!", 403);
        }
        $data = $this->entityManager->getRepository(EditorElement::class)->findOneBy(['id' => $dataId]);
        $plugins = $this->pluginService->getDataPlugins($data->getTypeid());
        $event = new GetPopupEvent();
        $event->setDataId($dataId);
        $event->setPlugins($plugins);
        $this->eventDispatcher->dispatch($event::NAME, $event);
        return new JsonResponse($event->getView());
    }
}