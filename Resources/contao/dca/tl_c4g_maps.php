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

use Contao\CoreBundle\DataContainer\PaletteManipulator;


/**
 * Table tl_c4g_maps
 */

$GLOBALS['TL_DCA']['tl_c4g_maps']['palettes']['gnrcPrjct'] = '{general_legend},name,profile,profile_mobile,published;{map_legend},is_map;{location_legend},location_type,tDontShowIfEmpty,data_layername,data_hidelayer,hide_when_in_tab;{protection_legend:hide},protect_element;';

$GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['memberVisibility_specialGroups'] = 'specialGroups';
$GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['useDatabaseStatus'] = 'databaseStatus';


$GLOBALS['TL_DCA']['tl_c4g_maps']['fields']['tDontShowIfEmpty'] = array
(
  'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['tDontShowIfEmpty'],
  'exclude'                 => true,
  'filter'                  => true,
  'inputType'               => 'checkbox',
  'eval'                    => array('submitOnChange'=>false, 'tl_class'=>'clr'),
  'sql'                     => "char(1) NOT NULL default ''"
);

$GLOBALS['TL_DCA']['tl_c4g_maps']['fields']['specialGroups'] = array
(
			'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['specialGroups'],
			'exclude'                 => true,
			'inputType'               => 'checkbox',
			'foreignKey'              => 'tl_member_group.name',
			'eval'                    => array('mandatory'=>false, 'multiple'=>true, 'tl_class'=>'clr'),
			'sql'                     => "blob NULL"
);

//$GLOBALS['TL_DCA']['tl_c4g_maps']['fields']['scenarios'] = array
//(
//    'label'                 => &$GLOBALS['TL_LANG']['tl_c4g_maps']['scenarios'],
//    'exclude'               => true,
//    'default'                 => '',
//    'inputType'             => 'checkbox',
//    'options_callback'      => array('tl_c4g_maps_scenarios','getScenarioList'),
//    'eval'                  => array(
//        'multiple' => true,
//        'tl_class' => 'c4g_w50',
//    ),
//    'sql'                   => "blob NULL"
//);
//
//class tl_c4g_maps_scenarios extends Backend
//{
//    /**
//     * Import the back end user object
//     */
//    public function __construct()
//    {
//        parent::__construct();
//        $this->import('BackendUser', 'User');
//    }
//
//    /**
//     * Get a list of all available scenarios
//     * @return array()
//     */
//    public function getScenarioList()
//    {
//        $scenarios = \con4gis\MapsProjectBundle\Resources\contao\models\MapsProjectScenarioModel::findAll();
//        foreach ($scenarios as $scenario) {
//            $return[$scenario->id] = $scenario->caption;
//        }
//        return $return;
//    }
//}
