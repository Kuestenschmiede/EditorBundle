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
namespace con4gis\MapsProjectBundle\Classes\Listener;


use con4gis\MapsProjectBundle\Classes\Plugins\PluginConfig;
use con4gis\MapsProjectBundle\Classes\Events\LoadPluginsEvent;
use con4gis\MapsProjectBundle\Classes\Plugins\DefaultProjectPlugin;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Serializer;

class LoadPluginsListener
{
    /**
     * @var ContainerInterface
     */
    private $container = null;

    /**
     * @var FileLocator
     */
    private $locator = null;

    /**
     * LoadPluginsListener constructor.
     * @param ContainerInterface $container
     * @param FileLocator $locator
     */
    public function __construct(ContainerInterface $container, FileLocator $locator)
    {
        $this->container = $container;
        $this->locator = $locator;
    }

    /**
     * Loads all registered bundles.
     * @param LoadPluginsEvent $event
     * @param $eventName
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onLoadPluginsGetRegisteredBundles(
        LoadPluginsEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $bundles = $this->container->getParameter('kernel.bundles');
        $event->setBundles($bundles);
    }

    /**
     * Parses all plugins.json files that are found in the bundles.
     * @param LoadPluginsEvent $event
     * @param $eventName
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onLoadPluginsReadConfigFiles(
        LoadPluginsEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $bundles = $event->getBundles();
        $configs = [];
        foreach ($bundles as $key => $bundle) {
            try  {
                // read the json ($key is the bundle name)
                $path = $this->locator->locate("@" . $key . "/Resources/config/plugins.json");
                $strContent = file_get_contents($path);
                $encoder = new JsonEncoder();
                // convert to array
                $arrFile = $encoder->decode($strContent, 'json');
                $arrConfig = $arrFile['plugins'];
                // $arrConfig is the configuration for 1 or more plugins
                foreach ($arrConfig as $singleConfig) {
                    $configs[$singleConfig['id']] = new PluginConfig($singleConfig);
                }
            } catch (\InvalidArgumentException $exception) {
                // no plugin configuration found for the current bundle, the bundle either has none or there
                // is a spelling mistake
                continue;
            }
        }
        $event->setConfigs($configs);
    }
}