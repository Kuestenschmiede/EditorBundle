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

use con4gis\MapsProjectBundle\Classes\Plugins\AbstractDataPlugin;
use Symfony\Component\EventDispatcher\Event;

class DeleteDataEvent extends Event
{
    const NAME = "editor.data.delete";

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