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


use con4gis\EditorBundle\Classes\Plugins\PluginConfig;
use con4gis\MapsProjectBundle\Entity\MapsProjectScenario;
use Symfony\Component\EventDispatcher\Event;

class InstantiateProjectPluginsEvent extends Event
{
    const NAME = "editor.projectplugins.instantiate";

    private $pluginConfigs = [];

    private $scenarioId = 0;

    /**
     * @var MapsProjectScenario
     */
    private $scenario = null;

    private $validConfigs = [];

    private $instances = [];

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
     * @return int
     */
    public function getScenarioId(): int
    {
        return $this->scenarioId;
    }

    /**
     * @param int $scenarioId
     */
    public function setScenarioId(int $scenarioId): void
    {
        $this->scenarioId = $scenarioId;
    }

    /**
     * @return MapsProjectScenario
     */
    public function getScenario(): MapsProjectScenario
    {
        return $this->scenario;
    }

    /**
     * @param MapsProjectScenario $scenario
     */
    public function setScenario(MapsProjectScenario $scenario): void
    {
        $this->scenario = $scenario;
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
}