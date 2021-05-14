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

use con4gis\EditorBundle\Classes\Events\ShowEditProjectDialogEvent;
use con4gis\EditorBundle\Entity\EditorProject;
use con4gis\GroupsBundle\Resources\contao\models\MemberGroupModel;
use con4gis\EditorBundle\Classes\Events\LoadProjectsEvent;
use con4gis\EditorBundle\Classes\EditorBrickTypes;
use con4gis\GroupsBundle\Resources\contao\models\MemberModel;
use con4gis\ProjectsBundle\Classes\Dialogs\C4GBrickDialog;
use con4gis\ProjectsBundle\Classes\Dialogs\C4GBrickDialogParams;
use con4gis\ProjectsBundle\Classes\Views\C4GBrickViewType;
use Contao\Database;
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
            // only add group to array when member has read access
            // it also does not make sense to load a project when member has no read access for the data
            if (MemberModel::hasRightInGroup($memberId, $group->id, EditorBrickTypes::RIGHT_READ_PROJECT)
                && MemberModel::hasRightInGroup($memberId, $group->id, EditorBrickTypes::RIGHT_READ_DATA)) {
                $groupIds[] = $group->id;
            }
        }
        $projects = $this->entityManager->getRepository(EditorProject::class)
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
            EditorBrickTypes::BRICK_GENERIC_PROJECT,
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
