<?php
/**
 * Created by PhpStorm.
 * User: cro
 * Date: 11.02.19
 * Time: 15:51
 */

namespace con4gis\EditorBundle\Classes\Services;


use con4gis\EditorBundle\Classes\Events\InstantiateDataPluginsEvent;
use con4gis\EditorBundle\Classes\Events\InstantiateProjectPluginsEvent;
use con4gis\EditorBundle\Classes\Plugins\PluginConfig;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\Serializer\Encoder\JsonEncoder;

class PluginService
{
    
    /**
     * @var EventDispatcherInterface
     */
    private $eventDispatcher = null;
    
    /**
     * @var ContainerInterface
     */
    private $container = null;
    
    /**
     * @var FileLocator
     */
    private $locator = null;
    
    /**
     * @var PluginConfig[]
     */
    private $configs = [];
    
    /**
     * PluginService constructor.
     * @param EventDispatcherInterface $eventDispatcher
     * @param ContainerInterface $container
     * @param FileLocator $locator
     */
    public function __construct(
        EventDispatcherInterface $eventDispatcher,
        ContainerInterface $container,
        FileLocator $locator
    ) {
        $this->eventDispatcher = $eventDispatcher;
        $this->container = $container;
        $this->locator = $locator;
    }
    
    public function getProjectPlugins($loadMode = 'fe')
    {
        $configs = $this->getProjectConfigs();
        $event = new InstantiateProjectPluginsEvent();
        $event->setMode($loadMode);
        $event->setPluginConfigs($configs);
        $this->eventDispatcher->dispatch($event::NAME, $event);
        return $event->getInstances();
    }
    
    public function getDataPlugins($typeId)
    {
        $configs = $this->getDataConfigs();
        $event = new InstantiateDataPluginsEvent();
        $event->setElementId($typeId);
        $event->setPluginConfigs($configs);
        $this->eventDispatcher->dispatch($event::NAME, $event);
        return $event->getInstances();
    }
    
    public function getProjectConfigs()
    {
        return $this->getPlugins('getProjectPlugin');
    }
    
    public function getDataConfigs()
    {
        return $this->getPlugins('getDataPlugin');
    }
    
    private function getPlugins($pluginGetter)
    {
        $configs = $this->loadConfigs();
        $plugins = [];
        foreach ($configs as $key => $config) {
            if (($pluginClass = $config->$pluginGetter()) && (class_exists($config->$pluginGetter()))) {
                $plugins[] = $config;
            }
        }
        return $plugins;
    }
    
    /**
     * @param array $bundles
     * @return array|PluginConfig[]
     */
    private function loadConfigs($bundles = [])
    {
        // check if we already got configs
        if (count($this->configs) > 0) {
            return $this->configs;
        } else {
            if (!$bundles) {
                // if no bundles were specified, check every bundle for plugins
                $bundles = $this->container->getParameter('kernel.bundles');
            }
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
            $this->configs = $configs;
            return $configs;
        }
    }
}