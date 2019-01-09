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

namespace con4gis\EditorBundle\Classes\Events;


use con4gis\MapsProjectBundle\Entity\MapsProject;
use Symfony\Component\EventDispatcher\Event;

class LoadProjectsEvent extends Event
{
    const NAME = "editor.load.projects";

    private $memberId = 0;

    /**
     * @var MapsProject[]
     */
    private $projects = [];

    /**
     * @return int
     */
    public function getMemberId(): int
    {
        return $this->memberId;
    }

    /**
     * @param int $memberId
     */
    public function setMemberId(int $memberId): void
    {
        $this->memberId = $memberId;
    }

    /**
     * @return MapsProject[]
     */
    public function getProjects(): array
    {
        return $this->projects;
    }

    /**
     * @param MapsProject[] $projects
     */
    public function setProjects(array $projects): void
    {
        $this->projects = $projects;
    }


}