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

namespace con4gis\EditorBundle\Controller;

use con4gis\CoreBundle\Controller\BaseController;
use con4gis\EditorBundle\Classes\Helper\EditorCommon;
use con4gis\EditorBundle\Entity\EditorElement;
use con4gis\EditorBundle\Entity\EditorElementType;
use con4gis\ProjectsBundle\Classes\Common\C4GBrickCommon;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ElementTypeController extends BaseController
{
    public function __construct(ContainerInterface $container)
    {
        parent::__construct($container);
    }
    
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
        $data = $this->entityManager->getRepository(EditorElement::class)
            ->findOneBy(['id' => $realLayerId]);
        if (!$data) {
            return new Response(sprintf("Data with ID %s not found", $realLayerId), 404);
        }
        $cid = $data->getCategoryid();
        $eid = $data->getTypeid();
        $element = $this->entityManager->getRepository(EditorElementType::class)
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
        $arrElement['id'] = EditorCommon::calcLayerId($eid, $cid, $pid, 72);
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