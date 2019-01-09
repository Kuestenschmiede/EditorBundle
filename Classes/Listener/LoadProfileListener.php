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


use con4gis\CoreBundle\Resources\contao\classes\C4GUtils;
use con4gis\MapsBundle\Classes\Events\LoadProfileEvent;
use con4gis\MapsProjectBundle\Entity\MapsProjectSubdomains;
use Contao\Database;
use Doctrine\ORM\EntityManager;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class LoadProfileListener
{
    /**
     * @var EntityManager
     */
    private $entityManager = null;

    /**
     * LoadProfileListener constructor.
     * @param EntityManager $entityManager
     */
    public function __construct(EntityManager $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * Gets the currently active scenarios.
     * @param LoadProfileEvent $event
     * @param $eventName
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onLoadProfile(
        LoadProfileEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $subd = \Contao\Environment::get('serverName');
        if ($strpos = strpos($subd,'.')) {
            $subd = strtolower(substr($subd, 0, $strpos));
        }
        $subDomain = $this->entityManager->getRepository(MapsProjectSubdomains::class)
            ->findOneBy(['subdomain' => $subd, 'published' => 1]);


        if ($subDomain) {
            if ( C4GUtils::checkFrontendUserLogin()) {
                if ($subDomain->getProfileMember()) {
                    $event->setProfileId($subDomain->getProfileMember());
                }
            } else {
                if ($subDomain->getProfilePublic()) {
                    $event->setProfileId($subDomain->getProfilePublic());
                }
            }
        }
    }
}