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
$strName = 'tl_c4G_editorcategory';

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
            'fields'            => array('caption'),
            'panelLayout'       => 'filter;sort,search,limit',
            'headerFields'      => array('type'),
        ),

        'label' => array
        (
            'fields'            => array('caption'),
            'format'            => '<span style="color:#E30518">%s</span>',
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
        'default'   =>  '{data_legend}, caption, locstyle',
    ),


    //Fields
    'fields' => array
    (
        'caption' => array
        (
            'label'             => $GLOBALS['TL_LANG'][$strName]['caption'],
            'flag'              => 1,
            'sorting'           => true,
            'search'            => true,
            'default'                 => '',
            'inputType'         => 'text',
            'eval'              => array('mandatory' => true, 'tl_class' => 'long'),
        )
    )
);


/* Class tl_mapcil_component_types
 *
 * Provide miscellaneous methods that are used by the data configuration array.
 * @package   con4gis_mapcil
 * @author    Matthias Eilers
 * @copyright Küstenschmiede GmbH Software & Design 2015
*/
class tl_c4g_editor_map_category extends Backend
{
    /**
     * Import the back end user object
     */
    public function __construct()
    {
        parent::__construct();
        $this->import('BackendUser', 'User');
    }
}
