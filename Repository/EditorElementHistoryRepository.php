<?php
/**
 * Created by PhpStorm.
 * User: cro
 * Date: 25.01.19
 * Time: 14:50
 */

namespace con4gis\EditorBundle\Repository;


use Doctrine\ORM\EntityRepository;

class EditorElementHistoryRepository extends EntityRepository
{
    public function findLatestByElementId($elementId)
    {
        $query = "SELECT h from con4gisEditorBundle:EditorElementHistory
         h WHERE h.elementid = $elementId ORDER BY h.versiontstamp DESC";
        $singeResult = $this->getEntityManager()->createQuery($query)->getFirstResult();
        return $singeResult;
    }
}