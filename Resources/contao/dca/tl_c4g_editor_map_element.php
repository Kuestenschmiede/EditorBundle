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


/**
 * Table tl_module
 */
$strName = 'tl_c4G_editormapelement';

$GLOBALS['TL_DCA'][$strName] = array
(
    //config
    'config' => array
    (
        'dataContainer'     => 'Table',
        'enableVersioning'  => 'true',
        'onload_callback'             => array(
            array($strName, 'updateDCA')),
        'onsubmit_callback'             => array(
            array('\con4gis\MapsProjectBundle\Classes\Cache\C4GMapsProjectAutomator', 'purgeEditorConfigCache')
        ),
    ),


    //List
    'list' => array
    (
        'sorting' => array
        (
            'mode'              => 2,
            'fields'            => array('name ASC'),
            'panelLayout'       => 'filter;sort,search,limit',
            'headerFields'      => array('name','caption'),
        ),

        'label' => array
        (
            'fields'            => array('name', 'caption'),
            'showColumns'       => true,
        ),

        'global_operations' => array
        (
            'all' => array
            (
                'label'         => $GLOBALS['TL_LANG']['MSC']['all'],
                'href'          => 'act=select',
                'class'         => 'header_edit_all',
                'attributes'    => 'onclick="Backend.getScrollOffSet()" accesskey="e"'
            )
        ),

        'operations' => array
        (
            'edit' => array
            (
                'label'         => $GLOBALS['TL_LANG'][$strName]['edit'],
                'href'          => 'act=edit',
                'icon'          => 'edit.gif',
            ),
            'copy' => array
            (
                'label'         => $GLOBALS['TL_LANG'][$strName]['copy'],
                'href'          => 'act=copy',
                'icon'          => 'copy.gif',
            ),
            'delete' => array
            (
                'label'         => $GLOBALS['TL_LANG'][$strName]['delete'],
                'href'          => 'act=delete',
                'icon'          => 'delete.gif',
                'attributes'    => 'onclick="if(!confirm(\'' . $GLOBALS['TL_LANG']['MSC']['deleteConfirm'] . '\')) return false;Backend.getScrollOffset()"',
            ),
            'show' => array
            (
                'label'         => $GLOBALS['TL_LANG'][$strName]['show'],
                'href'          => 'act=show',
                'icon'          => 'show.gif',
            ),
        )
    ),

    //Palettes
    'palettes' => array
    (
        'default'   =>  '{data_legend}, name, caption, categories, pointstyle, linestyle, polygonstyle, circlestyle, freehandstyle,scenarios, plugins',
    ),


    //Fields
    'fields' => array
    (
        'name' => array
        (
            'label'             => $GLOBALS['TL_LANG'][$strName]['name'],
            'flag'              => 1,
            'sorting'           => true,
            'default'           => '',
            'search'            => true,
            'inputType'         => 'text',
            'eval'              => array('mandatory' => true, 'tl_class' => 'long')
        ),

        'caption' => array
        (
            'label'             => $GLOBALS['TL_LANG'][$strName]['caption'],
            'flag'              => 1,
            'sorting'           => true,
            'default'           => '',
            'search'            => true,
            'inputType'         => 'text',
            'eval'              => array('mandatory' => true, 'tl_class' => 'long')
        ),

        'pointstyle' => array
        (
            'label'             => &$GLOBALS['TL_LANG'][$strName]['pointstyle'],
            'default'           => 0,
            'exclude'           => true,
            'inputType'         => 'select',
            'foreignKey'        => 'tl_c4g_map_locstyles.name',
            'relation'          => array('type' => 'hasOne', 'load' => 'lazy'),
            'eval'              => array('includeBlankOption'=>true, 'chosen'=>true, 'tl_class'=>'w50 wizard', 'style' => 'width:100%'),
        ),

        'linestyle' => array
        (
            'label'             => &$GLOBALS['TL_LANG'][$strName]['linestyle'],
            'default'           => 0,
            'exclude'           => true,
            'inputType'         => 'select',
            'foreignKey'        => 'tl_c4g_map_locstyles.name',
            'relation'          => array('type' => 'hasOne', 'load' => 'lazy'),
            'eval'              => array('includeBlankOption'=>true, 'chosen'=>true, 'tl_class'=>'w50 wizard', 'style' => 'width:100%'),
        ),

        'polygonstyle' => array
        (
            'label'             => &$GLOBALS['TL_LANG'][$strName]['polygonstyle'],
            'default'           => 0,
            'exclude'           => true,
            'inputType'         => 'select',
            'foreignKey'        => 'tl_c4g_map_locstyles.name',
            'relation'          => array('type' => 'hasOne', 'load' => 'lazy'),
            'eval'              => array('includeBlankOption'=>true, 'chosen'=>true, 'tl_class'=>'w50 wizard', 'style' => 'width:100%'),
        ),
        'circlestyle' => array
        (
            'label'             => &$GLOBALS['TL_LANG'][$strName]['circlestyle'],
            'default'           => 0,
            'exclude'           => true,
            'inputType'         => 'select',
            'foreignKey'        => 'tl_c4g_map_locstyles.name',
            'relation'          => array('type' => 'hasOne', 'load' => 'lazy'),
            'eval'              => array('includeBlankOption'=>true, 'chosen'=>true, 'tl_class'=>'w50 wizard', 'style' => 'width:100%'),
        ),

        'freehandstyle' => array
        (
            'label'             => &$GLOBALS['TL_LANG'][$strName]['freehandstyle'],
            'default'           => 0,
            'exclude'           => true,
            'inputType'         => 'select',
            'foreignKey'        => 'tl_c4g_map_locstyles.name',
            'relation'          => array('type' => 'hasOne', 'load' => 'lazy'),
            'eval'              => array('includeBlankOption'=>true, 'chosen'=>true, 'tl_class'=>'w50 wizard', 'style' => 'width:100%'),
        ),

        'categories' => array
        (
            'label'                 => &$GLOBALS['TL_LANG'][$strName]['categories'],
            'exclude'               => true,
            'default'                 => '',
            'inputType'             => 'checkbox',
            'options_callback'      => array('tl_c4G_editormapelement','getCategoryList'),
            'eval'                  => array(
                'multiple' => true,
                'mandatory' => true,
                'tl_class' => 'c4g_w50',
            ),
        ),
        'scenarios' => array
        (
            'label'                 => &$GLOBALS['TL_LANG'][$strName]['scenarios'],
            'exclude'               => true,
            'default'                 => '',
            'inputType'             => 'checkbox',
            'options_callback'      => array('tl_c4G_editormapelement','getScenarioList'),
            'eval'                  => array(
                'multiple' => true,
                'mandatory' => true,
                'tl_class' => 'clr',
            ),
        ),
        'plugins' => array
        (
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['plugins'],
            'exclude'                 => true,
            'filter'                  => true,
            'inputType'               => 'checkboxWizard',
            'options_callback'        => array('tl_c4G_editormapelement','getPluginList'),
            'eval'                  => array(
                'multiple' => true,
                'mandatory' => true,
                'tl_class' => 'long',
                'submitOnChange' => true
            )
        )
    )
);


