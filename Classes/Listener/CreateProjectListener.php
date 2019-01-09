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

use con4gis\EditorBundle\Classes\Events\CreateProjectEvent;
use con4gis\EditorBundle\Classes\EditorBrickTypes;
use con4gis\ProjectsBundle\Classes\Common\C4GBrickConst;
use con4gis\ProjectsBundle\Classes\Dialogs\C4GBrickDialog;
use con4gis\ProjectsBundle\Classes\Dialogs\C4GBrickDialogParams;
use con4gis\ProjectsBundle\Classes\Views\C4GBrickViewType;
use Contao\Database;
use Doctrine\ORM\EntityManager;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class CreateProjectListener
{
    /**
     * @var EntityManager
     */
    private $entityManager = null;

    /**
     * Creates a new entry in tl_member_group matching the
     * @param CreateProjectEvent $event
     * @param $eventName
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onCreateProjectGetFieldList(
        CreateProjectEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $fieldList = [];
        $plugins = $event->getPlugins();
        foreach ($plugins as $plugin) {
            // call all plugin methods
            $fieldList = array_merge($fieldList, $plugin->getFields());
        }
        $event->setFieldList($fieldList);
    }

    /**
     * Creates the C4GBrickDialogParams object for the dialog.
     * @param CreateProjectEvent $event
     * @param $eventName
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onCreateProjectGetDialogParams(
        CreateProjectEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $dialogParams = new C4GBrickDialogParams(EditorBrickTypes::BRICK_GENERIC_PROJECT,
            C4GBrickViewType::GROUPBASED);
        $dialogParams->addButton(C4GBrickConst::BUTTON_SAVE);
        $event->setDialogParams($dialogParams);
    }

    /**
     * Calls the C4GBrickDialog methods to render the HTML.
     * @param CreateProjectEvent $event
     * @param $eventName
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onCreateProjectGenerateHtml(
        CreateProjectEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $html = "";
        $dialogParams = $event->getDialogParams();
        $list = $event->getFieldList();
        $html = C4GBrickDialog::buildDialogView(
            $list,
            Database::getInstance(),
            [],
            "",
            $dialogParams
        );
        $view = [];
        // add trigger button
        $html .= "<button id ='send-dialog' title='Projekt speichern'></button>";
        $html .= "<button id ='cancel-dialog' title='Abbrechen'></button>";
        $view['form'] = $html;
        $view['headline'] = "Neues Projekt erzeugen";
        $event->setView($view);
    }
}