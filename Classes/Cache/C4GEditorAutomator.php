<?php
/**
 * Created by PhpStorm.
 * User: cro
 * Date: 08.09.18
 * Time: 16:55
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