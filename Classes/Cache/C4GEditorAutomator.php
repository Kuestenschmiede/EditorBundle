<?php
/**
 * con4gis - the gis-kit
 *
 * @version   php 7
 * @package   con4gis
 * @author    con4gis contributors (see "authors.txt")
 * @license   GNU/LGPL http://opensource.org/licenses/lgpl-3.0.html
 * @copyright Küstenschmiede GmbH Software & Design 2011 - 2018
 * @link      https://www.kuestenschmiede.de
 */

namespace con4gis\EditorBundle\Classes\Cache;

use con4gis\MapsBundle\Classes\Caches\C4GMapsAutomator;

class C4GEditorAutomator extends C4GMapsAutomator
{
    public function purgeEditorConfigCache()
    {
        C4GEditorConfigurationCache::getInstance()->clearCache();
    }
}