<?php
/**
 * Created by PhpStorm.
 * User: cro
 * Date: 17.01.19
 * Time: 10:13
 */

namespace con4gis\EditorBundle\Classes\Contao\Callbacks;

use con4gis\EditorBundle\Classes\Events\LoadPluginsEvent;
use con4gis\EditorBundle\Entity\EditorElementCategory;
use Contao\Backend;
use Contao\DataContainer;
use Contao\System;

class TlEditorElementType extends Backend
{
    /**
     * Import the back end user object
     */
    public function __construct()
    {
        parent::__construct();
        $this->import('BackendUser', 'User');
    }

    /**
     * Get a list of all available scenarios
     * @return array()
     */
    public function getCategoryList()
    {
        $categoryRepo = System::getContainer()->get('doctrine.orm.entity_manager')
            ->getRepository(EditorElementCategory::class);
        $categories = $categoryRepo->findAll();
        uasort($categories, function ($a, $b) {
            return strcmp($a->getCaption(), $b->getCaption());
        });
        foreach ($categories as $category) {
            $return[$category->getId()] = $category->getCaption();
        }
        return $return;
    }

    public function getDrawStyles()
    {
        $strName = 'tl_c4g_editor_element_type';

        return array(
            'point' => $GLOBALS['TL_LANG'][$strName]['point'],
            'linestring' => $GLOBALS['TL_LANG'][$strName]['linestring'],
            'polygon' => $GLOBALS['TL_LANG'][$strName]['polygon'],
            'freehand' => $GLOBALS['TL_LANG'][$strName]['freehand'],
            'circle' => $GLOBALS['TL_LANG'][$strName]['circle']
        );
    }

    public function getPluginList()
    {
        $event = new LoadPluginsEvent();
        $dispatcher = System::getContainer()->get('event_dispatcher');
        $dispatcher->dispatch($event::NAME, $event);
        $configs = $event->getConfigs();
        $return = [];
        foreach ($configs as $config) {
            if ($config->getDataPlugin()) {
                $return[$config->getId()] = $config->getName() . " (" . $config->getId() . ")";
            }
        }
        return $return;
    }

    public function updateDCA(DataContainer $dc)
    {
        if (!$dc->id) return;

        $objMap = $this->Database->prepare("SELECT plugins FROM tl_c4g_editor_element_type WHERE id=?")
            ->limit(1)
            ->execute($dc->id);
        if ($objMap->numRows > 0) {
            if ($objMap->plugins) {
                $event = new LoadPluginsEvent();
                $dispatcher = System::getContainer()->get('event_dispatcher');
                $dispatcher->dispatch($event::NAME, $event);
                $configs = $event->getConfigs();
                foreach ($configs as $config) {
                    if ($config->getBackend()) {
                        foreach (unserialize($objMap->plugins) as $plugin) {
                            if ($plugin == $config->getId()) {
                                $pluginClass = $config->getDataPlugin();
                                if ($pluginClass) {
                                    $pluginObj = new $pluginClass($config);
                                    $fields = $pluginObj->getBackendFields();
                                    if ($fields) {
                                        $palette = ';{'.$config->getId().'_legend'.'}';
                                        foreach ($fields as $field => $valArr) {
                                            $palette .= ','.$field;
                                            $fields[$field]['pluginId'] = $config->getId();
                                        }

                                        $GLOBALS['TL_DCA']['tl_c4g_editor_element_type']['palettes']['default'] .= $palette;
                                        $GLOBALS['TL_DCA']['tl_c4g_editor_element_type']['fields'] = array_merge($GLOBALS['TL_DCA']['tl_c4g_editor_element_type']['fields'], $fields);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    public function loadField($varValue, DataContainer $dc)
    {
        $result = $varValue;
        $objMap = $this->Database->prepare("SELECT pluginValue FROM tl_c4g_maps_project_element_defaults WHERE pid=? AND pluginField=?")
            ->limit(1)
            ->execute($dc->id, $dc->field);
        if ($objMap->numRows > 0) {
            $result = $objMap->pluginValue;
        }

        return $result;
    }

    public function saveField($varValue, DataContainer $dc)
    {
        $objMap = $this->Database->prepare("SELECT pluginValue FROM tl_c4g_maps_project_element_defaults WHERE pid=? AND pluginField=?")
            ->limit(1)
            ->execute($dc->id, $dc->field);

        if ($objMap->numRows > 0) {
            $this->Database->prepare("UPDATE tl_c4g_maps_project_element_defaults SET tstamp=?, pluginValue=? WHERE pid=? AND pluginField=?")
                ->execute(time(), $varValue, $dc->id, $dc->field);
        } else {
            $pluginId = intval($GLOBALS['TL_DCA']['tl_c4g_editor_element_type']['fields'][$dc->field]['pluginId']);
            $this->Database->prepare("INSERT INTO tl_c4g_maps_project_element_defaults SET tstamp=?, pid=?, pluginId=?, pluginField=?, pluginValue=?")
                ->execute(time(), $dc->id, $pluginId, $dc->field, $varValue);
        }

        return null;
    }
}