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

namespace con4gis\EditorBundle\Controller;


use con4gis\CoreBundle\Controller\BaseController;
use con4gis\EditorBundle\Classes\Helper\EditorCommon;
use con4gis\EditorBundle\Entity\MapsProjectCategory;
use con4gis\EditorBundle\Entity\MapsProjectData;
use con4gis\ProjectsBundle\Classes\Common\C4GBrickCommon;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class CategoryController extends BaseController
{
    /**
     * @param Request $request
     * @param $layerId  int The layer id
     * @param $pid      int The project id
     * @param $mid      int the mapId
     * @return Response
     */
    public function getCategoryLayerAction(Request $request, $layerId, $pid, $mid)
    {
        $this->initialize();
        $realLayerId = C4GBrickCommon::getLayerIDParam($layerId, "id");
        $data = $this->entityManager->getRepository(MapsProjectData::class)
            ->findOneBy(['id' => $realLayerId]);
        if (!$data) {
            return new Response(sprintf("Data with ID %s not found", $realLayerId), 404);
        }
        $cid = $data->getCategoryid();
        $category = $this->entityManager->getRepository(MapsProjectCategory::class)
            ->findOneBy(['id' => $cid]);
        $fmService = $this->get('mapsproject_frontend');
        $arrElement = $fmService->addMapStructureElementWithIdCalc(
            $cid,
            $pid,
            $mid,
            71,
            'none',
            $category->getCaption(),
            $category->getCaption(),
            true,
            ""
        );
        $arrElement['id'] = C4GBrickCommon::calcLayerId($cid, $pid, 70);
        $arrElement['projectId'] = $pid;
        return new JsonResponse(['layer' => $arrElement]);
    }
}