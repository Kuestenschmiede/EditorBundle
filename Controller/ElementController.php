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
use con4gis\EditorBundle\Entity\EditorMapData;
use con4gis\EditorBundle\Entity\EditorMapElement;
use con4gis\ProjectsBundle\Classes\Common\C4GBrickCommon;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ElementController extends BaseController
{
    /**
     * @param Request $request
     * @param $layerId      int The layer id
     * @param $pid      int The project id
     * @return Response
     */
    public function getElementLayerAction(Request $request, $layerId, $pid)
    {
        $this->initialize();
        // get element id from layer id
        $realLayerId = C4GBrickCommon::getLayerIDParam($layerId, "id");
        $data = $this->entityManager->getRepository(EditorMapData::class)
            ->findOneBy(['id' => $realLayerId]);
        if (!$data) {
            return new Response(sprintf("Data with ID %s not found", $realLayerId), 404);
        }
        $cid = $data->getCategoryid();
        $eid = $data->getTypeid();
        $element = $this->entityManager->getRepository(EditorMapElement::class)
            ->findOneBy(['id' => $eid]);
        if (!$element) {
            return new Response(sprintf("Element with ID %s not found", $eid), 404);
        }
        $fmService = $this->get('editor_frontend');
        $arrElement = $fmService->addMapStructureElementWithIdCalc(
            $eid,
            $cid,
            $pid,
            71,
            'none',
            $element->getCaption(),
            $element->getCaption(),
            true,
            ""
        );
        // set correct id
        $arrElement['id'] = EditorCommon::calcLayerId($eid, $cid, $pid, 71);
        $arrElement['projectId'] = intval($pid);
        $arrElement['content'] = [];
        $arrElement['hasChilds'] = true;
        $arrElement['childs'] = [];
        $arrElement['childsCount'] = 0;
        $arrElement['display'] = true;
        $arrElement['renderSpecial'] = true;
        return new JsonResponse(['layer' => $arrElement]);
    }
}