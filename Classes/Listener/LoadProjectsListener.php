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


use con4gis\EditorBundle\Classes\Events\ShowEditProjectDialogEvent;
use con4gis\GroupsBundle\Resources\contao\models\MemberGroupModel;
use con4gis\EditorBundle\Classes\Events\LoadProjectsEvent;
use con4gis\EditorBundle\Classes\EditorBrickTypes;
use con4gis\EditorBundle\Entity\EditorMapProject;
use con4gis\ProjectsBundle\Classes\Dialogs\C4GBrickDialog;
use con4gis\ProjectsBundle\Classes\Dialogs\C4GBrickDialogParams;
use con4gis\ProjectsBundle\Classes\Models\C4gProjectsModel;
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
            $groupIds[] = $group->id;
        }
        $projects = $this->entityManager->getRepository(EditorMapProject::class)
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