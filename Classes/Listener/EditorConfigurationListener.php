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
namespace con4gis\EditorBundle\Classes\Listener;

use con4gis\EditorBundle\Classes\EditorDrawStyles;
use con4gis\EditorBundle\Classes\Events\EditorConfigurationEvent;
use con4gis\EditorBundle\Entity\EditorConfiguration;
use con4gis\EditorBundle\Entity\EditorElementCategory;
use con4gis\EditorBundle\Entity\EditorElementType;
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

    /**
     * Loads the configuration.
     * @param EditorConfigurationEvent $event
     * @param $eventname
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onEditorConfigurationLoadConfiguration(
        EditorConfigurationEvent $event,
        $eventname,
        EventDispatcherInterface $eventDispatcher
    ) {
        $configId = $event->getConfigId();
        $configRepo = $this->entityManager->getRepository(EditorConfiguration::class);
        $config = $configRepo->findOneBy(['id' => $configId]);
        $event->setConfiguration($config);
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
        $catRepo = $this->entityManager->getRepository(EditorElementCategory::class);
        $config = $event->getConfiguration();
        $categoryIds = $config->getCategories();
        $categories = [];
        foreach ($categoryIds as $categoryId) {
            $category = $catRepo->findOneBy(['id' => $categoryId]);
            if ($category) {
                $categories[$categoryId] = $category;
            }
        }
        $event->setCategories($categories);
    }

    /**
     * Loads the elements.
     * @param EditorConfigurationEvent $event
     * @param $eventname
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onEditorConfigurationLoadElements(
        EditorConfigurationEvent $event,
        $eventname,
        EventDispatcherInterface $eventDispatcher
    ) {
        // inefficient, better would be to search elements by category ids
        $categories = $event->getCategories();
        $typeRepo = $this->entityManager->getRepository(EditorElementType::class);
        $types = $typeRepo->findAll();
        $usedTypes = [];
        foreach ($types as $type) {
            foreach ($categories as $category) {
                if (in_array($category->getId(), $type->getCategories())) {
                    if (!in_array($type, $usedTypes)) {
                        $usedTypes[] = $type;
                    }
                }
            }
        }
        $event->setElements($usedTypes);
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
            /** @var EditorElementCategory $category */
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