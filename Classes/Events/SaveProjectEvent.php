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
namespace con4gis\EditorBundle\Classes\Events;

use Symfony\Component\EventDispatcher\Event;

class SaveProjectEvent extends Event
{
    const NAME = 'editor.project.save';

    private $data = [];

    private $configId = 0;

    private $pluginInstances = [];

    private $entities = [];

    private $fieldList = [];

    private $returnData = [];

    /**
     * @return array
     */
    public function getData(): array
    {
        return $this->data;
    }

    /**
     * @param array $data
     */
    public function setData(array $data): void
    {
        $this->data = $data;
    }

    /**
     * @return int
     */
    public function getConfigId(): int
    {
        return $this->configId;
    }

    /**
     * @param int $configId
     */
    public function setConfigId(int $configId): void
    {
        $this->configId = $configId;
    }

    /**
     * @return array
     */
    public function getPluginInstances(): array
    {
        return $this->pluginInstances;
    }

    /**
     * @param array $pluginInstances
     */
    public function setPluginInstances(array $pluginInstances): void
    {
        $this->pluginInstances = $pluginInstances;
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
    public function getFieldList(): array
    {
        return $this->fieldList;
    }

    /**
     * @param array $fieldList
     */
    public function setFieldList(array $fieldList): void
    {
        $this->fieldList = $fieldList;
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
