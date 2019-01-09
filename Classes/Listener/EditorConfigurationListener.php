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

namespace con4gis\EditorBundle\Classes\Listener;


use con4gis\EditorBundle\Classes\EditorDrawStyles;
use con4gis\EditorBundle\Classes\Events\EditorConfigurationEvent;
use con4gis\EditorBundle\Classes\EditorBrickTypes;
use con4gis\EditorBundle\Entity\EditorMapCategory;
use con4gis\EditorBundle\Entity\EditorMapElement;
use con4gis\EditorBundle\Entity\MapsProjectScenario;
use con4gis\ProjectsBundle\Classes\Models\C4gProjectsModel;
use Doctrine\ORM\EntityManager;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class EditorConfigurationListener
{
    /**
     * @var EntityManager
     */
    private $entityManager = null;

    /**
     * EditorConfigurationListener constructor.
     * @param EntityManager $entityManager
     */
    public function __construct(EntityManager $entityManager)
    {
        $this->entityManager = $entityManager;
    }

//    /**
//     * Loads the scenarios for the subdomain given in $event.
//     * @param EditorConfigurationEvent $event
//     * @param $eventname
//     * @param EventDispatcherInterface $eventDispatcher
//     */
//    public function onEditorConfigurationLoadScenarios(
//        EditorConfigurationEvent $event,
//        $eventname,
//        EventDispatcherInterface $eventDispatcher
//    ) {
//        $subdomain = $event->getSubdomain();
//        $scenarioIds = $subdomain->getScenarios();
//        $event->setScenarios($scenarioIds);
//    }

    /**
     * Loads the elements for the scenarios given in $event.
     * @param EditorConfigurationEvent $event
     * @param $eventname
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onEditorConfigurationLoadElements(
        EditorConfigurationEvent $event,
        $eventname,
        EventDispatcherInterface $eventDispatcher
    ) {
//        $scenarios = $event->getScenarios();
        $elements = $this->entityManager->getRepository(EditorMapElement::class)->findAll();
//        $validElements = [];
//        foreach ($elements as $element) {
//            if (count(array_intersect($scenarios, $element->getScenarios())) > 0) {
//                // element appears in the given list of scenarios
//                $validElements[$element->getId()] = $element;
//            }
//        }
        $event->setElements($elements);
    }

    /**
     * Loads the categories for the elements given in $event.
     * @param EditorConfigurationEvent $event
     * @param $eventname
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onEditorConfigurationLoadCategories(
        EditorConfigurationEvent $event,
        $eventname,
        EventDispatcherInterface $eventDispatcher
    ) {
        $catRepo = $this->entityManager->getRepository(EditorMapCategory::class);
        $elements = $event->getElements();
        $categorIds = [];
        $categories = [];
        foreach ($elements as $element) {
            $elemCategories = $element->getCategories();
            foreach ($elemCategories as $cid) {
                if (!in_array($cid, $categorIds)) {
                    $categorIds[] = $cid;
                    $category = $catRepo->findOneBy(['id' => $cid]);
                    if ($category) {
                        $categories[$cid] = $category;
                    }
                }
            }
        }
        $event->setCategories($categories);
    }

    /**
     * Sorts the elements and categories in an alphabetical order
     * @param EditorConfigurationEvent $event
     * @param $eventname
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onEditorConfigurationSortData(
        EditorConfigurationEvent $event,
        $eventname,
        EventDispatcherInterface $eventDispatcher
    ) {
        $elements = $event->getElements();
        $categories = $event->getCategories();
        uasort($elements, function ($a, $b) {
            return strcmp($a->getCaption(), $b->getCaption());
        });
        uasort($categories, function ($a, $b) {
            return strcmp($a->getCaption(), $b->getCaption());
        });
        $event->setCategories($categories);
        $event->setElements($elements);
    }

    /**
     * Converts the element entities to arrays, as needed by the JS frontend.
     * @param EditorConfigurationEvent $event
     * @param $eventname
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onEditorConfigurationConvertElements(
        EditorConfigurationEvent $event,
        $eventname,
        EventDispatcherInterface $eventDispatcher
    ) {
        $elements = $event->getElements();
        $arrElements = [];
        foreach ($elements as $element) {
            $arrElement = [];
            $arrElement['id'] = $element->getId();
            $arrElement['name'] = $element->getCaption();

            $styles = [];
            if ($element->getPointstyle() != 0) {
                $styles['point'] = $element->getPointstyle();
            }
            if ($element->getLinestyle() != 0) {
                $styles['linestring'] = $element->getLinestyle();
            }
            if ($element->getPolygonstyle() != 0) {
                $styles['polygon'] = $element->getPolygonstyle();
            }
            if ($element->getCirclestyle() != 0) {
                $styles['circle'] = $element->getCirclestyle();
            }
            if ($element->getFreehandstyle() != 0) {
                $styles['freehand'] = $element->getFreehandstyle();
            }

            $arrElement['locstyles'] = $styles;
            $arrElement['categories'] = $element->getCategories();
            $arrElements[] = $arrElement;
        }
        $event->setArrElements($arrElements);
    }

    /**
     * Formats the found elements into the correct structure for the JS-Frontend to use.
     * @param EditorConfigurationEvent $event
     * @param $eventname
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onEditorConfigurationGetDrawStyles(
        EditorConfigurationEvent $event,
        $eventname,
        EventDispatcherInterface $eventDispatcher
    ) {
        $editorConfig = $event->getEditorConfig();
        $categories = $event->getCategories();
        $arrElements = $event->getArrElements();
        $drawStyles = [];
        $styleArray = EditorDrawStyles::getDrawStyleArray();
        foreach ($styleArray as $key => $drawStyle) {
            $arrCategories = [];
            $drawStyles[$key] = [];
            /** @var EditorMapCategory $category */
            foreach ($categories as $cid  => $category) {
                $arrCategory = [];
                $arrCategory['id'] = $cid;
                $arrCategory['name'] = $category->getCaption();
                $arrCategory['elements'] = [];
                foreach ($arrElements as $arrElement) {
                    // is the element in the current drawstyle and in the current category?
                    if ((in_array($cid, $arrElement['categories'])) && (in_array($key, array_keys($arrElement['locstyles'])))) {
                        $jsonElement = [];
                        $jsonElement['id'] = $arrElement['id'];
                        $jsonElement['name'] = $arrElement['name'];
                        $jsonElement['styleId'] = $arrElement['locstyles'][$key];
                        $jsonElement['categoryid'] = $cid;
                        $arrCategory['elements'][] = $jsonElement;
                    }
                }
                if (count($arrCategory['elements']) > 0) {
                    $arrCategories[] = $arrCategory;
                }
            }
            $drawStyles[$key]['categories'] = $arrCategories;
        }
        $editorConfig['drawStyles'] = $drawStyles;
        $event->setEditorConfig($editorConfig);
    }

    /**
     * Gets the general api config for the editor.
     * @param EditorConfigurationEvent $event
     * @param $eventname
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onEditorConfigurationGetApiConfig(
        EditorConfigurationEvent $event,
        $eventname,
        EventDispatcherInterface $eventDispatcher
    ) {
        $editorConfig = $event->getEditorConfig();
        $editorConfig['dataBaseUrl'] = "con4gis/projectData/";
        $event->setEditorConfig($editorConfig);
    }
}