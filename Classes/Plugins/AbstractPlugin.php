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

namespace con4gis\EditorBundle\Classes\Plugins;

use Contao\System;

abstract class AbstractPlugin
{
    private $config;

    /**
     * AbstractPlugin constructor.
     * @param $config
     */
    public function __construct(PluginConfig $config)
    {
        $this->config = $config;
        foreach ($config->getLanguageFiles() as $languageFile) {
            System::loadLanguageFile($languageFile);
        }
    }

    /**
     * @return PluginConfig
     */
    public function getConfig(): PluginConfig
    {
        return $this->config;
    }

    /**
     * @param PluginConfig $config
     */
    public function setConfig(PluginConfig $config): void
    {
        $this->config = $config;
    }
}