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

use Contao\CoreBundle\DataContainer\PaletteManipulator;


/**
 * Table tl_c4g_maps
 */

$GLOBALS['TL_DCA']['tl_c4g_maps']['palettes']['gnrcPrjct'] = '{general_legend},name,location_type;{location_legend},tDontShowIfEmpty,data_layername,data_hidelayer,hide_when_in_tab;{protection_legend:hide},protect_element;{expert_legend:hide},excludeFromSingleLayer,be_optimize_checkboxes_limit;';

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

$GLOBALS['TL_DCA']['tl_c4g_maps']['fields']['data_content']['wizard'] =
                   array(array('con4gis\EditorBundle\Classes\Contao\GeoEditor', 'getEditorLink'));

