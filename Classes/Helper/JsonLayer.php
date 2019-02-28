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

namespace con4gis\EditorBundle\Classes\Helper;

/**
 * Class JsonLayer
 * Helper class to provide an object for incoming layers to be stored.
 * @package con4gis\EditorBundle\Classes\Helper
 */
class JsonLayer
{
    private $id = 0;
    private $pid = 0;
    private $content = [];
    private $hide = "";
    private $type = "";
    private $display = true;
    private $hasChilds = false;
    private $childsCount = 0;
    private $renderSpecial = true;
    private $editable = true;
    private $name = "";
    private $tabId = 0;
    private $layername = "";
    private $visibleChilds = false;
    private $projectId = 0;
    private $zoom = [];
    private $isInactive = false;
    private $elementid = 0;
    private $categoryid = 0;
    private $drawType = "";
    private $geojson = "";
    private $locgeox = "";
    private $locgeoy = "";
    private $radius = 0.0;

    /**
     * JsonLayer constructor.
     * @param $arrLayer
     */
    public function __construct($arrLayer)
    {
        $this->id = $arrLayer['id'];
        $this->pid = $arrLayer['pid'];
        $this->content = $arrLayer['content'];
        $this->hide = $arrLayer['hide'];
        $this->type = $arrLayer['type'];
        $this->display = $arrLayer['display'];
        $this->hasChilds = $arrLayer['hasChilds'];
        $this->childsCount = $arrLayer['childsCount'];
        $this->renderSpecial = $arrLayer['renderSpecial'];
        $this->editable = $arrLayer['editable'];
        $this->name = $arrLayer['name'];
        $this->tabId = $arrLayer['tabId'];
        $this->layername = $arrLayer['layername'];
        $this->visibleChilds = $arrLayer['visibleChilds'];
        $this->projectId = $arrLayer['projectId'];
        $this->zoom = $arrLayer['zoom'];
        $this->isInactive = $arrLayer['isInactive'];
        $this->elementid = $arrLayer['elementid'];
        $this->categoryid = $arrLayer['categoryid'];
        $this->drawType = $arrLayer['drawType'];
        if ($this->drawType === "point") {
            $this->locgeox = $arrLayer['content'][0]['data']['geometry']['coordinates'][0];
            $this->locgeoy = $arrLayer['content'][0]['data']['geometry']['coordinates'][1];
        } elseif ($this->drawType === "circle") {
            $this->locgeox = $arrLayer['content'][0]['data']['geometry']['center'][0];
            $this->locgeoy = $arrLayer['content'][0]['data']['geometry']['center'][1];
            $this->radius = $arrLayer['content'][0]['data']['geometry']['radius'];
        } else {
            $this->geojson = $arrLayer['geojson'];
        }
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return int
     */
    public function getPid()
    {
        return $this->pid;
    }

    /**
     * @param int $pid
     */
    public function setPid($pid)
    {
        $this->pid = $pid;
    }

    /**
     * @return array
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * @param array $content
     */
    public function setContent($content)
    {
        $this->content = $content;
    }

    /**
     * @return string
     */
    public function getHide()
    {
        return $this->hide;
    }

    /**
     * @param string $hide
     */
    public function setHide($hide)
    {
        $this->hide = $hide;
    }

    /**
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param string $type
     */
    public function setType($type)
    {
        $this->type = $type;
    }

    /**
     * @return bool
     */
    public function isDisplay()
    {
        return $this->display;
    }

    /**
     * @param bool $display
     */
    public function setDisplay($display)
    {
        $this->display = $display;
    }

    /**
     * @return bool
     */
    public function isHasChilds()
    {
        return $this->hasChilds;
    }

    /**
     * @param bool $hasChilds
     */
    public function setHasChilds($hasChilds)
    {
        $this->hasChilds = $hasChilds;
    }

    /**
     * @return int
     */
    public function getChildsCount()
    {
        return $this->childsCount;
    }

    /**
     * @param int $childsCount
     */
    public function setChildsCount($childsCount)
    {
        $this->childsCount = $childsCount;
    }

    /**
     * @return bool
     */
    public function isRenderSpecial()
    {
        return $this->renderSpecial;
    }

    /**
     * @param bool $renderSpecial
     */
    public function setRenderSpecial($renderSpecial)
    {
        $this->renderSpecial = $renderSpecial;
    }

    /**
     * @return bool
     */
    public function isEditable()
    {
        return $this->editable;
    }

    /**
     * @param bool $editable
     */
    public function setEditable($editable)
    {
        $this->editable = $editable;
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @return int
     */
    public function getTabId()
    {
        return $this->tabId;
    }

    /**
     * @param int $tabId
     */
    public function setTabId($tabId)
    {
        $this->tabId = $tabId;
    }

    /**
     * @return string
     */
    public function getLayername()
    {
        return $this->layername;
    }

    /**
     * @param string $layername
     */
    public function setLayername($layername)
    {
        $this->layername = $layername;
    }

    /**
     * @return bool
     */
    public function isVisibleChilds()
    {
        return $this->visibleChilds;
    }

    /**
     * @param bool $visibleChilds
     */
    public function setVisibleChilds($visibleChilds)
    {
        $this->visibleChilds = $visibleChilds;
    }

    /**
     * @return int
     */
    public function getProjectId()
    {
        return $this->projectId;
    }

    /**
     * @param int $projectId
     */
    public function setProjectId($projectId)
    {
        $this->projectId = $projectId;
    }

    /**
     * @return array
     */
    public function getZoom()
    {
        return $this->zoom;
    }

    /**
     * @param array $zoom
     */
    public function setZoom($zoom)
    {
        $this->zoom = $zoom;
    }

    /**
     * @return bool
     */
    public function isInactive()
    {
        return $this->isInactive;
    }

    /**
     * @param bool $isInactive
     */
    public function setIsInactive($isInactive)
    {
        $this->isInactive = $isInactive;
    }

    /**
     * @return int
     */
    public function getElementid()
    {
        return $this->elementid;
    }

    /**
     * @param int $elementid
     */
    public function setElementid($elementid)
    {
        $this->elementid = $elementid;
    }

    /**
     * @return int
     */
    public function getCategoryid()
    {
        return $this->categoryid;
    }

    /**
     * @param int $categoryid
     */
    public function setCategoryid($categoryid)
    {
        $this->categoryid = $categoryid;
    }

    /**
     * @return string
     */
    public function getDrawType()
    {
        return $this->drawType;
    }

    /**
     * @param string $drawType
     */
    public function setDrawType($drawType)
    {
        $this->drawType = $drawType;
    }

    /**
     * @return string
     */
    public function getGeojson()
    {
        return $this->geojson;
    }

    /**
     * @param string $geojson
     */
    public function setGeojson($geojson)
    {
        $this->geojson = $geojson;
    }

    /**
     * @return string
     */
    public function getLocgeox()
    {
        return $this->locgeox;
    }

    /**
     * @param string $locgeox
     */
    public function setLocgeox($locgeox)
    {
        $this->locgeox = $locgeox;
    }

    /**
     * @return string
     */
    public function getLocgeoy()
    {
        return $this->locgeoy;
    }

    /**
     * @param string $locgeoy
     */
    public function setLocgeoy($locgeoy)
    {
        $this->locgeoy = $locgeoy;
    }

    /**
     * @return float
     */
    public function getRadius()
    {
        return $this->radius;
    }

    /**
     * @param float $radius
     */
    public function setRadius($radius)
    {
        $this->radius = $radius;
    }

}
