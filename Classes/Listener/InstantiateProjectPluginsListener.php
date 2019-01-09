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


use con4gis\MapsProjectBundle\Classes\Events\InstantiateProjectPluginsEvent;
use con4gis\MapsProjectBundle\Classes\Plugins\ProjectPluginInterface;
use con4gis\MapsProjectBundle\Entity\MapsProjectScenario;
use Doctrine\ORM\EntityManager;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use con4gis\GroupsBundle\Resources\contao\models\MemberModel;


class InstantiateProjectPluginsListener
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

    public function onInstantiateProjectPluginsGetScenario(
        InstantiateProjectPluginsEvent $event,
        $eventname,
        EventDispatcherInterface $eventDispatcher
    ) {
        $dataId = $event->getScenarioId();
        $scenario = $this->entityManager
            ->getRepository(MapsProjectScenario::class)
            ->findOneBy(['id' => $dataId]);
        if ($scenario) {
            $event->setScenario($scenario);
        }
    }

    public function onInstantiateProjectPluginsFilterPlugins(
        InstantiateProjectPluginsEvent $event,
        $eventname,
        EventDispatcherInterface $eventDispatcher
    ) {
        $configs = $event->getPluginConfigs();
        $scenario = $event->getScenario();
        $pluginIds = $scenario->getPlugins();
        $validConfigs = [];
        if (\FrontendUser::getInstance()->id) {
            foreach ($pluginIds as $pluginId) {
                foreach ($configs as $config) {
                    if (($pluginId == $config->getId()) && (

                            //default plugin
                            ($pluginId === '1') ||

                            //function plugin
                            ((($pluginId > 1) && ($pluginId < 100)) && MemberModel::hasRightInAnyGroup(
                                    \FrontendUser::getInstance()->id,
                                    \con4gis\MapsProjectBundle\Classes\MapsProjectBrickTypes::BRICK_FUNCTION_PLUGINS)) ||

                            //data plugin
                            (($pluginId >= 1000) && MemberModel::hasRightInAnyGroup(
                                    \FrontendUser::getInstance()->id,
                                    \con4gis\MapsProjectBundle\Classes\MapsProjectBrickTypes::BRICK_PROJECT_PLUGINS))
                        )
                    ) {
                        $validConfigs[] = $config;
                    }
                }
            }
        }
        $event->setValidConfigs($validConfigs);
    }

    public function onInstantiateProjectPluginsInstantiatePlugins(
        InstantiateProjectPluginsEvent $event,
        $eventname,
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