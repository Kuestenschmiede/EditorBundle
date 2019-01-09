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


use con4gis\MapsProjectBundle\Classes\Plugins\PluginConfig;
use Symfony\Component\EventDispatcher\Event;

class LoadPluginsEvent extends Event
{
    const NAME = "editor.load.plugins";

    /**
     * The registered bundles.
     * @var array
     */
    private $bundles = [];

    /**
     * The plugin config files that were found in $bundles.
     * @var PluginConfig[]
     */
    private $configs = [];

    /**
     * The classes that represent a project plugin.
     * @var array
     */
    private $projectPlugins = [];

    /**
     * The classes that represent a data plugin.
     * @var array
     */
    private $dataPlugins = [];

    /**
     * @return array
     */
    public function getBundles(): array
    {
        return $this->bundles;
    }

    /**
     * @param array $bundles
     */
    public function setBundles(array $bundles): void
    {
        $this->bundles = $bundles;
    }

    /**
     * @return PluginConfig[]
     */
    public function getConfigs(): array
    {
        return $this->configs;
    }

    /**
     * @param PluginConfig[] $configs
     */
    public function setConfigs(array $configs): void
    {
        $this->configs = $configs;
    }

    /**
     * @return array
     */
    public function getProjectPlugins(): array
    {
        return $this->projectPlugins;
    }

    /**
     * @param array $projectPlugins
     */
    public function setProjectPlugins(array $projectPlugins): void
    {
        $this->projectPlugins = $projectPlugins;
    }

    /**
     * @return array
     */
    public function getDataPlugins(): array
    {
        return $this->dataPlugins;
    }

    /**
     * @param array $dataPlugins
     */
    public function setDataPlugins(array $dataPlugins): void
    {
        $this->dataPlugins = $dataPlugins;
    }
}