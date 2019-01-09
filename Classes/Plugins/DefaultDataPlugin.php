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

namespace con4gis\MapsProjectBundle\Classes\Plugins;


use con4gis\EditorBundle\Classes\Events\CreateDataEvent;
use con4gis\EditorBundle\Classes\Events\SaveMetadataEvent;
use con4gis\EditorBundle\Classes\Plugins\AbstractDataPlugin;
use con4gis\MapsProjectBundle\Entity\MapsProjectData;
use con4gis\ProjectsBundle\Classes\Fieldlist\C4GBrickField;
use con4gis\ProjectsBundle\Classes\Fieldtypes\C4GDateField;
use con4gis\ProjectsBundle\Classes\Fieldtypes\C4GLastChangeField;
use con4gis\ProjectsBundle\Classes\Fieldtypes\C4GMemberField;
use con4gis\ProjectsBundle\Classes\Fieldtypes\C4GHeadlineField;
use con4gis\ProjectsBundle\Classes\Fieldtypes\C4GTextareaField;
use con4gis\ProjectsBundle\Classes\Fieldtypes\C4GTextField;

class DefaultDataPlugin extends AbstractDataPlugin
{
    public function getData($dataId, $fieldList, $entityManager)
    {
        $entity = $entityManager->getRepository(MapsProjectData::class)->findOneBy([
            'id' => $dataId
        ]);
        $data = [];
        foreach ($fieldList as $field) {
            $getter = 'get' . ucfirst(str_replace("_", "", $field->getFieldName()));
            if (method_exists($entity, $getter)) {
                $data[$field->getFieldName()] = $entity->$getter();
            }
        }
        return $data;
    }

    public function getFields($dataId)
    {
        // $dataId is ignored, these are default values for all elements
        // ToDo Language
        $fieldList = [];

        $headlineField = new C4GHeadlineField();
        $headlineField->setTitle('Grunddaten');
        $fieldList[] = $headlineField;

        $nameField = new C4GTextField();
        $nameField->setFieldName('name')->setTitle("Bezeichnung")
            ->setDescription("Hier können Sie den Namen des Elements ändern.")
            ->setMandatory();
        $fieldList[] = $nameField;

        $descField = new C4GTextareaField();
        $descField->setFieldName('description')->setTitle("Beschreibung")
            ->setDescription("Hier können Sie die Beschreibung des Elements ändern.")->setMaxLength(100);
        $fieldList[] = $descField;

        $tstampField = new C4GDateField();
        $tstampField->setFieldName('tstamp')->setFormField(false)->setPopupField(false);
        $fieldList[] = $tstampField;

        $lastMemberField = new C4GLastChangeField();
        $lastMemberField->setFieldName('lastmemberid')->setTitle("Letzter Bearbeiter")
            ->setDescription("Hier sehen Sie, wer das Element zuletzt bearbeitet hat.")
            ->setEditable(false)
            ->setMandatory();
        $fieldList[] = $lastMemberField;

        $labelField = new C4GTextField();
        $labelField->setFieldName('loc_label')->setTitle("Kartenlabel")->setPopupField(false)
            ->setDescription("Hier können Sie das Label, welches auf der Karte am Element dargestellt wird, anpassen.");
        $fieldList[] = $labelField;

        return $fieldList;
    }

    public function getEntityClass()
    {
        return MapsProjectData::class;
    }

    public function getBackendFields()
    {
        return false;
    }
}