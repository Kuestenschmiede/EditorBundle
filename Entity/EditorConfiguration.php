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

namespace con4gis\EditorBundle\Entity;

use \Doctrine\ORM\Mapping as ORM;
use con4gis\CoreBundle\Entity\BaseEntity;

/**
 * Class EditorConfiguration
 *
 * @ORM\Entity
 * @ORM\Table(name="tl_c4g_editor_configuration")
 * @package con4gis\EditorBundle\Entity
 */
class EditorConfiguration extends BaseEntity
{
    /**
     * @var int
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    protected $id = 0;

    /**
     * @var int
     * @ORM\Column(type="integer")
     */
    protected $tstamp = 0;

    /**
     * @var int
     * @ORM\Column(type="integer", options={"default":0})
     */
    protected $importId = 0;

    /**
     * @var string
     * @ORM\Column(type="string")
     */
    protected $name = '';

    /**
     * @var string
     * @ORM\Column(type="string")
     */
    protected $type = '';

    /**
     * @var array
     * @ORM\Column(type="array")
     */
    protected $categories = [];

    /**
     * @var int
     * @ORM\Column(type="integer", name="editor_show_items")
     */
    protected $editorShowItems = 0;

    /**
     * @var string
     * @ORM\Column(type="string", name="editor_helpurl")
     */
    protected $editorHelpUrl = '';

    /**
     * @var int
     * @ORM\Column(type="integer", name="is_backend_editor_default")
     */
    protected $isBackendEditorDefault = 0;
    
    /**
     * @var int
     * @ORM\Column(type="integer", name="editor_project_group")
     */
    protected $editorProjectGroup = 0;

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId(int $id): void
    {
        $this->id = $id;
    }

    /**
     * @return int
     */
    public function getTstamp(): int
    {
        return $this->tstamp;
    }

    /**
     * @param int $tstamp
     */
    public function setTstamp(int $tstamp): void
    {
        $this->tstamp = $tstamp;
    }

    /**
     * @return int
     */
    public function getImportId(): int
    {
        return $this->importId;
    }

    /**
     * @param int $importId
     */
    public function setImportId(int $importId): void
    {
        $this->tstamp = $importId;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName(string $name): void
    {
        $this->name = $name;
    }

    /**
     * @return string
     */
    public function getType(): string
    {
        return $this->type;
    }

    /**
     * @param string $type
     */
    public function setType(string $type): void
    {
        $this->type = $type;
    }

    /**
     * @return array
     */
    public function getCategories(): array
    {
        return $this->categories;
    }

    /**
     * @param array $categories
     */
    public function setCategories(array $categories): void
    {
        $this->categories = $categories;
    }

    /**
     * @return int
     */
    public function getEditorShowItems(): int
    {
        return $this->editorShowItems;
    }

    /**
     * @param int $editorShowItems
     */
    public function setEditorShowItems(int $editorShowItems): void
    {
        $this->editorShowItems = $editorShowItems;
    }

    /**
     * @return string
     */
    public function getEditorHelpUrl(): string
    {
        return $this->editorHelpUrl;
    }

    /**
     * @param string $editorHelpUrl
     */
    public function setEditorHelpUrl(string $editorHelpUrl): void
    {
        $this->editorHelpUrl = $editorHelpUrl;
    }

    /**
     * @return int
     */
    public function getisBackendEditorDefault(): int
    {
        return $this->isBackendEditorDefault;
    }

    /**
     * @param int $isBackendEditorDefault
     */
    public function setIsBackendEditorDefault(int $isBackendEditorDefault): void
    {
        $this->isBackendEditorDefault = $isBackendEditorDefault;
    }
    
    /**
     * @return int
     */
    public function getEditorProjectGroup(): int
    {
        return $this->editorProjectGroup;
    }
    
    /**
     * @param int $editorProjectGroup
     */
    public function setEditorProjectGroup(int $editorProjectGroup): void
    {
        $this->editorProjectGroup = $editorProjectGroup;
    }
}