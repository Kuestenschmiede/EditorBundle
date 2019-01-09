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

namespace con4gis\MapsProjectBundle\Classes\Listener;


use con4gis\GroupsBundle\Resources\contao\models\MemberGroupModel;
use con4gis\MapsProjectBundle\Classes\Events\LoadProjectsEvent;
use con4gis\MapsProjectBundle\Classes\MapsProjectBrickTypes;
use con4gis\MapsProjectBundle\Entity\MapsProject;
use con4gis\ProjectsBundle\Classes\Models\C4gProjectsModel;
use Doctrine\ORM\EntityManager;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class LoadProjectsListener
{
    /**
     * @var EntityManager
     */
    private $entityManager = null;

    /**
     * LoadProjectsListener constructor.
     * @param EntityManager $entityManager
     */
    public function __construct(EntityManager $entityManager)
    {
        $this->entityManager = $entityManager;
    }


    public function onLoadProjectsGetGenericProjects(
        LoadProjectsEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $memberId = $event->getMemberId();
        $groups = MemberGroupModel::getGroupListForMember($memberId);
        $groupIds = [];
        foreach ($groups as $group) {
            $groupIds[] = $group->id;
        }
        $projects = $this->entityManager->getRepository(MapsProject::class)
            ->findBy(['groupid' => $groupIds]);
        $event->setProjects($projects);
    }

    /**
     * Creates the HTML Dialog.
     * @param ShowEditProjectDialogEvent $event
     * @param $eventName
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onEditProjectGetDialog(
        ShowEditProjectDialogEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $fieldList = $event->getFieldList();
        $data = $event->getData();
        $dialogParams = new C4GBrickDialogParams(
            MapsProjectBrickTypes::BRICK_GENERIC_PROJECT,
            C4GBrickViewType::GROUPPROJECT
        );
        $html = C4GBrickDialog::buildDialogView(
            $fieldList,
            Database::getInstance(),
            $data,
            [],
            $dialogParams
        );
        $event->setDialog($html);
    }
}