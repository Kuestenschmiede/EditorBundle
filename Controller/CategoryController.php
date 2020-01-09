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

namespace con4gis\EditorBundle\Controller;

use con4gis\CoreBundle\Controller\BaseController;
use con4gis\EditorBundle\Classes\Helper\EditorCommon;
use con4gis\EditorBundle\Entity\EditorElementCategory;
use con4gis\EditorBundle\Entity\EditorElement;
use con4gis\ProjectsBundle\Classes\Common\C4GBrickCommon;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class CategoryController extends BaseController
{
    /**
     * CategoryController constructor.
     */
    public function __construct(ContainerInterface $container)
    {
        parent::__construct($container);
    }
    
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
        $data = $this->entityManager->getRepository(EditorElement::class)
            ->findOneBy(['id' => $realLayerId]);
        if (!$data) {
            return new Response(sprintf("Data with ID %s not found", $realLayerId), 404);
        }
        $cid = $data->getCategoryid();
        $category = $this->entityManager->getRepository(EditorElementCategory::class)
            ->findOneBy(['id' => $cid]);
        $fmService = $this->get('editor_frontend');
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
        $projectParentId = 3;
        $arrElement['id'] = C4GBrickCommon::calcLayerId($cid, $pid, 71);
        $arrElement['pid'] = C4GBrickCommon::calcLayerID($pid, $projectParentId, 70);
        $arrElement['projectId'] = intval($pid);
        $arrElement['display'] = true;
        $arrElement['renderSpecial'] = true;
        $arrElement['hide'] = "";
        return new JsonResponse(['layer' => $arrElement]);
    }
}