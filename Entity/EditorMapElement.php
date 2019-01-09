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

namespace con4gis\EditorBundle\Entity;

use \Doctrine\ORM\Mapping as ORM;
use con4gis\CoreBundle\Entity\BaseEntity;

/**
 * Class EditorMapElement
 *
 * @ORM\Entity
 * @ORM\Table(name="tl_c4g_editor_map_element")
 * @package con4gis\EditorBundle\Entity
 */
class EditorMapElement extends BaseEntity
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
    protected $caption = '';

    /**
     * @var int
     * @ORM\Column(type="integer")
     */
    protected $pointstyle = 0;

    /**
     * @var int
     * @ORM\Column(type="integer")
     */
    protected $linestyle = 0;

    /**
     * @var int
     * @ORM\Column(type="integer")
     */
    protected $polygonstyle = 0;

    /**
     * @var int
     * @ORM\Column(type="integer")
     */
    protected $circlestyle = 0;

    /**
     * @var int
     * @ORM\Column(type="integer")
     */
    protected $freehandstyle = 0;

    /**
     * @var array
     * @ORM\Column(type="array")
     */
    protected $categories = [];

    /**
     * @var array
     * @ORM\Column(type="array")
     */
    protected $scenarios = [];

    /**
     * @var array
     * @ORM\Column(type="array")
     */
    protected $plugins = [];

    /**
     * EditorMapElement constructor.
     */
    public function __construct()
    {
        $this->scenarios = [];
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     * @return EditorMapElement
     */
    public function setId($id)
    {
        $this->id = $id;
        return $this;
    }

    /**
     * @return int
     */
    public function getTstamp()
    {
        return $this->tstamp;
    }

    /**
     * @param int $tstamp
     * @return EditorMapElement
     */
    public function setTstamp($tstamp)
    {
        $this->tstamp = $tstamp;
        return $this;
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param string $name
     * @return EditorMapElement
     */
    public function setName($name)
    {
        $this->name = $name;
        return $this;
    }


    /**
     * @return string
     */
    public function getCaption()
    {
        return $this->caption;
    }

    /**
     * @param string $caption
     * @return EditorMapElement
     */
    public function setCaption($caption)
    {
        $this->caption = $caption;
        return $this;
    }

    /**
     * @return int
     */
    public function getPointstyle(): int
    {
        return $this->pointstyle;
    }

    /**
     * @param int $pointstyle
     */
    public function setPointstyle(int $pointstyle)
    {
        $this->pointstyle = $pointstyle;
    }

    /**
     * @return int
     */
    public function getLinestyle(): int
    {
        return $this->linestyle;
    }

    /**
     * @param int $linestyle
     */
    public function setLinestyle(int $linestyle)
    {
        $this->linestyle = $linestyle;
    }

    /**
     * @return int
     */
    public function getPolygonstyle(): int
    {
        return $this->polygonstyle;
    }

    /**
     * @param int $polygonstyle
     */
    public function setPolygonstyle(int $polygonstyle)
    {
        $this->polygonstyle = $polygonstyle;
    }

    /**
     * @return int
     */
    public function getCirclestyle(): int
    {
        return $this->circlestyle;
    }

    /**
     * @param int $circlestyle
     */
    public function setCirclestyle(int $circlestyle)
    {
        $this->circlestyle = $circlestyle;
    }

    /**
     * @return int
     */
    public function getFreehandstyle(): int
    {
        return $this->freehandstyle;
    }

    /**
     * @param int $freehandstyle
     */
    public function setFreehandstyle(int $freehandstyle)
    {
        $this->freehandstyle = $freehandstyle;
    }

    /**
     * @return array
     */
    public function getCategories()
    {
        return $this->categories;
    }

    /**
     * @param array $categories
     * @return EditorMapElement
     */
    public function setCategories($categories)
    {
        $this->categories = $categories;
        return $this;
    }

    /**
     * @return array
     */
    public function getScenarios(): array
    {
        return $this->scenarios;
    }

    /**
     * @param array $scenarios
     * @return EditorMapElement
     */
    public function setScenarios(array $scenarios): EditorMapElement
    {
        $this->scenarios = $scenarios;
        return $this;
    }

    /**
     * @return array
     */
    public function getPlugins(): array
    {
        return $this->plugins;
    }

    /**
     * @param array $plugins
     * @return $this
     */
    public function setPlugins(array $plugins)
    {
        $this->plugins = $plugins;
        return $this;
    }
}