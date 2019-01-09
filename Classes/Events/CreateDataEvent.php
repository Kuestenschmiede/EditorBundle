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

namespace con4gis\EditorBundle\Classes\Events;


use con4gis\EditorBundle\Classes\Helper\JsonLayer;
use con4gis\EditorBundle\Entity\MapsProjectData;
use Symfony\Component\EventDispatcher\Event;

class CreateDataEvent extends Event
{
    const NAME = "editor.data.create";

    private $projectId = 0;

    private $layerData = [];

    private $layer = null;

    private $entity = null;

    private $returnData = [];

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
    public function getLayerData()
    {
        return $this->layerData;
    }

    /**
     * @param array $layerData
     */
    public function setLayerData($layerData)
    {
        $this->layerData = $layerData;
    }

    /**
     * @return JsonLayer
     */
    public function getLayer()
    {
        return $this->layer;
    }

    /**
     * @param JsonLayer $layer
     */
    public function setLayer($layer)
    {
        $this->layer = $layer;
    }

    /**
     * @return MapsProjectData
     */
    public function getEntity()
    {
        return $this->entity;
    }

    /**
     * @param MapsProjectData $entity
     */
    public function setEntity($entity)
    {
        $this->entity = $entity;
    }

    /**
     * @return array
     */
    public function getReturnData()
    {
        return $this->returnData;
    }

    /**
     * @param array $returnData
     */
    public function setReturnData($returnData)
    {
        $this->returnData = $returnData;
    }
}