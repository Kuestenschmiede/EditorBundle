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


use con4gis\MapsProjectBundle\Classes\Plugins\AbstractProjectPlugin;
use con4gis\MapsProjectBundle\Classes\Plugins\PluginConfig;
use con4gis\ProjectsBundle\Classes\Fieldlist\C4GBrickField;
use Symfony\Component\EventDispatcher\Event;

class ShowEditProjectDialogEvent extends Event
{
    const NAME = "editor.project.edit";

    private $projectId = 0;

    /**
     * @var AbstractProjectPlugin[]
     */
    private $plugins = [];

    /**
     * @var C4GBrickField[]
     */
    private $fieldList = [];

    private $data = [];

    private $dialogParams = null;

    private $dialog = "";

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
     * @return AbstractProjectPlugin[]
     */
    public function getPlugins(): array
    {
        return $this->plugins;
    }

    /**
     * @param AbstractProjectPlugin[] $plugins
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
     * @return null
     */
    public function getDialogParams()
    {
        return $this->dialogParams;
    }

    /**
     * @param null $dialogParams
     */
    public function setDialogParams($dialogParams): void
    {
        $this->dialogParams = $dialogParams;
    }

    /**
     * @return string
     */
    public function getDialog(): string
    {
        return $this->dialog;
    }

    /**
     * @param string $dialog
     */
    public function setDialog(string $dialog): void
    {
        $this->dialog = $dialog;
    }
}