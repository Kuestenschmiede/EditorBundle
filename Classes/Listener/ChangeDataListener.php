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

use con4gis\EditorBundle\Classes\Events\ChangeDataEvent;
use con4gis\EditorBundle\Classes\Services\EditorHistoryService;
use con4gis\EditorBundle\Entity\EditorElement;
use con4gis\ProjectsBundle\Classes\Common\C4GBrickCommon;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\ORMException;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class ChangeDataListener
{
    /**
     * @var EntityManager
     */
    private $entityManager = null;
    
    /**
     * @var EditorHistoryService
     */
    private $historyService = null;

    /**
     * CreateElementListener constructor.
     * @param EntityManager $entityManager
     * @param EditorHistoryService $historyService
     */
    public function __construct(EntityManager $entityManager, EditorHistoryService $historyService)
    {
        $this->entityManager = $entityManager;
        $this->historyService = $historyService;
    }

    public function onDataChangeUpdateEntity(
        ChangeDataEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $changes = $event->getChanges();
        $dataId = $event->getDataId();
        $cleanId = C4GBrickCommon::getLayerIDParam($dataId, "id");
        $projectId = $event->getProjectId();
        $dataRepo = $this->entityManager->getRepository(EditorElement::class);
        $entity = $dataRepo->findOneBy([
            'id' => $cleanId,
            'projectid' => $projectId
        ]);
        $changeCount = 0;
        if ($entity) {
            // TODO inject editor service and call directly
            $this->historyService->createHistoryEntry($entity);
            foreach ($changes as $key => $change) {
                $setter = "set" . ucfirst($key);
                if (method_exists($entity, $setter)) {
                    $entity->$setter($change);
                    $changeCount++;
                }
            }
            if ($changeCount > 0) {
                try {
                    $this->entityManager->persist($entity);
                    $this->entityManager->flush();
                } catch (ORMException $exception) {
                    $event->addError($exception->getMessage());
                }
            }
        } else {
            $event->addError("No entity found with ID " . $cleanId);
        }
    }
}