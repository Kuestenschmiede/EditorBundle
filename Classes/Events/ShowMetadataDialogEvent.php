<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

namespace con4gis\EditorBundle\Classes\Events;

use con4gis\ProjectsBundle\Classes\Dialogs\C4GBrickDialogParams;
use con4gis\ProjectsBundle\Classes\Fieldlist\C4GBrickField;
use Symfony\Component\EventDispatcher\Event;

class ShowMetadataDialogEvent extends Event
{
    const NAME = 'editor.metadata.show';

    private $projectId = 0;

    private $dataId = 0;

    private $plugins = [];

    /**
     * @var C4GBrickField[]
     */
    private $fieldList = [];

    /**
     * @var C4GBrickDialogParams
     */
    private $dialogParams = null;

    /**
     * Current data in the entity.
     * @var array
     */
    private $data = [];

    /**
     * The return data for the client.
     * @var array
     */
    private $view = [];

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
    public function setProjectId(int $projectId): void
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
    public function setDataId(int $dataId): void
    {
        $this->dataId = $dataId;
    }

    /**
     * @return array
     */
    public function getPlugins(): array
    {
        return $this->plugins;
    }

    /**
     * @param array $plugins
     */
    public function setPlugins(array $plugins): void
    {
        $this->plugins = $plugins;
    }

    /**
     * @return C4GBrickField[]
     */
    public function getFieldList(): array
    {
        return $this->fieldList;
    }

    /**
     * @param C4GBrickField[] $fieldList
     */
    public function setFieldList(array $fieldList): void
    {
        $this->fieldList = $fieldList;
    }

    /**
     * @return C4GBrickDialogParams
     */
    public function getDialogParams(): C4GBrickDialogParams
    {
        return $this->dialogParams;
    }

    /**
     * @param C4GBrickDialogParams $dialogParams
     */
    public function setDialogParams(C4GBrickDialogParams $dialogParams): void
    {
        $this->dialogParams = $dialogParams;
    }

    /**
     * @return array
     */
    public function getData(): array
    {
        return $this->data;
    }

    /**
     * @param array $data
     */
    public function setData(array $data): void
    {
        $this->data = $data;
    }

    /**
     * @return array
     */
    public function getView(): array
    {
        return $this->view;
    }

    /**
     * @param array $view
     */
    public function setView(array $view): void
    {
        $this->view = $view;
    }
}
