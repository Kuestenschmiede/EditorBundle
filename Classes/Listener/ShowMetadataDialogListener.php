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


use con4gis\EditorBundle\Classes\Events\ShowMetadataDialogEvent;
use con4gis\EditorBundle\Classes\EditorBrickTypes;
use con4gis\EditorBundle\Classes\Plugins\DataPluginInterface;
use con4gis\EditorBundle\Entity\EditorMapData;
use con4gis\EditorBundle\Entity\EditorMapElement;
use con4gis\ProjectsBundle\Classes\Common\C4GBrickCommon;
use con4gis\ProjectsBundle\Classes\Common\C4GBrickConst;
use con4gis\ProjectsBundle\Classes\Dialogs\C4GBrickDialog;
use con4gis\ProjectsBundle\Classes\Dialogs\C4GBrickDialogParams;
use con4gis\ProjectsBundle\Classes\Views\C4GBrickViewType;
use Contao\Database;
use Doctrine\ORM\EntityManager;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class ShowMetadataDialogListener
{
    /**
     * @var EntityManager
     */
    private $entityManager = null;

    /**
     * ShowMetadataDialogListener constructor.
     * @param EntityManager $entityManager
     */
    public function __construct(EntityManager $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function onShowMetadataDialogGetFieldList(
        ShowMetadataDialogEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $fieldList = [];
        $plugins = $event->getPlugins();
        $dataId = $event->getDataId();
        foreach ($plugins as $plugin) {
            $fieldList = array_merge($fieldList, $plugin->getFields($dataId));
        }
        $event->setFieldList($fieldList);
    }

    public function onShowMetadataDialogGetDialogParams(
        ShowMetadataDialogEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $dialogParams = new C4GBrickDialogParams(EditorBrickTypes::BRICK_GENERIC_PROJECT,
            C4GBrickViewType::GROUPPROJECT);
        $data = $this->entityManager->getRepository(EditorMapData::class)
            ->findOneBy(['id' => $event->getDataId()]);
        $dialogParams->addButton(C4GBrickConst::BUTTON_SAVE);
        $dialogParams->setProjectId($event->getProjectId());
        $dialogParams->setGroupId($data->getGroupid());
        $event->setDialogParams($dialogParams);
    }

    /**
     * Loads the data from the entity and stores the data that is contained in the fieldlist into the event.
     * @param ShowMetadataDialogEvent $event
     * @param $eventName
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onShowMetadataGetData(
        ShowMetadataDialogEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $dataId = $event->getDataId();
        $fieldList = $event->getFieldList();
        $plugins = $event->getPlugins();
        $data = [];
        foreach ($plugins as $plugin) {
            // call all plugin methods
            $tmpData = $plugin->getData($dataId, $fieldList, $this->entityManager);
            if (is_array($tmpData)) {
                $data = array_merge($data, $tmpData);
            }

        }
        $event->setData($data);
    }

    public function onShowMetadataDialogGenerateHtml(
        ShowMetadataDialogEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $dialogParams = $event->getDialogParams();
        $dataid = $event->getDataId();
        $data = $this->entityManager->getRepository(EditorMapData::class)
            ->findOneBy(['id' => $dataid]);
        $typeid = $data->getTypeid();
        $caption = $this->entityManager->getRepository(EditorMapElement::class)
            ->findOneBy(['id' => $typeid])->getCaption();

        $fieldList = $event->getFieldList();
        $withData = false;
        $defaultPlugin = true;
        if ($fieldList) {
            $plugins = $event->getPlugins();
            foreach ($plugins as $plugin) {
                $config = $plugin->getConfig();

                $pluginData = $plugin->getData($dataid, $fieldList, $this->entityManager);
                if ($config->getId() == 1) {
                    $preData = $event->getData();
                    foreach ($fieldList as $key=>$field) {
                        if ($field->getFieldName() && $preData[$field->getFieldName()]) {
                            $field->setInitialValue($preData[$field->getFieldName()]);
                            $fieldList[$key] = $field;
                        }
                    }
                } else {
                    if ($pluginData && count($pluginData) > 0) {
                        $withData = true;
                    }
                }

                $defaultFields = $plugin->getBackendFields();
                if (is_array($defaultFields)) {
                    foreach ($defaultFields as $defaultField => $values) {
                        $value = $plugin->getDefaultValue($config->getId(), $typeid, $defaultField, $this->entityManager);
                        if ($value) {
                            foreach ($fieldList as $key=>$field) {
                                if ($field->getFieldName() && ($field->getFieldName() == $defaultField)) {
                                    $field->setInitialValue($value);
                                    $fieldList[$key] = $field;
                                }
                            }
                        }
                    }
                }
            }
        }
        $list = $fieldList;

        if (!$withData) {
            $data = null; //ansonsten werden initialvalues nicht gefüllt.
        } else {
            $data = $event->getData();
        }

        $html = '<br><div class="c4g_editor_metadata_headline">'.$caption.' bearbeiten</div><br>'; //ToDo Language
        $html .= C4GBrickDialog::buildDialogView(
            $list,
            Database::getInstance(),
            $data,
            "",
            $dialogParams
        );
        $view = [];
        // add trigger button
        $html .= "<button id ='send-dialog'></button>";
        $html .= "<button id ='cancel-dialog'></button>";
        $view['form'] = $html;
        $view['headline'] = "Datensatz bearbeiten"; //ToDo Language
        $event->setView($view);
    }
}