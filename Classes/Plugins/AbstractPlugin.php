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