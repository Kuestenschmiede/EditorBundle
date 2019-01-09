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

namespace con4gis\EditorBundle\Classes\Contao\Callbacks;

use con4gis\MapsProjectBundle\Classes\Events\LoadPluginsEvent;
use Contao\BackendModule;
use Contao\System;

class PluginList extends BackendModule
{
    // TODO Template vielleicht lieber als Tabelle aufbauen ? (td's statt spans)
    protected $strTemplate = "plugin_list";

    protected function compile()
    {
        $event = new LoadPluginsEvent();
        $dispatcher = System::getContainer()->get('event_dispatcher');
        $dispatcher->dispatch($event::NAME, $event);
        $this->Template->plugins = $event->getConfigs();
    }
}