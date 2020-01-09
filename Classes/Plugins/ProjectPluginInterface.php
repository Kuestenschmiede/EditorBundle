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

namespace con4gis\EditorBundle\Classes\Plugins;

use con4gis\EditorBundle\Classes\Events\SaveProjectEvent;
use con4gis\ProjectsBundle\Classes\Fieldlist\C4GBrickField;

/**
 * Interface ProjectPluginInterface
 * Each class that wishes to interact with the project creation process has to implement this interface.
 * @package con4gis\EditorBundle\Classes\Plugins
 */
interface ProjectPluginInterface
{
    /**
     * Function for defining additional fields that should be added to the project. Must return an array of
     * C4GBrickField. Please note that the fieldname of the fields must equal the corresponding entity property, not
     * the database column. This is needed for dynamic building of the setter functions.
     * @return C4GBrickField[]
     */
    public function getFields();

    /**
     * Must return the fully qualifying name of the entity class that should persist the plugin data. The entity must
     * contain a parent id, which points to the parent entry in the tl_maps_project_data table.
     * @return mixed
     */
    public function getEntityClass();

    /**
     * Function for adding custom logic to the project creation process. Will be called before the data is persisted
     * in the defined entities. Must return the modified SaveProjectEvent.
     * @param $event
     * @return SaveProjectEvent
     */
    public function beforeSaveAction(SaveProjectEvent $event): SaveProjectEvent;

    /**
     * Returns the data for the given project that lies in this plugin. The returned data has to be in an array format.
     * @param $projectId
     * @param $fieldList
     * @return mixed
     */
    public function getProjectData($projectId, $fieldList): array;

    /**
     * Returns an array of projectTypes that are defined by this plugin. The array should be structured like
     * typeKey => Translation/language reference
     * for each type the plugin defines.
     * @return array
     */
    public function getProjectTypes() : array;
}
