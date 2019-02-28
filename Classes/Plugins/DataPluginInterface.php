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

namespace con4gis\EditorBundle\Classes\Plugins;

use con4gis\EditorBundle\Classes\Events\SaveMetadataEvent;
use con4gis\ProjectsBundle\Classes\Fieldlist\C4GBrickField;

interface DataPluginInterface
{
    /**
     * Function for defining additional fields that should be added to the element. Must return an array of
     * C4GBrickField. Please note that the fieldname of the fields must equal the corresponding entity property, not
     * the database column. This is needed for dynamic building of the setter functions.
     * @param $dataId       int The id of the dataset. The plugin can check the id and decide what it wants to do.
     * @return C4GBrickField[]
     */
    public function getFields($dataId);

    /**
     * Function for loading data for a dataset. The returned data array will be merged with the remaining data arrays.
     * Can be used for adding default values to a newly created dataset or to load data for a dataset from the different
     * entity classes and tables.
     * @param $dataId
     * @param $fieldList
     * @param $entityManger
     * @return array
     */
    public function getData($dataId, $fieldList, $entityManger);

    /**
     * Must return the fully qualifying name of the entity class that should persist the plugin data. The entity must
     * contain a parent id, which points to the parent entry in the tl_maps_project_data table.
     * @return mixed
     */
    public function getEntityClass();

    /**
     * Function for adding custom logic to the data creation process. Will be called before the data is persisted
     * in the defined entities. Must return the modified SaveMetadataEvent.
     * @param $event
     * @return SaveMetadataEvent
     */
    public function beforeSaveAction(SaveMetadataEvent $event): SaveMetadataEvent;

    /**
     * Function for defining additional backend fields that should be added to the element. Must return an array of
     * dca fields.
     * @return array
     */
    public function getBackendFields();
}