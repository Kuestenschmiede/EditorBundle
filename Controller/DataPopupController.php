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
use con4gis\EditorBundle\Classes\Events\LoadPluginsEvent;
use con4gis\EditorBundle\Entity\EditorElement;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DataPopupController extends BaseController
{
    public function getPopupAction(Request $request, $dataId)
    {
        $this->initialize();
        if (!$this->checkFeUser()) {
            return new Response("No user logged in!", 403);
        }
        $data = $this->entityManager->getRepository(EditorElement::class)->findOneBy(['id' => $dataId]);

        $loadEvent = new LoadPluginsEvent();
        $this->eventDispatcher->dispatch($loadEvent::NAME, $loadEvent);

        $instEvent = new InstantiateDataPluginsEvent();
        $instEvent->setPluginConfigs($loadEvent->getConfigs());
        $instEvent->setElementId($data->getTypeid());
        $this->eventDispatcher->dispatch($instEvent::NAME, $instEvent);

        $event = new GetPopupEvent();
        $event->setDataId($dataId);
        $event->setPluginConfigs($loadEvent->getConfigs());
        $event->setPlugins($instEvent->getInstances());
        $this->eventDispatcher->dispatch($event::NAME, $event);
        return new JsonResponse($event->getView());
    }
}