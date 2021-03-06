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

use con4gis\EditorBundle\Classes\Events\GetPopupEvent;
use con4gis\EditorBundle\Entity\EditorElement;
use con4gis\EditorBundle\Entity\EditorElementType;
use con4gis\ProjectsBundle\Classes\Fieldtypes\C4GHeadlineField;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class GetPopupListener
{
    private $entityManager = null;

    /**
     * GetPopupListener constructor.
     * @param null $entityManager
     */
    public function __construct($entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * Loads the
     * @param GetPopupEvent $event
     * @param $eventname
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onGetPopupGetFields(
        GetPopupEvent $event,
        $eventname,
        EventDispatcherInterface $eventDispatcher
    ) {
        $plugins = $event->getPlugins();
        $fields = [];
        foreach ($plugins as $plugin) {
            $fields = array_merge($fields, $plugin->getFields($event->getDataId()));
        }
        $event->setFields($fields);
    }

    public function onGetPopupGetData(
        GetPopupEvent $event,
        $eventname,
        EventDispatcherInterface $eventDispatcher
    ) {
        $dataId = $event->getDataId();
        $plugins = $event->getPlugins();
        $fields = $event->getFields();
        $data = [];
        foreach ($plugins as $plugin) {
            $data = array_merge($data, $plugin->getData($dataId, $fields, $this->entityManager));
        }
        $event->setData($data);
    }

    public function onGetPopupCreateView(
        GetPopupEvent $event,
        $eventname,
        EventDispatcherInterface $eventDispatcher
    ) {
        $fields = $event->getFields();
        $data = $event->getData();
        $dataId = $event->getDataId();
        $elementData = $this->entityManager
            ->getRepository(EditorElement::class)
            ->findOneBy(['id' => $dataId]);
        $groupId = $elementData->getGroupid();

        //ToDo same classes and divs as con4gis default popup -> one styling for all popups

        $view = '<div class="c4g_popup_header">';

        $typeid = $elementData->getTypeid();
        $caption = $this->entityManager->getRepository(EditorElementType::class)
            ->findOneBy(['id' => $typeid])->getCaption();

        $removeHeadline = true;
        $headline = [];
        foreach ($fields as $key => $field) {
            if ($field->isPopupfield()) {
                if ($field->getFieldName() === 'name') {
                    $removeHeadline = false;
                    $view .= '<div class="c4g_popup_header_featurename">' . $data[$field->getFieldName()] . '</div>';
                    $view .= '<div class="c4g_popup_header_featuretype">' . $caption . '</div></div><br>';
                } else {
                    //remove headline if all fields empty.
                    // TODO in C4GHeadlineField auslagern
                    // TODO Oder "DataPopup" (oder anderer name) Klasse
                    if (($field instanceof C4GHeadlineField) & ! $removeHeadline) {
                        if ($headline['title'] && $headline['view']) {
                            $view .= $headline['headline'] . $headline['view'];
                        }

                        $headline['title'] = $field->getTitle();
                        $headline['headline'] = $field->getC4GPopupField($data, $groupId);
                        $headline['view'] = '';
                    }

                    if (!$field instanceof C4GHeadlineField) {
                        if ($headline['title']) {
                            $headline['view'] .= $field->getC4GPopupField($data, $groupId);
                        } else {
                            $view .= $field->getC4GPopupField($data, $groupId);
                        }
                    }
                }
            }
        }

        //add last headline with fields
        if ($headline['title'] && $headline['view']) {
            $view .= $headline['headline'] . $headline['view'];
        }

        $event->setView($view);
    }
}
