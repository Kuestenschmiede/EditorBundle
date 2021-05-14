<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
namespace con4gis\EditorBundle\Classes\Plugins;

class PluginConfig
{
    private $name = '';

    private $id = 0;

    private $projectPlugin = '';

    private $dataPlugin = '';

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
        $this->projectPlugin = $arrConfig['projectPlugin'] ? $arrConfig['projectPlugin'] : '';
        $this->dataPlugin = $arrConfig['dataPlugin'] ? $arrConfig['dataPlugin'] : '';
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
