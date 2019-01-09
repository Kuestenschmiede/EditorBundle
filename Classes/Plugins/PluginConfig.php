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
namespace con4gis\EditorBundle\Classes\Plugins;


class PluginConfig
{
    private $name = "";

    private $id = 0;

    private $projectPlugin = "";

    private $dataPlugin = "";

    private $languageFiles = [];

    private $backend = 0;

    /**
     * PluginConfig constructor.
     * @param $arrConfig
     */
    public function __construct($arrConfig)
    {
        // mandatory plugin values
        $this->name = $arrConfig['name'];
        $this->id = $arrConfig['id'];
        // optional plugin values
        $this->projectPlugin = $arrConfig['projectPlugin'] ? $arrConfig['projectPlugin'] : "";
        $this->dataPlugin = $arrConfig['dataPlugin'] ? $arrConfig['dataPlugin'] : "";
        $this->languageFiles = $arrConfig['language'] ? $arrConfig['language'] : [];
        $this->backend = $arrConfig['backend'] ? $arrConfig['backend'] : 0;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName(string $name): void
    {
        $this->name = $name;
    }

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId(int $id): void
    {
        $this->id = $id;
    }

    /**
     * @return string
     */
    public function getProjectPlugin(): string
    {
        return $this->projectPlugin;
    }

    /**
     * @param string $projectPlugin
     */
    public function setProjectPlugin(string $projectPlugin): void
    {
        $this->projectPlugin = $projectPlugin;
    }

    /**
     * @return string
     */
    public function getDataPlugin(): string
    {
        return $this->dataPlugin;
    }

    /**
     * @param string $dataPlugin
     */
    public function setDataPlugin(string $dataPlugin): void
    {
        $this->dataPlugin = $dataPlugin;
    }

    /**
     * @return array|string
     */
    public function getLanguageFiles()
    {
        return $this->languageFiles;
    }

    /**
     * @param array|string $languageFiles
     */
    public function setLanguageFiles($languageFiles): void
    {
        $this->languageFiles = $languageFiles;
    }

    /**
     * @return int
     */
    public function getBackend(): int
    {
        return $this->backend;
    }

    /**
     * @param int $backend
     */
    public function setBackend(int $backend): void
    {
        $this->backend = $backend;
    }
}