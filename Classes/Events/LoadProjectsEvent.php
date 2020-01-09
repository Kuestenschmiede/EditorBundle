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

namespace con4gis\EditorBundle\Classes\Events;

use con4gis\EditorBundle\Entity\EditorProject;
use Symfony\Component\EventDispatcher\Event;

class LoadProjectsEvent extends Event
{
    const NAME = 'editor.load.projects';

    private $memberId = 0;

    /**
     * @var EditorProject[]
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
     * @return EditorProject[]
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
