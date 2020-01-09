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

use con4gis\MapsProjectBundle\Classes\Plugins\AbstractDataPlugin;
use Symfony\Component\EventDispatcher\Event;

class DeleteDataEvent extends Event
{
    const NAME = 'editor.data.delete';

    /**
     * @var AbstractDataPlugin[]
     */
    private $plugins = [];

    private $projectId = 0;

    private $dataId = 0;

    /**
     * @var array
     */
    private $entities = [];

    private $errors = [];

    /**
     * @return AbstractDataPlugin[]
     */
    public function getPlugins(): array
    {
        return $this->plugins;
    }

    /**
     * @param AbstractDataPlugin[] $plugins
     */
    public function setPlugins(array $plugins): void
    {
        $this->plugins = $plugins;
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
     * @return int
     */
    public function getDataId()
    {
        return $this->dataId;
    }

    /**
     * @param int $dataId
     */
    public function setDataId($dataId)
    {
        $this->dataId = $dataId;
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
    public function getErrors()
    {
        return $this->errors;
    }

    public function addError(string $error)
    {
        $this->errors[] = $error;
    }
}