/**
 * Class tl_c4G_editormapelement
 */
class tl_c4g_editor_map_element extends Backend
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
        $categoryRepo = \Contao\System::getContainer()->get('doctrine.orm.entity_manager')
            ->getRepository(\con4gis\MapsProjectBundle\Entity\EditorMapCategory::class);
        $categories = $categoryRepo->findAll();
        uasort($categories, function ($a, $b) {
            return strcmp($a->getCaption(), $b->getCaption());
        });
        foreach ($categories as $category) {
            $return[$category->getId()] = $category->getCaption();
        }
        return $return;
    }

    /**
     * Get a list of all available scenarios
     * @return array()
     */
    public function getScenarioList()
    {
        $szenarios = \con4gis\MapsProjectBundle\Resources\contao\models\MapsProjectScenarioModel::findAll();
        foreach ($szenarios as $szenario) {
            $return[$szenario->id] = $szenario->caption;
        }
        return $return;
    }

    public function getDrawStyles()
    {
        $strName = 'tl_c4G_editormapelement';

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
        $event = new \con4gis\MapsProjectBundle\Classes\Events\LoadPluginsEvent();
        $dispatcher = \Contao\System::getContainer()->get('event_dispatcher');
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

        $objMap = $this->Database->prepare("SELECT plugins FROM tl_c4G_editormapelement WHERE id=?")
            ->limit(1)
            ->execute($dc->id);
        if ($objMap->numRows > 0) {
            if ($objMap->plugins) {
                $event = new \con4gis\MapsProjectBundle\Classes\Events\LoadPluginsEvent();
                $dispatcher = \Contao\System::getContainer()->get('event_dispatcher');
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

                                        $GLOBALS['TL_DCA']['tl_c4G_editormapelement']['palettes']['default'] .= $palette;
                                        $GLOBALS['TL_DCA']['tl_c4G_editormapelement']['fields'] = array_merge($GLOBALS['TL_DCA']['tl_c4G_editormapelement']['fields'], $fields);
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
            $pluginId = intval($GLOBALS['TL_DCA']['tl_c4G_editormapelement']['fields'][$dc->field]['pluginId']);
            $this->Database->prepare("INSERT INTO tl_c4g_maps_project_element_defaults SET tstamp=?, pid=?, pluginId=?, pluginField=?, pluginValue=?")
                ->execute(time(), $dc->id, $pluginId, $dc->field, $varValue);
        }

        return null;
    }
}
