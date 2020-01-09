<?php
/*
  * This file is part of con4gis,
  * the gis-kit for Contao CMS.
  *
  * @package   	con4gis
  * @version    7
  * @author  	con4gis contributors (see "authors.txt")
  * @license 	LGPL-3.0-or-later
  * @copyright 	Küstenschmiede GmbH Software & Design
  * @link       https://www.con4gis.org
  */

namespace con4gis\EditorBundle\Classes\Contao\Callbacks;

use con4gis\EditorBundle\Classes\Services\PluginService;
use con4gis\EditorBundle\Entity\EditorElementCategory;
use Contao\Backend;
use Contao\DataContainer;
use Contao\System;

class TlEditorElementType extends Backend
{
    /**
     * @var PluginService
     */
    private $pluginService = null;

    /**
     * Import the back end user object
     */
    public function __construct()
    {
        parent::__construct();
        $this->import('BackendUser', 'User');
        $this->pluginService = System::getContainer()->get('editor_plugin_service');
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

        return [
            'point' => $GLOBALS['TL_LANG'][$strName]['point'],
            'linestring' => $GLOBALS['TL_LANG'][$strName]['linestring'],
            'polygon' => $GLOBALS['TL_LANG'][$strName]['polygon'],
            'freehand' => $GLOBALS['TL_LANG'][$strName]['freehand'],
            'circle' => $GLOBALS['TL_LANG'][$strName]['circle'],
        ];
    }

    public function getPluginList()
    {
        $configs = System::getContainer()->get('editor_plugin_service')->getDataConfigs();
        $return = [];
        foreach ($configs as $config) {
            if ($config->getDataPlugin()) {
                $return[$config->getId()] = $config->getName() . ' (' . $config->getId() . ')';
            }
        }

        return $return;
    }

    public function updateDCA(DataContainer $dc)
    {
        if (!$dc->id) {
            return;
        }

        $objType = $this->Database->prepare('SELECT plugins FROM tl_c4g_editor_element_type WHERE id=?')
            ->limit(1)
            ->execute($dc->id);
        if ($objType->numRows > 0) {
            if ($objType->plugins) {
                $configs = $this->pluginService->getDataConfigs();
                foreach ($configs as $config) {
                    if ($config->getBackend()) {
                        foreach (unserialize($objType->plugins) as $plugin) {
                            if ($plugin == $config->getId()) {
                                $pluginClass = $config->getDataPlugin();
                                if ($pluginClass) {
                                    $pluginObj = new $pluginClass($config);
                                    $fields = $pluginObj->getBackendFields();
                                    if ($fields) {
                                        $palette = ';{' . $config->getId() . '_legend' . '}';
                                        foreach ($fields as $field => $valArr) {
                                            $palette .= ',' . $field;
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
        $objMap = $this->Database->prepare('SELECT pluginValue FROM tl_c4g_editor_element_preset WHERE pid=? AND pluginField=?')
            ->limit(1)
            ->execute($dc->id, $dc->field);
        if ($objMap->numRows > 0) {
            $result = $objMap->pluginValue;
        }

        return $result;
    }

    public function saveField($varValue, DataContainer $dc)
    {
        $objMap = $this->Database->prepare('SELECT pluginValue FROM tl_c4g_editor_element_preset WHERE pid=? AND pluginField=?')
            ->limit(1)
            ->execute($dc->id, $dc->field);

        if ($objMap->numRows > 0) {
            $this->Database->prepare('UPDATE tl_c4g_editor_element_preset SET tstamp=?, pluginValue=? WHERE pid=? AND pluginField=?')
                ->execute(time(), $varValue, $dc->id, $dc->field);
        } else {
            $pluginId = intval($GLOBALS['TL_DCA']['tl_c4g_editor_element_type']['fields'][$dc->field]['pluginId']);
            $this->Database->prepare('INSERT INTO tl_c4g_editor_element_preset SET tstamp=?, pid=?, pluginId=?, pluginField=?, pluginValue=?')
                ->execute(time(), $dc->id, $pluginId, $dc->field, $varValue);
        }

        return null;
    }
}
