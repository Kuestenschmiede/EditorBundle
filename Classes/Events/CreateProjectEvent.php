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

use con4gis\ProjectsBundle\Classes\Dialogs\C4GBrickDialogParams;
use con4gis\ProjectsBundle\Classes\Fieldlist\C4GBrickField;
use Symfony\Component\EventDispatcher\Event;

class CreateProjectEvent extends Event
{
    const NAME = 'editor.project.create';

    private $plugins = [];

    /**
     * @var C4GBrickField[]
     */
    private $fieldList = [];

    /**
     * @var C4GBrickDialogParams
     */
    private $dialogParams = null;

    private $view = [];

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
     * @return array
     */
    public function getFieldList(): array
    {
        return $this->fieldList;
    }

    /**
     * @param array $fieldList
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
