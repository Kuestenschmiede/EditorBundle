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

namespace con4gis\EditorBundle\Repository;


use Doctrine\ORM\EntityRepository;

class EditorElementHistoryRepository extends EntityRepository
{
    public function findLatestByElementId($elementId)
    {
        $query = "SELECT h from con4gisEditorBundle:EditorElementHistory".
         " h WHERE h.elementid = $elementId ORDER BY h.versiontstamp DESC";
        $singeResult = $this->getEntityManager()->createQuery($query)->getResult();
        return $singeResult[0];
    }
}