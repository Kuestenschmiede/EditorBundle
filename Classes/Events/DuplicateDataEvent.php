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

namespace con4gis\EditorBundle\Classes\Events;


use Symfony\Component\EventDispatcher\Event;

class DuplicateDataEvent extends Event
{
    const NAME = "editor.data.duplicate";

    /**
     * Id of the dataset to duplicate
     * @var int
     */
    private $dataId = 0;

    /**
     * Plugins that are assigned to the element from which the data is an instance.
     * @var array
     */
    private $plugins = [];

    private $entities = [];

    private $newEntities = [];

    private $returnData = [];

    /**
     * @return int
     */
    public function getDataId(): int
    {
        return $this->dataId;
    }

    /**
     * @param int $dataId
     */
    public function setDataId(int $dataId): void
    {
        $this->dataId = $dataId;
    }

    /**
     * @return array
     */
    public function getPlugins(): array
    {
        return $this->plugins;
    }

    /**
     * @param array $plugins
     */
    public function setPlugins(array $plugins): void
    {
        $this->plugins = $plugins;
    }

    /**
     * @return array
     */
    public function getEntities(): array
    {
        return $this->entities;
    }

    /**
     * @param array $entities
     */
    public function setEntities(array $entities): void
    {
        $this->entities = $entities;
    }

    /**
     * @return array
     */
    public function getNewEntities(): array
    {
        return $this->newEntities;
    }

    /**
     * @param array $newEntities
     */
    public function setNewEntities(array $newEntities): void
    {
        $this->newEntities = $newEntities;
    }

    /**
     * @return array
     */
    public function getReturnData(): array
    {
        return $this->returnData;
    }

    /**
     * @param array $returnData
     */
    public function setReturnData(array $returnData): void
    {
        $this->returnData = $returnData;
    }


}