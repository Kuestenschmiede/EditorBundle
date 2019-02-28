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


use con4gis\MapsProjectBundle\Classes\Plugins\AbstractPlugin;
use con4gis\MapsProjectBundle\Classes\Plugins\AbstractProjectPlugin;
use con4gis\MapsProjectBundle\Classes\Plugins\PluginConfig;
use Symfony\Component\EventDispatcher\Event;

class DeleteProjectEvent extends Event
{
    const NAME = "editor.project.delete";

    private $projectId = 0;

    /**
     * @var AbstractProjectPlugin[]
     */
    private $plugins = [];

    private $entities = [];

    // is set to zero if there is anything wrong
    private $success = 1;

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
     * @return AbstractProjectPlugin[]
     */
    public function getPlugins(): array
    {
        return $this->plugins;
    }

    /**
     * @param AbstractProjectPlugin[] $plugins
     */
    public function setPlugins(array $plugins): void
    {
        $this->plugins = $plugins;
    }

    /**
     * @return int
     */
    public function getSuccess(): int
    {
        return $this->success;
    }

    /**
     * @param int $success
     */
    public function setSuccess(int $success): void
    {
        $this->success = $success;
    }
}