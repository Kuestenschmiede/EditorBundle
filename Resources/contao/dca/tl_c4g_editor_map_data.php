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

$strName = 'tl_c4G_editormap_data';

$GLOBALS['TL_DCA'][$strName] = array
(
    //config
    'config' => array
    (
        'dataContainer'     => 'Table',
        'enableVersioning'  => 'true',
//        'onsubmit_callback'           => array(
//            array('\c4g\Core\C4GAutomator', 'purgeApiCache')
//        )
    ),


    //List
    'list' => array
    (
        'sorting' => array
        (
            'mode'              => 11,
            'fields'            => array('name ASC'),
            'panelLayout'       => 'filter;sort,search,limit',
            #'headerFields'      => array('group_Id', 'number', 'caption'),
        ),

        'label' => array
        (
            'fields'            => array('name'),
            'format'            => '<span style="color:#023770">%s</span>'
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
                'label'         => $GLOBALS['TÖ_LANG'][$strName]['copy'],
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
        'default'   =>  '{custom_legend},caption,type_id;'.
            '{group_legend},group_id',
    ),

    //Fields
    'fields' => array
    (
        'projectid' => array
        (
            'label'             => $GLOBALS['TL_LANG'][$strName]['projectid'],
            'exclude'           => true,
            'sorting'           => true,
            'search'            => true,
            'flag'              => 1,
            'inputType'         => 'select',
            'eval'              => array('mandatory' => true),
            'foreignKey'        => 'tl_c4g_maps_project.caption',
            'relation'          => array('type'=>'belongsTo', 'load'=>'lazy')
        ),

        'groupid' => array
        (
            'label'             => $GLOBALS['TL_LANG'][$strName]['group_id'],
            'exclude'           => true,
            'sorting'           => true,
            'search'            => true,
            'flag'              => 1,
            'inputType'         => 'select',
            'foreignKey'        => 'tl_member_group.name',
            'eval'              => array('mandatory' => true),
            'relation'          => array('type' => 'hasOne', 'load' => 'lazy')
        ),

        'name' => array
        (
            'label'             => $GLOBALS['TL_LANG'][$strName]['name'],
            'sorting'           => true,
            'flag'              => 1,
            'search'            => true,
            'inputType'         => 'text',
            'eval'              => array('mandatory' => true, 'tl_class' => 'w50', 'maxlength' => 255),
        ),

        'scenario_id' => array
        (
            'label'             => $GLOBALS['TL_LANG'][$strName]['scenario_id'],
            'inputType'         => 'select',
            'foreignKey'        => 'tl_c4g_maps_project_scenarios.caption',
            'eval'              => array('mandatory' => true, 'tl_class' => 'w50'),
            'relation'          => array('type' => 'hasOne', 'load' => 'lazy'),
        ),

        'category_id' => array
        (
            'label'             => $GLOBALS['TL_LANG'][$strName]['category_id'],
            'inputType'         => 'select',
            'foreignKey'        => 'tl_c4G_editorcategory.caption',
            'eval'              => array('mandatory' => true, 'tl_class' => 'w50'),
            'relation'          => array('type' => 'hasOne', 'load' => 'lazy'),
        ),

        'type_id' => array
        (
            'label'             => $GLOBALS['TL_LANG'][$strName]['type_id'],
            'inputType'         => 'select',
            'foreignKey'        => 'tl_c4G_editormapelement.caption',
            'eval'              => array('mandatory' => true, 'tl_class' => 'w50'),
            'relation'          => array('type' => 'hasOne', 'load' => 'lazy'),
        ),


        'loc_geox' => array
        (
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['loc_geox'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>20, 'tl_class'=>'w50 wizard' ),
            'save_callback'           => array(array('tl_mapcil_projects','setLocLon')),
            'wizard'                  => array(array('GeoPicker', 'getPickerLink')),
        ),

        'loc_geoy' => array
        (
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['loc_geoy'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('maxlength'=>20, 'tl_class'=>'w50 wizard' ),
            'save_callback'           => array(array('tl_mapcil_projects','setLocLat')),
            'wizard'                  => array(array('GeoPicker', 'getPickerLink')),
        ),

        'loc_label' => array
        (
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['loc_label'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => array('tl_class'=>'clr' ),
        ),


        'description' => array
        (
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['description'],
            //'exclude'                 => true,
            'inputType'               => 'textarea',
            'search'                  => true,
            'eval'                    => array('tl_class'=>'long','style'=>'height:60px', 'decodeEntities'=>true),
        ),

        'contact_name' => array
        (
            'label'             => $GLOBALS['TL_LANG'][$strName]['contact_name'],
            'sorting'           => true,
            'flag'              => 1,
            'search'            => true,
            'inputType'         => 'text',
            'eval'              => array('mandatory' => true, 'tl_class' => 'w50', 'maxlength' => 255),
        ),

        'contact_phone' => array
        (
            'label'             => $GLOBALS['TL_LANG'][$strName]['contact_phone'],
            'inputType'         => 'text',
            'eval'              => array('maxlength'=>64, 'rgxp'=>'phone', 'decodeEntities'=>true, 'feEditable'=>true, 'feViewable'=>true, 'feGroup'=>'contact', 'tl_class'=>'w50'),
        ),

        'last_member_id' => array
        (
            'label'             => $GLOBALS['TL_LANG'][$strName]['last_member_id'],
            'flag'              => 1,
            'sorting'           => true,
            'search'            => true,
            'inputType'         => 'select',
            'eval'              => array('mandatory' => true, 'tl_class' => 'w50'),
            'exclude'           => true,
            'foreignKey'        => 'tl_member.firstname',
            'relation'          => array('type' => 'hasOne', 'load' => 'lazy'),
        ),
        'published' => array
        (
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['published'],
            //'sorting'                 => true,
            //'flag'                    => 1,
            //'search'                  => true,
            'inputType'               => 'checkbox',
            'eval'                    => array('tl_class'=>'w50'),
        ),
        'geojson' => array
        (
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['geojson'],
            'exclude'                 => true,
            'inputType'               => 'textarea',
            'eval'                    => array('tl_class'=>'wizard', 'preserve_tags'=>true),
            // 'save_callback'           => array(array('tl_c4g_maps','setLocData')),
            'wizard'                  => array(array('con4gis\MapsBundle\Resources\contao\classes\GeoEditor', 'getEditorLink')),
//            'sql'                     => "text NULL"
        ),

    )

);


/* Class tl_mapcil_components
 *
 * Provide miscellaneous methods that are used by the data configuration array.
 * @package   con4gis_mapcil
 * @author    Matthias Eilers
 * @copyright Küstenschmiede GmbH Software & Design 2015
*/
class tl_c4g_editor_map_data extends Backend
{
    /**
     * Import the back end user object
     */
    public function __construct()
    {
        parent::__construct();
        $this->import('BackendUser', 'User');
    }


    public function updateDCA (DataContainer $dc)
    {

    }

    /**
     * Return all Location Styles as array
     * @param object
     * @return array
     */
    public function getLocStyles(DataContainer $dc)
    {
        $locStyles = $this->Database->prepare("SELECT id,name FROM tl_c4g_map_locstyles ORDER BY name")
            ->execute();
        $return[''] = '-';
        while ($locStyles->next())
        {
            $return[$locStyles->id] = $locStyles->name;
        }
        return $return;
    }

    /**
     * Validate Longitude
     */
    public function setLocLon($varValue, \DataContainer $dc)
    {
        if ($varValue != 0)
        {
            if (!\con4gis\MapsBundle\Resources\contao\classes\Utils::validateLon($varValue))
            {
                throw new \Exception($GLOBALS['TL_LANG']['c4g_maps']['geox_invalid']);
            }
        }
        return $varValue;
    }

    /**
     * Validate Latitude
     */
    public function setLocLat($varValue, \DataContainer $dc)
    {
        if ($varValue != 0)
        {
            if (!\con4gis\MapsBundle\Resources\contao\classes\Utils::validateLat($varValue))
            {
                throw new \Exception($GLOBALS['TL_LANG']['c4g_maps']['geoy_invalid']);
            }
        }
        return $varValue;
    }


    public function generateUuid($varValue, DataContainer $dc)
    {
        if ($varValue == '') {
            return \con4gis\ProjectsBundle\Classes\Common\C4GBrickCommon::getGUID();
        }
        else {
            return $varValue;
        }
    }

}
