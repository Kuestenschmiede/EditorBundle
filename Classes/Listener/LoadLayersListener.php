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


use con4gis\MapsBundle\Classes\Events\LoadLayersEvent;
use con4gis\MapsProjectBundle\Entity\MapsProjectSubdomains;
use Contao\Database;
use Doctrine\ORM\EntityManager;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class LoadLayersListener
{
    /**
     * @var EntityManager
     */
    private $entityManager = null;

    /**
     * LoadLayersListener constructor.
     * @param EntityManager $entityManager
     */
    public function __construct(EntityManager $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * Gets the currently active scenarios.
     * @param LoadLayersEvent $event
     * @param $eventName
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onLoadLayersGetScenarios(
        LoadLayersEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $subd = \Contao\Environment::get('serverName');
        if ($strpos = strpos($subd,'.')) {
            $subd = strtolower(substr($subd, 0, $strpos));
        }
        $subDomain = $this->entityManager->getRepository(MapsProjectSubdomains::class)
            ->findOneBy(['subdomain' => $subd, 'published' => 1]);

        $addData = [];

        if ($subDomain) {
            $addData['scenarioIds'] = $subDomain->getScenarios();
            $event->setAdditionalData(array_merge($event->getAdditionalData(), $addData));
        }
    }

    /**
     * Sorts out all layers, that are not included in the selected scenarios.
     * @param LoadLayersEvent $event
     * @param $eventName
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onLoadLayersFilterLayers(
        LoadLayersEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $scenarioIds = $event->getAdditionalData()['scenarioIds'];
        $layerData = $event->getLayerData();
        $id = intval($layerData['id']);
        $query = "SELECT * FROM tl_c4g_maps WHERE id = ? AND scenarios > ''";
        $result = Database::getInstance()->prepare($query)->execute($id);
        if ($result->numRows) {
            $data = $result->row();
            if (count(array_intersect(deserialize($data['scenarios']), $scenarioIds)) == 0) {
                // no matches found
                $event->setLayerData([]);
            }
        }
    }
}