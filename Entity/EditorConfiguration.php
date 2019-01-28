<?php
/**
 * Created by PhpStorm.
 * User: cro
 * Date: 21.01.19
 * Time: 16:31
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
     * @var array
     * @ORM\Column(type="array", name="editor_vars")
     */
    protected $editorVars = [];

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
     * @return array
     */
    public function getEditorVars(): array
    {
        return $this->editorVars;
    }

    /**
     * @param array $editorVars
     */
    public function setEditorVars(array $editorVars): void
    {
        $this->editorVars = $editorVars;
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
}