<?php
/**
 * con4gis - the gis-kit
 *
 * @version   php 7
 * @package   con4gis
 * @author    con4gis contributors (see "authors.txt")
 * @license   GNU/LGPL http://opensource.org/licenses/lgpl-3.0.html
 * @copyright Küstenschmiede GmbH Software & Design 2011 - 2019.
 * @link      https://www.kuestenschmiede.de
 */


/**
 * Table tl_c4g_editor_element_type
 */
$strName = 'tl_c4g_editor_configuration';
$cbClass = \con4gis\EditorBundle\Classes\Contao\Callbacks\TlEditorConfiguration::class;

$GLOBALS['TL_DCA'][$strName] = array
(
    //config
    'config' => array
    (
        'dataContainer'     => 'Table',
        'enableVersioning'  => 'true',
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
            'headerFields'      => array('name', 'type'),
        ),

        'label' => array
        (
            'fields'            => array('name', 'type'),
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
        'default'   =>  '{data_legend},name,type,categories,editor_helpurl,is_backend_editor_default,editor_project_group;',
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

        'type' =>
        [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['type'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options'                 => array('frontend', 'backend'),
            'eval'                    => array('tl_class'=>'clr'),
            'reference'               => &$GLOBALS['TL_LANG'][$strName]['references'],
            'sql'                     => "char(10) NOT NULL default ''"
        ],

        'categories' => array
        (
            'label'                 => &$GLOBALS['TL_LANG'][$strName]['categories'],
            'exclude'               => true,
            'default'                 => '',
            'inputType'             => 'checkbox',
            'options_callback'      => array($cbClass, 'getCategoryList'),
            'eval'                  => array(
                'multiple' => true,
                'mandatory' => true,
                'tl_class' => 'c4g_w50',
            ),
        ),
        'editor_vars' => array
        (
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['editor_vars'],
            'inputType'               => 'keyValueWizard',
            'exclude'                 => true,
            'sql'                     => "text NULL"
        ),

        'editor_show_items' => array
        (
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['editor_show_items'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ),
        'editor_helpurl' => array
        (
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['editor_helpurl'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('rgxp'=>'url', 'decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'wizard'),
            'sql'                     => "varchar(255) NOT NULL default ''"
        ),
        'is_backend_editor_default' => array
        (
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['is_backend_editor_default'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'eval'                    => array('tl_class'=>'long'),
            'sql'                     => "char(1) NULL"
        ),
    
        'editor_project_group' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['editor_project_group'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'foreignKey'              => 'tl_member_group.name',
            'relation'                => array('type'=>'belongsToMany', 'load'=>'lazy'),
            'eval'                    => array('tl_class'=>'clr'),
            'reference'               => &$GLOBALS['TL_LANG'][$strName]['references'],
            'sql'                     => "char(10) NOT NULL default ''"
        ]
    )
);

