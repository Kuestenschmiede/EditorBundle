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

namespace con4gis\EditorBundle\Classes;

class EditorBrickTypes
{
    const BRICK_GENERIC_PROJECT = 'gnrcPrjct';

    const BRICK_DATA_MANAGER_MODULE = 'data_manager';

    const BRICK_DATA_PLUGINS = 'data_plugins';
    const BRICK_PROJECT_PLUGINS = 'project_plugins';
    const BRICK_FUNCTION_PLUGINS = 'function_plugins';

    const RIGHT_WRITE_DATA = 'writeData';
    const RIGHT_READ_DATA = 'readData';
    const RIGHT_WRITE_PROJECT = 'writeProject';
    const RIGHT_READ_PROJECT = 'readProject';
}
