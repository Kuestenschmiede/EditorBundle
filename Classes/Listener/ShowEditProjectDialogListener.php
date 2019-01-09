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
use con4gis\EditorBundle\Classes\EditorBrickTypes;
use con4gis\EditorBundle\Classes\Plugins\AbstractProjectPlugin;
use con4gis\ProjectsBundle\Classes\Dialogs\C4GBrickDialog;
use con4gis\ProjectsBundle\Classes\Dialogs\C4GBrickDialogParams;
use con4gis\ProjectsBundle\Classes\Views\C4GBrickViewType;
use Contao\Database;
use Doctrine\ORM\EntityManager;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class ShowEditProjectDialogListener
{
    /**
    * @var EntityManager
    */
    private $entityManager = null;

    /**
     * ShowEditProjectDialogListener constructor.
     * @param EntityManager $entityManager
     */
    public function __construct(EntityManager $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * Gets the fieldlist from the plugins.
     * @param ShowEditProjectDialogEvent $event
     * @param $eventName
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onEditProjectGetFields(
        ShowEditProjectDialogEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $fieldList = [];
        $plugins = $event->getPlugins();
        foreach ($plugins as $plugin) {
            $fieldList = array_merge($fieldList, $plugin->getFields());
        }
        $event->setFieldList($fieldList);
    }

    /**
     * Loads the data for the project from the entities.
     * @param ShowEditProjectDialogEvent $event
     * @param $eventName
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onEditProjectGetData(
        ShowEditProjectDialogEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $plugins = $event->getPlugins();
        $projectId = $event->getProjectId();
        $fieldList = $event->getFieldList();
        $data = [];
        foreach ($plugins as $plugin) {
            $data = array_merge($data, $plugin->getProjectData($projectId, $fieldList));
        }
        $event->setData($data);
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