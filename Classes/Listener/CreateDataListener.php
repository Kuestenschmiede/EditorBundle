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

namespace con4gis\EditorBundle\Classes\Listener;


use con4gis\MapsProjectBundle\Classes\EditorDrawStyles;
use con4gis\EditorBundle\Classes\Events\CreateDataEvent;
use con4gis\EditorBundle\Classes\Helper\JsonLayer;
use con4gis\MapsProjectBundle\Classes\MapsProjectFrontend;
use con4gis\MapsProjectBundle\Entity\MapsProject;
use con4gis\MapsProjectBundle\Entity\MapsProjectData;
use con4gis\ProjectsBundle\Classes\Common\C4GBrickCommon;
use con4gis\ProjectsBundle\Classes\Models\C4gProjectsModel;
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
     * @var MapsProjectFrontend
     */
    private $frontend = null;

    /**
     * CreateElementListener constructor.
     * @param EntityManager $entityManager
     * @param MapsProjectFrontend $frontend
     */
    public function __construct(EntityManager $entityManager, MapsProjectFrontend $frontend)
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
        $project = $this->entityManager->getRepository(MapsProject::class)->findOneBy(['id' => $projectId]);
        if (!$project) {
            // TODO FEHLER !!! 400 Bad Request oder so senden
            return;
        }
        // create project data entity
        $entity = new MapsProjectData();
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