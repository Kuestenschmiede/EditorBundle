<?php
/*
  * This file is part of con4gis,
  * the gis-kit for Contao CMS.
  *
  * @package   	con4gis
  * @version    7
  * @author  	con4gis contributors (see "authors.txt")
  * @license 	LGPL-3.0-or-later
  * @copyright 	Küstenschmiede GmbH Software & Design
  * @link       https://www.con4gis.org
  */

namespace con4gis\EditorBundle\Classes\Listener;

use con4gis\EditorBundle\Classes\Events\InstantiateDataPluginsEvent;
use con4gis\EditorBundle\Classes\Plugins\DataPluginInterface;
use con4gis\EditorBundle\Entity\EditorElementType;
use Doctrine\ORM\EntityManager;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use con4gis\GroupsBundle\Resources\contao\models\MemberModel;

/**
 * Class InstantiatePluginsListener
 * Instantiates the Data Plugins that are connected to the given element.
 * @package con4gis\EditorBundle\Classes\Listener
 */
class InstantiateDataPluginsListener
{
    /**
     * @var EntityManager
     */
    private $entityManager = null;

    /**
     * InstantiatePluginsListener constructor.
     * @param EntityManager $entityManager
     */
    public function __construct(EntityManager $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function onInstantiatePluginsGetElement(
        InstantiateDataPluginsEvent $event,
        $eventname,
        EventDispatcherInterface $eventDispatcher
    ) {
        $dataId = $event->getElementId();
        $element = $this->entityManager
            ->getRepository(EditorElementType::class)
            ->findOneBy(['id' => $dataId]);
        if ($element) {
            $event->setElement($element);
        }
    }

    public function onInstantiatePluginsFilterPlugins(
        InstantiateDataPluginsEvent $event,
        $eventname,
        EventDispatcherInterface $eventDispatcher
    ) {
        $configs = $event->getPluginConfigs();
        $element = $event->getElement();
        $pluginIds = $element->getPlugins();
        $validConfigs = [];
        if (\FrontendUser::getInstance()->id) {
            foreach ($pluginIds as $pluginId) {
                foreach ($configs as $config) {
                    if (($pluginId == $config->getId()) && (

                        //default plugin
                        ($pluginId === '1') ||

                        //function plugin
                        ((($pluginId >= 100) && ($pluginId < 1000)) && MemberModel::hasRightInAnyGroup(
                                \FrontendUser::getInstance()->id,
                                \con4gis\EditorBundle\Classes\EditorBrickTypes::BRICK_FUNCTION_PLUGINS)) ||

                        //data plugin
                        (($pluginId >= 1000) && MemberModel::hasRightInAnyGroup(
                            \FrontendUser::getInstance()->id,
                        \con4gis\EditorBundle\Classes\EditorBrickTypes::BRICK_DATA_PLUGINS))
                        )
                    ) {
                        $validConfigs[] = $config;
                    }
                }
            }
        }
        $event->setValidConfigs($validConfigs);
    }

    public function onInstantiatePluginsInstantiatePlugins(
        InstantiateDataPluginsEvent $event,
        $eventname,
        EventDispatcherInterface $eventDispatcher
    ) {
        $validConfigs = $event->getValidConfigs();
        $instances = [];
        foreach ($validConfigs as $config) {
            $className = $config->getDataPlugin();
            if ($className) {
                $instance = new $className($config);
                if ($instance instanceof DataPluginInterface) {
                    $instances[] = $instance;
                }
            }
        }
        $event->setInstances($instances);
    }
}
