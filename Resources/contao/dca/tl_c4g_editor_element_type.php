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


/**
 * Table tl_c4g_editor_element_type
 */
$strName = 'tl_c4g_editor_element_type';
$cbClass = \con4gis\EditorBundle\Classes\Contao\Callbacks\TlEditorElementType::class;

$GLOBALS['TL_DCA'][$strName] = array
(
    //config
    'config' => array
    (
        'dataContainer'     => 'Table',
        'enableVersioning'  => 'true',
        'onload_callback' => [[$cbClass, 'updateDCA']],
        'onsubmit_callback'             => array(
            array('\con4gis\EditorBundle\Classes\Cache\C4GEditorAutomator', 'purgeEditorConfigCache')
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
            'icon'              => 'bundles/con4giscore/images/be-icons/con4gis_blue.svg',
        ),

        'label' => array
        (
            'fields'            => array('name', 'caption'),
            'showColumns'       => true,
        ),

        'global_operations' => array
        (
            'all' => [
                'label'         => $GLOBALS['TL_LANG']['MSC']['all'],
                'href'          => 'act=select',
                'class'         => 'header_edit_all',
                'attributes'    => 'onclick="Backend.getScrollOffSet()" accesskey="e"'
            ],
            'back' => [
                'href'                => 'key=back',
                'class'               => 'header_back',
                'button_callback'     => ['\con4gis\CoreBundle\Classes\Helper\DcaHelper', 'back'],
                'icon'                => 'back.svg',
                'label'               => &$GLOBALS['TL_LANG']['MSC']['backBT'],
            ],
        ),

        'operations' => array
        (
            'edit' => array
            (
                'label'         => $GLOBALS['TL_LANG'][$strName]['edit'],
                'href'          => 'act=edit',
                'icon'          => 'edit.svg',
            ),
            'copy' => array
            (
                'label'         => $GLOBALS['TL_LANG'][$strName]['copy'],
                'href'          => 'act=copy',
                'icon'          => 'copy.svg',
            ),
            'delete' => array
            (
                'label'         => $GLOBALS['TL_LANG'][$strName]['delete'],
                'href'          => 'act=delete',
                'icon'          => 'delete.svg',
                'attributes'    => 'onclick="if(!confirm(\'' . $GLOBALS['TL_LANG']['MSC']['deleteConfirm'] . '\')) return false;Backend.getScrollOffset()"',
            ),
            'show' => array
            (
                'label'         => $GLOBALS['TL_LANG'][$strName]['show'],
                'href'          => 'act=show',
                'icon'          => 'show.svg',
            ),
        )
    ),

    //Palettes
    'palettes' => array
    (
        'default'   =>  '{data_legend}, name, caption, categories, pointstyle, linestyle, polygonstyle, circlestyle, freehandstyle',
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

        'importId' =>
            [
                'eval'                    => array('doNotCopy' => true)
            ],

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
            'options_callback'      => array($cbClass,'getCategoryList'),
            'eval'                  => array(
                'multiple' => true,
                'mandatory' => true,
                'tl_class' => 'c4g_w50',
            ),
        ),
        // must save an empty array into the entity to avoid serialization errors
        'scenarios' => array
        (
            'default'                 => []
        ),
        'plugins' => array
        (
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['plugins'],
            'exclude'                 => true,
            'filter'                  => true,
            'inputType'               => 'checkboxWizard',
            'options_callback'        => array($cbClass,'getPluginList'),
            'eval'                  => array(
                'multiple' => true,
                'mandatory' => true,
                'tl_class' => 'clr',
                'submitOnChange' => true
            ),
            'default'                 => ['1']
        )
    )
);

