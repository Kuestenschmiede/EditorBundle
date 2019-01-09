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


use con4gis\MapsProjectBundle\Entity\EditorMapElement;
use Symfony\Component\EventDispatcher\Event;

class InstantiateDataPluginsEvent extends Event
{
    const NAME = "editor.dataplugins.instantiate";

    private $pluginConfigs = [];

    private $elementId = 0;

    /**
     * @var EditorMapElement
     */
    private $element = null;

    private $validConfigs = [];

    private $instances = [];

    /**
     * @return array
     */
    public function getPluginConfigs(): array
    {
        return $this->pluginConfigs;
    }

    /**
     * @param array $pluginConfigs
     */
    public function setPluginConfigs(array $pluginConfigs)
    {
        $this->pluginConfigs = $pluginConfigs;
    }

    /**
     * @return int
     */
    public function getElementId(): int
    {
        return $this->elementId;
    }

    /**
     * @param int $elementId
     */
    public function setElementId(int $elementId)
    {
        $this->elementId = $elementId;
    }

    /**
     * @return EditorMapElement
     */
    public function getElement()
    {
        return $this->element;
    }

    /**
     * @param EditorMapElement $element
     */
    public function setElement($element)
    {
        $this->element = $element;
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
    public function setValidConfigs(array $validConfigs)
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
    public function setInstances(array $instances)
    {
        $this->instances = $instances;
    }
}