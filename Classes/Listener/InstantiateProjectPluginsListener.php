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

namespace con4gis\EditorBundle\Classes\Listener;

use con4gis\EditorBundle\Classes\Events\InstantiateProjectPluginsEvent;
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