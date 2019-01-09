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


use con4gis\MapsProjectBundle\Entity\MapsProjectSubdomains;
use Symfony\Component\EventDispatcher\Event;

class EditorConfigurationEvent extends Event
{
    const NAME = "editor.editor.config";

    /**
     * @var MapsProjectSubdomains
     */
    private $subdomain = null;

    private $scenarios = [];

    private $elements = [];

    private $arrElements = [];

    private $categories = [];

    private $editorConfig = [];

    /**
     * @return MapsProjectSubdomains
     */
    public function getSubdomain(): MapsProjectSubdomains
    {
        return $this->subdomain;
    }

    /**
     * @param MapsProjectSubdomains $subdomain
     */
    public function setSubdomain(MapsProjectSubdomains $subdomain): void
    {
        $this->subdomain = $subdomain;
    }

    /**
     * @return array
     */
    public function getScenarios(): array
    {
        return $this->scenarios;
    }

    /**
     * @param array $scenarios
     */
    public function setScenarios(array $scenarios): void
    {
        $this->scenarios = $scenarios;
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
}