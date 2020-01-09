<?php
/*
  * This file is part of con4gis,
  * the gis-kit for Contao CMS.
  *
  * @package   	con4gis
  * @version    7
  * @author  	con4gis contributors (see "authors.txt")
  * @license 	LGPL-3.0-or-later
  * @copyright 	Küstenschmiede GmbH Software & Design
  * @link       https://www.con4gis.org
  */

namespace con4gis\EditorBundle\Classes\Listener;

use con4gis\EditorBundle\Classes\EditorDrawStyles;
use con4gis\EditorBundle\Classes\Events\CreateDataEvent;
use con4gis\EditorBundle\Classes\Helper\JsonLayer;
use con4gis\EditorBundle\Classes\EditorMapFrontend;
use con4gis\EditorBundle\Entity\EditorElement;
use con4gis\EditorBundle\Entity\EditorProject;
use con4gis\ProjectsBundle\Classes\Common\C4GBrickCommon;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\ORMException;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class CreateDataListener
{
    /**
     * @var EntityManager
     */
    private $entityManager = null;

    /**
     * @var EditorMapFrontend
     */
    private $frontend = null;

    /**
     * CreateElementListener constructor.
     * @param EntityManager $entityManager
     * @param EditorMapFrontend $frontend
     */
    public function __construct(EntityManager $entityManager, EditorMapFrontend $frontend)
    {
        $this->entityManager = $entityManager;
        $this->frontend = $frontend;
    }

    public function onDataCreateCreateEntity(
        CreateDataEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $projectId = $event->getProjectId();
        $layerData = $event->getLayerData();
        $layer = new JsonLayer($layerData);
        $project = $this->entityManager->getRepository(EditorProject::class)->findOneBy(['id' => $projectId]);
        if (!$project) {
            // TODO FEHLER !!! 400 Bad Request oder so senden
            return;
        }
        // create project data entity
        $entity = new EditorElement();
        $entity->setLastmemberid(\FrontendUser::getInstance()->id);
        $entity->setTypeid($layer->getElementid());
        $entity->setCategoryid($layer->getCategoryid());
        $entity->setTstamp(time());
        $entity->setName($layer->getName());
        $entity->setProjectid($projectId);
        $entity->setPublished(1);
        $entity->setGroupid($project->getGroupid());
        $entity->setDrawtype($layer->getDrawType());
        switch ($layer->getDrawType()) {
            case EditorDrawStyles::LINESTRING:
            case EditorDrawStyles::POLYGON:
            case EditorDrawStyles::FREEHAND:
                $entity->setGeojson($layer->getGeojson());

                break;
            case EditorDrawStyles::POINT:
                $entity->setLocgeox($layer->getLocgeox());
                $entity->setLocgeoy($layer->getLocgeoy());

                break;
            case EditorDrawStyles::CIRCLE:
                $entity->setLocgeox($layer->getLocgeox());
                $entity->setLocgeoy($layer->getLocgeoy());
                $entity->setRadius($layer->getRadius());

                break;
        }

        try {
            $this->entityManager->persist($entity);
            $this->entityManager->flush();
        } catch (ORMException $e) {
        }
        $event->setLayer($layer);
        $event->setEntity($entity);
    }

    public function onDataCreateCreateReturnData(
        CreateDataEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $returnData = [];

        $id = C4GBrickCommon::calcLayerID(
            $event->getEntity()->getId(),
            $event->getLayer()->getElementid(),
            80
        );
        $returnData['id'] = $id;
        $layer = $event->getLayer();
        $content = $layer->getContent();
        $popup = $this->frontend->createPopup($event->getEntity());
        $content[0]['data']['id'] = $id;
        $content[0]['id'] = $id;
        $content[0]['data']['properties']['popup'] = $popup;
        $returnData['content'] = $content;
        $event->setReturnData($returnData);
    }
}
