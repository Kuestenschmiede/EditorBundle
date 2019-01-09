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


use con4gis\EditorBundle\Classes\Events\DeleteProjectEvent;
use con4gis\MapsProjectBundle\Entity\MapsProject;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\ORMException;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class DeleteProjectListener
{
    /**
     * @var EntityManager
     */
    private $entityManager = null;

    /**
     * CreateElementListener constructor.
     * @param EntityManager $entityManager
     */
    public function __construct(EntityManager $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function onDeleteProjectGetEntities(
        DeleteProjectEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $entities = [];
        $projectId = $event->getProjectId();
        $plugins = $event->getPlugins();
        foreach ($plugins as $plugin) {
            $entityClass = $plugin->getEntityClass();
            if ($entityClass === MapsProject::class) {
                $entity = $this->entityManager->getRepository($entityClass)->findOneBy(['id' => $projectId]);
            } else {
                $entity = $this->entityManager->getRepository($entityClass)->findOneBy(['pid' => $projectId]);
            }
            if ($entity) {
                $entities[] = $entity;
            }
        }
        $event->setEntities($entities);
    }

    public function onDeleteProjectDeleteEntities(
        DeleteProjectEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $entities = $event->getEntities();
        foreach ($entities as $entity) {
            try {
                $this->entityManager->remove($entity);
                $this->entityManager->flush();
            } catch(ORMException $exception) {
                $event->setSuccess(0);
            }
        }
    }
}