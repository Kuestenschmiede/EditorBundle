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

use con4gis\EditorBundle\Entity\EditorConfiguration;
use Symfony\Component\EventDispatcher\Event;

class EditorConfigurationEvent extends Event
{
    const NAME = "editor.editor.config";

    private $configId = 0;

    /**
     * @var EditorConfiguration
     */
    private $configuration = null;

    private $elements = [];

    private $arrElements = [];

    private $categories = [];

    private $editorConfig = [];

    /**
     * The event can be extended with additional properties with this array.
     * Useful for using this event in another bundle.
     * @var array
     */
    private $additionalData = [];

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
     * @return EditorConfiguration
     */
    public function getConfiguration(): EditorConfiguration
    {
        return $this->configuration;
    }

    /**
     * @param EditorConfiguration $configuration
     */
    public function setConfiguration(EditorConfiguration $configuration): void
    {
        $this->configuration = $configuration;
    }

    /**
     * @return array
     */
    public function getElements(): array
    {
        return $this->elements;
    }

    /**
     * @param array $elements
     */
    public function setElements(array $elements): void
    {
        $this->elements = $elements;
    }

    /**
     * @return array
     */
    public function getCategories(): array
    {
        return $this->categories;
    }

    /**
     * @param array $categories
     */
    public function setCategories(array $categories): void
    {
        $this->categories = $categories;
    }

    /**
     * @return array
     */
    public function getArrElements(): array
    {
        return $this->arrElements;
    }

    /**
     * @param array $arrElements
     */
    public function setArrElements(array $arrElements): void
    {
        $this->arrElements = $arrElements;
    }

    /**
     * @return array
     */
    public function getEditorConfig(): array
    {
        return $this->editorConfig;
    }

    /**
     * @param array $editorConfig
     */
    public function setEditorConfig(array $editorConfig): void
    {
        $this->editorConfig = $editorConfig;
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
}