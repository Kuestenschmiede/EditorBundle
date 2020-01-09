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

use con4gis\EditorBundle\Classes\Plugins\PluginConfig;
use Symfony\Component\EventDispatcher\Event;

class InstantiateProjectPluginsEvent extends Event
{
    const NAME = 'editor.projectplugins.instantiate';

    private $pluginConfigs = [];

    private $validConfigs = [];

    private $instances = [];

    private $additionalData = [];

    // 'fe' || 'be'
    private $mode = 'fe';

    /**
     * @return PluginConfig[]
     */
    public function getPluginConfigs(): array
    {
        return $this->pluginConfigs;
    }

    /**
     * @param array $pluginConfigs
     */
    public function setPluginConfigs(array $pluginConfigs): void
    {
        $this->pluginConfigs = $pluginConfigs;
    }

    /**
     * @return array
     */
    public function getValidConfigs(): array
    {
        return $this->validConfigs;
    }

    /**
     * @param array $validConfigs
     */
    public function setValidConfigs(array $validConfigs): void
    {
        $this->validConfigs = $validConfigs;
    }

    /**
     * @return array
     */
    public function getInstances(): array
    {
        return $this->instances;
    }

    /**
     * @param array $instances
     */
    public function setInstances(array $instances): void
    {
        $this->instances = $instances;
    }

    /**
     * @return array
     */
    public function getAdditionalData(): array
    {
        return $this->additionalData;
    }

    /**
     * @param array $additionalData
     */
    public function setAdditionalData(array $additionalData): void
    {
        $this->additionalData = $additionalData;
    }

    /**
     * @return string
     */
    public function getMode(): string
    {
        return $this->mode;
    }

    /**
     * @param string $mode
     */
    public function setMode(string $mode): void
    {
        $this->mode = $mode;
    }
}
