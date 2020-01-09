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

namespace con4gis\EditorBundle\Classes;

use con4gis\CoreBundle\Resources\contao\classes\C4GUtils;
use con4gis\MapsBundle\Classes\Events\LoadLayersEvent;
use con4gis\EditorBundle\Classes\Helper\EditorCommon;
use con4gis\EditorBundle\Classes\Events\LoadProjectsEvent;
use con4gis\EditorBundle\Entity\EditorElementCategory;
use con4gis\EditorBundle\Entity\EditorElement;
use con4gis\EditorBundle\Entity\EditorElementType;
use con4gis\ProjectsBundle\Classes\Maps\C4GBrickMapFrontendParent;
use Contao\FrontendUser;
use Doctrine\ORM\EntityManager;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class EditorMapFrontend extends C4GBrickMapFrontendParent
{
    /**
     * @var EntityManager
     */
    private $em = null;

    /**
     * @var EventDispatcherInterface
     */
    private $eventDispatcher = null;

    /**
     * EditorMapFrontend constructor.
     * @param EntityManager $em
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function __construct(EntityManager $em, EventDispatcherInterface $eventDispatcher)
    {
        $this->em = $em;
        $this->eventDispatcher = $eventDispatcher;
    }

    public function addLocations($level, $child)
    {
        return [];
    }

    public function onLoadLayersGetProjectData(
        LoadLayersEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $child = $event->getLayerData();
        if ($child['type'] === EditorBrickTypes::BRICK_GENERIC_PROJECT) {
            // do stuff
            $arrData = $this->addMapStructureElement(
                $child['pid'],
                $child['id'],
                $child['id'],
                'none',
                $child['name'],
                $child['layername'],
                true,
                $child['hide']
            );

            // set hide when in tab if set in backend
            if ($child['hide_when_in_tab']) {
                $arrData['hide_when_in_tab'] = $child['hide_when_in_tab'];
            }

            $arrChildData = [];
            switch ($child['type']) {
                case EditorBrickTypes::BRICK_GENERIC_PROJECT:
                    $GLOBALS['TL_BODY'][] = '<script src="bundles/con4gisprojects/js/C4GBrickLivePositions.js"></script>';
                    $arrChildData = $this->getProjectsPoiData($child);

                    break;
                default:
                    break;
            }

            if (sizeof($arrChildData) == 0 && $child['raw']->tDontShowIfEmpty) {
                $returnData = $arrData;
            } else {
                $returnData = $this->addMapStructureChilds($arrData, $arrChildData, false);
            }
            $returnData['content'] = [];
            $event->setLayerData($returnData);
        }
    }

    /**
     * @param $child
     * @return array
     */
    protected function getProjectsPoiData($child)
    {
        $arrProjects = [];
        $dataRepo = $this->em->getRepository(EditorElement::class);
        $categoryRepo = $this->em->getRepository(EditorElementCategory::class);
        $elementRepo = $this->em->getRepository(EditorElementType::class);

        $feUser = FrontendUser::getInstance();
        // return empty array if no FrontendUser is logged in
        if (!C4GUtils::isFrontendUserLoggedIn()) {
            return [];
        }
        $memberId = $feUser->id;
        if ($memberId === null) {
            // no member logged in
            return [];
        }
        $event = new LoadProjectsEvent();
        $event->setMemberId($memberId);
        $this->eventDispatcher->dispatch($event::NAME, $event);
        $projects = $event->getProjects();

        foreach ($projects as $project) {
            $arrProject = $this->addMapStructureElementWithIdCalc(
                $project->getId(),
                $child['id'],
                $child['pid'],
                69,
                'projectLayer',
                $project->getCaption(),
                $project->getCaption(),
                true,
                $child['hide'] //|| $project->getStandingData()
            );
            $arrProject['projectId'] = $project->getId();
            $categoryIds = [];
            $elementIds = [];
            $arrData = $dataRepo->findBy([
                'projectid' => $project->getId(),
                'published' => 1,
            ]);
            // get all used categories for project
            // get all used elements for project
            // sort in data
            /** @var EditorElement $datum */
            foreach ($arrData as $datum) {
                if (!(in_array($datum->getCategoryid(), $categoryIds))) {
                    $categoryIds[] = $datum->getCategoryid();
                }
                if (!(in_array($datum->getTypeid(), $elementIds))) {
                    $elementIds[] = $datum->getTypeid();
                }
            }
            $categories = $categoryRepo->findBy(['id' => $categoryIds]);
            $elements = $elementRepo->findBy(['id' => $elementIds]);
            $withCategories = false;
            foreach ($categories as $category) {
                $arrCategory = $this->addMapStructureElementWithIdCalc(
                    $category->getId(),
                    $project->getId(),
                    $child['id'],
                    70,
                    'none',
                    $category->getCaption(),
                    $category->getCaption(),
                    true,
                    $child['hide']
                );
                $arrCategory['projectId'] = $project->getId();
                $withElements = false;
                foreach ($elements as $element) {
                    $containingCategories = $element->getCategories();
                    if (in_array($category->getId(), $containingCategories)) {
                        $withElements = true;
                        $arrElement = $this->addMapStructureElementWithIdCalc(
                            $element->getId(),
                            $category->getId(),
                            $project->getId(),
                            71,
                            'none',
                            $element->getCaption(),
                            $element->getCaption(),
                            true,
                            $child['hide']
                        );
                        // append random value
                        $arrElement['id'] = EditorCommon::calcLayerId($element->getId(), $category->getId(), $project->getId(), 71);
                        $arrElement['projectId'] = $project->getId();
                        $elementData = [];
                        foreach ($arrData as $datum) {
                            if ($datum->getTypeid() === $element->getId()) {
                                $arrDatum = $this->getSingleDataArray($datum, $child);
                                $arrDatum['projectId'] = $project->getId();
                                $elementData[] = $arrDatum;
                            }
                        }
                        $arrElement = $this->addMapStructureChilds($arrElement, $elementData);
                        $arrElement['content'] = [];
                        $arrCategory = $this->addMapStructureChild($arrCategory, $arrElement);
                        $arrCategory['content'] = [];
                    }
                }

                if ($withElements) {
                    $withCategories = true;
                    $arrProject = $this->addMapStructureChild($arrProject, $arrCategory);
                }
            }

            if ($withCategories) {
                $arrProject['display'] = true;
            } else {
                $arrProject['display'] = false;
            }
            $arrProject['content'] = [];
            $arrProjects[] = $arrProject;
        }

        return $arrProjects;
    }

    /**
     * Converts a MapsProjectData entity to a map structure element with content.
     * @param EditorElement $data
     * @param $child
     * @return array
     */
    public function getSingleDataArray(EditorElement $data, $child)
    {
        switch ($data->getDrawtype()) {
            case EditorDrawStyles::FREEHAND:
            case EditorDrawStyles::POLYGON:
            case EditorDrawStyles::LINESTRING:
                $content = $this->createGeoJsonContent($data);
                $arrDatum = $this->addMapStructureElementWithIdCalc(
                    $data->getId(),
                    $data->getTypeid(),
                    $data->getCategoryid(),
                    72,
                    'GeoJSON',
                    $data->getName(),
                    $data->getName(),
                    true,
                    $child['hide'],
                    $content
                );

                break;
            case EditorDrawStyles::POINT:
                $content = $this->addMapStructureContent(
                    EditorCommon::getLocstyleForData($data, $this->em),
                    $data->getLocgeox(),
                    $data->getLocgeoy(),
                    $this->createPopup($data)['content'],
                    $data->getLoclabel(),
                    $data->getName()
                );
                $settings = EditorCommon::getSettingsForData($data, $this->em);
                if ($settings) {
                    $content[0]['settings'] = $settings['settings'];
                    $content[0]['data']['url'] = $settings['url'];
                }
                $arrDatum = $this->addMapStructureElementWithIdCalc(
                    $data->getId(),
                    $data->getTypeid(),
                    $data->getCategoryid(),
                    79,
                    'none',
                    $data->getName(),
                    $data->getName(),
                    true,
                    $child['hide'],
                    $content
                );

                break;
            case EditorDrawStyles::CIRCLE:
                $content = $this->createContentForCircleGeom($data);
                $arrDatum = $this->addMapStructureElementWithIdCalc(
                    $data->getId(),
                    $data->getTypeid(),
                    $data->getCategoryid(),
                    81,
                    'none',
                    $data->getName(),
                    $data->getName(),
                    true,
                    $child['hide'],
                    $content
                );

                break;
            default:
                $arrDatum = [];

                break;
        }

        return $arrDatum;
    }

    private function createGeoJsonContent(EditorElement $data)
    {
        $projection = 'EPSG:3857';
        $geoJson = $data->getGeojson();
        if ($geoJson) {
            $decodedData = json_decode($geoJson);
            $popup = $this->createPopup($data);
            $properties = $decodedData->properties; //???
            $geometry = $decodedData->geometry;
            $arrData = [
                'type' => 'Feature',
                'geometry' => $geometry,
                'properties' => [
                    'popup' => $popup,
                    'projection' => $projection,
                    'label' => $data->getLoclabel() . '',
                    'zoom_onclick' => false,
                    'tooltip' => $data->getName(),
                    'graphicTitle' => $data->getName(),
                ],
                'format' => 'GeoJSON',
            ];
            $arrGeoJson = [];
            $arrGeoJson['data'] = $arrData;
            $arrGeoJson['format'] = 'GeoJSON';
            $arrGeoJson['locationStyle'] = EditorCommon::getLocstyleForData($data, $this->em);
        } else {
            $arrGeoJson = [];
        }

        return [$arrGeoJson];
    }

    private function createContentForCircleGeom(EditorElement $data)
    {
        $content = [
            'id' => 0,
            'type' => 'single',
            'format' => 'GeoJSON',
            //'origType' => 'single',
            'locationStyle' => EditorCommon::getLocstyleForData($data, $this->em),
            'data' => [
                'type' => 'Feature',
                'geometry' => [
                    'type' => 'Circle',
                    'center' => [
                        (float) $data->getLocgeox(),
                        (float) $data->getLocgeoy(),
                    ],
                    'radius' => $data->getRadius(),
                ],
                'properties' => [
                    'projection' => 'EPSG:4326',
                    'positionId' => 0,
                    'popup' => $this->createPopup($data),
                    'label' => $data->getLoclabel(),
                    'graphicTitle' => $data->getName(),
                    'tooltip' => $data->getName(),
                ],
            ],
            'settings' => [],
        ];

        return [$content];
    }

    public function createPopup(EditorElement $data)
    {
        $popup = [];
        $popup['content'] = "<div id='async-popup-data'><script>jQuery.get('con4gis/projectData/popup/' + " . $data->getId() . ").done(function(data) {
            document.getElementById('async-popup-data').innerHTML = data;
        });</script></div>";
        $popup['async'] = false;
        $popup['routing_link'] = '1';

        return $popup;
    }
}
