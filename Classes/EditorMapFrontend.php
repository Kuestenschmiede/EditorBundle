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

namespace con4gis\EditorBundle\Classes;


use con4gis\CoreBundle\Resources\contao\classes\C4GUtils;
use con4gis\GroupsBundle\Resources\contao\models\MemberGroupModel;
use con4gis\MapsBundle\Classes\Events\LoadLayersEvent;
use con4gis\EditorBundle\Classes\Helper\EditorCommon;
use con4gis\EditorBundle\Classes\Events\LoadProjectsEvent;
use con4gis\EditorBundle\Entity\EditorMapCategory;
use con4gis\EditorBundle\Entity\EditorMapData;
use con4gis\EditorBundle\Entity\EditorMapElement;
use con4gis\ProjectsBundle\Classes\Common\C4GBrickCommon;
use con4gis\ProjectsBundle\Classes\Maps\C4GBrickMapFrontendParent;
use con4gis\ProjectsBundle\Classes\Models\C4gProjectsModel;
use Contao\FrontendUser;
use Contao\System;
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
                $child['hide']);

            // set hide when in tab if set in backend
            if ($child['hide_when_in_tab']) {
                $arrData['hide_when_in_tab'] = $child['hide_when_in_tab'];
            }

            $arrChildData = [];
            switch ($child['type']) {
                //ToDo wird das script hier überhaupt gebraucht?
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
        $arrProjects = array();
        $dataRepo = $this->em->getRepository(EditorMapData::class);
        $categoryRepo = $this->em->getRepository(EditorMapCategory::class);
        $elementRepo = $this->em->getRepository(EditorMapElement::class);

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
                // TODO das kann doch so nie funktioniert haben...
                $child['hide'] //|| $project->getStandingData()
            );
            $arrProject['projectId'] = $project->getId();
            $categoryIds = [];
            $elementIds = [];
            $arrData = $dataRepo->findBy([
                'projectid' => $project->getId(),
                'published' => 1
            ]);
            // get all used categories for project
            // get all used elements for project
            // sort in data
            /** @var EditorMapData $datum */
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
                                $arrDatum = $this->getSingleDataArray($datum, $element, $child, $category);
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
     * @param EditorMapData $data
     * @param EditorMapElement $element
     * @param $child
     * @param $category
     * @return array
     */
    public function getSingleDataArray(EditorMapData $data, EditorMapElement $element, $child, $category)
    {
        switch ($data->getDrawtype()) {
            case EditorDrawStyles::FREEHAND:
            case EditorDrawStyles::POLYGON:
            case EditorDrawStyles::LINESTRING:
                $content = $this->createGeoJsonContent($data);
                $arrDatum = $this->addMapStructureElementWithIdCalc(
                    $data->getId(),
                    $element->getId(),
                    $category->getId(),
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
                    $element->getId(),
                    $category->getId(),
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
                    $element->getId(),
                    $category->getId(),
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

    private function createGeoJsonContent(EditorMapData $data)
    {
        $projection = 'EPSG:3857';
        $decodedData = json_decode($data->getGeojson());
        $popup = $this->createPopup($data);
        $properties = $decodedData->properties;
        $arrData = array
        (
            'type' => 'Feature',
            'geometry' => $decodedData->geometry,
            'properties' => array
            (
                'popup' => $popup,
                'projection' => $projection,
                'label' => $data->getLoclabel() . "",
                'zoom_onclick' => false,
                'tooltip' => $data->getName(),
                'graphicTitle' => $data->getName()
            ),
            'format' => 'GeoJSON'
        );
        $arrGeoJson = [];
        $arrGeoJson['data'] = $arrData;
        $arrGeoJson['format'] = 'GeoJSON';
        $arrGeoJson['locationStyle'] = EditorCommon::getLocstyleForData($data, $this->em);
        return [$arrGeoJson];
    }

    private function createContentForCircleGeom(EditorMapData $data)
    {
        $content = array(
            'id' => 0,
            'type' => 'single',
            'format' => 'GeoJSON',
            //'origType' => 'single',
            'locationStyle' => EditorCommon::getLocstyleForData($data, $this->em),
            'data' => array(
                'type' => 'Feature',
                'geometry' => array(
                    'type' => 'Circle',
                    'center' => array(
                        (float) $data->getLocgeox(),
                        (float) $data->getLocgeoy()
                    ),
                    'radius' => $data->getRadius()
                ),
                'properties' => array
                (
                    'projection' => 'EPSG:4326',
                    'positionId' => 0,
                    'popup' => $this->createPopup($data),
                    'label' => $data->getLoclabel(),
                    'graphicTitle' => $data->getName(),
                    'tooltip' => $data->getName()
                )
            ),
            'settings' => []
        );
        return [$content];
    }

    public function createPopup(EditorMapData $data)
    {
        $popup = [];
        $popup['content'] = "<div id='async-popup-data'><script>jQuery.get('con4gis/projectData/popup/' + ". $data->getId() .").done(function(data) {
            document.getElementById('async-popup-data').innerHTML = data;
        });</script></div>";
        $popup['async'] = false;
        $popup['routing_link'] = "1";
        return $popup;
    }

}