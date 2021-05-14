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

namespace con4gis\EditorBundle\Classes\Listener;

use con4gis\EditorBundle\Classes\Events\DeleteProjectEvent;
use con4gis\EditorBundle\Entity\EditorProject;
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
            if ($entityClass === EditorProject::class) {
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
            } catch (ORMException $exception) {
                $event->setSuccess(0);
            }
        }
    }
}
