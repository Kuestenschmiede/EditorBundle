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

namespace con4gis\EditorBundle\Classes\Listener;


use con4gis\EditorBundle\Classes\Events\InstantiateProjectPluginsEvent;
use con4gis\EditorBundle\Classes\Plugins\DefaultProjectPlugin;
use con4gis\EditorBundle\Classes\Plugins\ProjectPluginInterface;
use Doctrine\ORM\EntityManager;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use con4gis\GroupsBundle\Resources\contao\models\MemberModel;


class InstantiateProjectPluginsListener
{
    public function onInstantiateProjectPluginsInstantiatePlugins(
        InstantiateProjectPluginsEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $validConfigs = $event->getValidConfigs();
        $instances = [];
        foreach ($validConfigs as $config) {
            $className = $config->getProjectPlugin();
            if ($className) {
                $instance = new $className($config);
                if ($instance instanceof ProjectPluginInterface) {
                    $instances[] = $instance;
                }
            }
        }
        $event->setInstances($instances);
    }
}