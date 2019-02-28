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

namespace con4gis\EditorBundle\Classes\Events;


use Symfony\Component\EventDispatcher\Event;

class ChangeDataEvent extends Event
{
    const NAME = "editor.data.change";

    private $projectId = 0;

    private $dataId = 0;

    private $changes = [];

    private $errors = [];

    /**
     * @return int
     */
    public function getProjectId(): int
    {
        return $this->projectId;
    }

    /**
     * @param int $projectId
     */
    public function setProjectId(int $projectId)
    {
        $this->projectId = $projectId;
    }

    /**
     * @return int
     */
    public function getDataId(): int
    {
        return $this->dataId;
    }

    /**
     * @param int $dataId
     */
    public function setDataId(int $dataId)
    {
        $this->dataId = $dataId;
    }

    /**
     * @return array
     */
    public function getChanges(): array
    {
        return $this->changes;
    }

    /**
     * @param array $changes
     */
    public function setChanges(array $changes)
    {
        $this->changes = $changes;
    }

    /**
     * @return array
     */
    public function getErrors()
    {
        return $this->errors;
    }

    public function addError(string $error)
    {
        $this->errors[] = $error;
    }
}