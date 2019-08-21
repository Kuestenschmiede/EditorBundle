<?php

/*
  * This file is part of con4gis,
  * the gis-kit for Contao CMS.
  *
  * @package   	con4gis
  * @version    6
  * @author  	con4gis contributors (see "authors.txt")
  * @license 	LGPL-3.0-or-later
  * @copyright 	Küstenschmiede GmbH Software & Design
  * @link       https://www.con4gis.org
  */

namespace con4gis\EditorBundle\Classes\Contao;


use con4gis\CoreBundle\Resources\contao\classes\ResourceLoader;
use con4gis\MapsBundle\Resources\contao\classes\MapDataConfigurator;
use con4gis\MapsBundle\Resources\contao\models\C4gMapsModel;

/**
 * Class GeoEditor
 * @package con4gis\MapsBundle\Resources\contao\classes
 */
class GeoEditor extends \Contao\Backend
{
    private $layerId;

	/**
	 * Initialize the controller
	 *
	 * 1. Import user
	 * 2. Call parent constructor
	 * 3. Authenticate user
	 * 4. Load language files
	 * DO NOT CHANGE THIS ORDER!
	 */
	public function __construct($layerId = 0)
	{
		$this->import('BackendUser', 'User');
		parent::__construct();
		$this->layerId = $layerId;
		$this->User->authenticate();
		$this->loadLanguageFile('default');
	}


    public function getEditorLink(\DataContainer $dc)
    {

        $strField = 'ctrl_' . $dc->field . (($this->Input->get('act') == 'editAll') ? '_' . $dc->id : '');

        // return ($dc->value < 1) ? '' : ' <a href="bundles/con4gismaps/be/geoeditor.php?rt=' . REQUEST_TOKEN . '" title="' . $GLOBALS['TL_LANG']['c4g_maps']['geoeditor'] . '" style="padding-left:3px" onclick="c4g.maps.backend.showGeoEditor(this.href,' . $strFieldX . ',' . $strFieldY . ', {title:\'' . $GLOBALS['TL_LANG']['c4g_maps']['geoeditor']. '\'});return false">' . \Image::getHtml('bundles/con4gismaps/images/be-icons/geopicker.png', $GLOBALS['TL_LANG']['tl_content']['editalias'][0], 'style="vertical-align:top"') . '</a>';
        return ' <a href="con4gis/beEditorService/'. $dc->id .'?rt=' . REQUEST_TOKEN . '" title="' . $GLOBALS['TL_LANG']['c4g_maps']['geoeditor'] . '" style="padding-left:3px" onclick="window.showGeoEditor(this.href,' . $strField . ', {title:\'' . $GLOBALS['TL_LANG']['c4g_maps']['geoeditor']. '\'});return false">' . \Image::getHtml('bundles/con4gismaps/images/be-icons/geopicker.png', $GLOBALS['TL_LANG']['tl_content']['editalias'][0], 'style="vertical-align:top"') . '</a>';

    }

	/**
	 * Run controller and parse the template
	 */
	public function run()
	{
		$this->Template = new \BackendTemplate('c4g_geoeditor');

		$this->Template->theme = $this->getTheme();
		$this->Template->base = $this->Environment->base;
		$this->Template->language = $GLOBALS['TL_LANGUAGE'];
		$this->Template->title = $GLOBALS['TL_CONFIG']['websiteTitle'];
		$this->Template->headline = $GLOBALS['TL_LANG']['c4g_maps']['geoeditor'];
		$this->Template->charset = $GLOBALS['TL_CONFIG']['characterSet'];
		$this->c4g_map_layer_switcher = true;

        // get base64 encoded geoData
        $geoData = $this->Input->get('geoData');

        // $this->Template->geoData = base64_decode(chunk_split($geoData));
        $this->Template->geoData = $geoData;
        // 1. check if layer is child of a map element
        $mapId = $this->findMapId($this->layerId);
        if ($mapId > 0) {
            $this->id = $mapId;
            $this->c4g_map_id = $mapId;
        } else {
            // get any map
            $mapId = C4gMapsModel::findBy('is_map', 1)->id;
            if ($mapId) {
                $this->id = $mapId;
                $this->c4g_map_id = $mapId;
            }
        }
        // we have to set these here so the map data will be configured correctly
        
        $objMapData = MapDataConfigurator::prepareMapData($this, $this->Database, array('geoeditor' => true));
        ResourceLoader::loadCssResource('bundles/con4giseditor/css/c4g-project-editor.css');
        // load clipboard library if permalink is enabled
        if ($objMapData['permalink']['enable']) {
            ResourceLoader::loadJavaScriptResource('bundles/con4giscore/vendor/clipboard.min.js', $location = ResourceLoader::JAVASCRIPT, $key = 'clipboard');
        }
        
        $objMapData['editor']['enable'] = true;
        $objMapData['editor']['type'] = 'backend';
        $objMapData['editor']['open'] = true;
        $objMapData['editor']['data_field'] = '[name="geoData"]';
        $objMapData['lang'] = $GLOBALS['TL_LANGUAGE'];

        $this->Template->mapData = $objMapData;

		return $this->Template->getResponse();
	}

	private function findMapId($layerId)
    {
        $layer = C4gMapsModel::findByPk($layerId);
        while ($layer && $layer->is_map != 1) {
            $layer = C4gMapsModel::findByPk($layer->pid);
        }
        return $layer->id;
    }

	public function repInsertTags( $str )
	{
		return parent::replaceInsertTags($str);
	}

	public function import($strClass, $strKey=false, $blnForce=false)
	{
		parent::import($strClass, $strKey, $blnForce);
	}

	public function getInput() {
		return $this->Input;
	}

	public function getFrontendUrl($arrRow) {
		return parent::generateFrontendUrl($arrRow);
	}
}

