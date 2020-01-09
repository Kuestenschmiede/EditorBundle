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

class SaveMetadataEvent extends Event
{
    const NAME = 'editor.metadata.save';

    private $dataId = 0;

    private $projectId = 0;

    /**
     * The data to save.
     * @var array
     */
    private $data = [];

    /**
     * The fully qualified plugin class names.
     * @var array
     */
    private $plugins = [];

    /**
     * The instances of the plugin classes
     * @var array
     */
    private $pluginClasses = [];

    /**
     * The entities, in which the data is stored.
     * @var array
     */
    private $entities = [];

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
     * @return int
     */
    public function getProjectId(): int
    {
        return $this->projectId;
    }

    /**
     * @param int $projectId
     */
    public function setProjectId(int $projectId): void
    {
        $this->projectId = $projectId;
    }

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
    public function getPluginClasses(): array
    {
        return $this->pluginClasses;
    }

    /**
     * @param array $pluginClasses
     */
    public function setPluginClasses(array $pluginClasses): void
    {
        $this->pluginClasses = $pluginClasses;
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
