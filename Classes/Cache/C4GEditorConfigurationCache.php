<?php
/**
 * con4gis - the gis-kit
 *
 * @version   php 7
 * @package   con4gis
 * @author    con4gis contributors (see "authors.txt")
 * @license   GNU/LGPL http://opensource.org/licenses/lgpl-3.0.html
 * @copyright Küstenschmiede GmbH Software & Design 2011 - 2019
 * @link      https://www.kuestenschmiede.de
 */

namespace con4gis\EditorBundle\Classes\Cache;

use con4gis\CoreBundle\Resources\contao\classes\C4GApiCache;
use Contao\System;
use Symfony\Component\Cache\Adapter\FilesystemAdapter;

class C4GEditorConfigurationCache extends C4GApiCache
{
    /**
     * @var C4GEditorConfigurationCache
     */
    protected static $instance = null;

    public static function getInstance() {
        if (!static::$instance) {
            static::$instance = new self();
        }
        return static::$instance;
    }

    /**
     * C4GLayerApiCache constructor.
     */
    protected function __construct()
    {
        // TODO use Dependency injection here
        $container = System::getContainer();
        $this->cacheInstance = new FilesystemAdapter(
            $namespace = 'con4gis_projectEditorService',
            $defaultLifetime = 0,
            $directory = $container->getParameter('kernel.cache_dir')
        );
    }
}