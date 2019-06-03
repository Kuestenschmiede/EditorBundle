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

namespace con4gis\EditorBundle\Classes\Contao\Callbacks;


use con4gis\EditorBundle\Entity\EditorConfiguration;
use con4gis\EditorBundle\Entity\EditorElementCategory;
use Contao\System;

class TlEditorConfiguration
{
    /**
     * Get a list of all available scenarios
     * @return array()
     */
    public function getCategoryList()
    {
        $categoryRepo = System::getContainer()->get('doctrine.orm.entity_manager')
            ->getRepository(EditorElementCategory::class);
        $categories = $categoryRepo->findAll();
        uasort($categories, function ($a, $b) {
            return strcmp($a->getCaption(), $b->getCaption());
        });
        foreach ($categories as $category) {
            $return[$category->getId()] = $category->getCaption();
        }
        return $return;
    }

    public function getFrontendEditorProfiles()
    {
        return $this->getProfilesByType('frontend');
    }

    public function getBackendEditorProfiles()
    {
        return $this->getProfilesByType('backend');
    }
    
    public function saveCheckbox($varValue)
    {
        if ($varValue === '') {
            return 0;
        } else {
            return 1;
        }
    }
    
    public function loadCheckbox($varValue)
    {
        if ($varValue === 0 || $varValue === "0") {
            return '';
        } else {
            return '1';
        }
    }

    private function getProfilesByType($type)
    {
        $configRepo = System::getContainer()->get('doctrine.orm.entity_manager')
            ->getRepository((EditorConfiguration::class));
        $configs = $configRepo->findBy(['type' => $type]);
        uasort($configs, function ($a, $b) {
            return strcmp($a->getName(), $b->getName());
        });
        $return = [];
        foreach ($configs as $config) {
            $return[$config->getId()] = $config->getName();
        }
        return $return;
    }
}