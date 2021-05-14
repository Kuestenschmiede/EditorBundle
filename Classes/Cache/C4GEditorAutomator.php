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

namespace con4gis\EditorBundle\Classes\Cache;

use con4gis\CoreBundle\Resources\contao\models\C4gLogModel;
use con4gis\MapsBundle\Classes\Caches\C4GMapsAutomator;

class C4GEditorAutomator extends C4GMapsAutomator
{
    public function purgeEditorConfigCache()
    {
        $container = \Contao\System::getContainer();
        C4GEditorConfigurationCache::getInstance($container)->clearCache();
        C4gLogModel::addLogEntry('editor', 'cleared editor cache');
    }
}
