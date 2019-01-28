<?php
/**
 * Created by PhpStorm.
 * User: cro
 * Date: 21.01.19
 * Time: 15:50
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