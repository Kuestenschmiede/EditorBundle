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
 * Class EditorMapElementPreset
 * Provides a table for storing element presets that will automatically inserted into new instances of the
 * connected element.
 * @ORM\Entity
 * @ORM\Table(name="tl_c4g_editor_element_preset")
 * @package con4gis\EditorBundle\Entity
 */
class EditorMapElementPreset extends BaseEntity
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
     * @ORM\Column(type="integer")
     */
    protected $pid = 0;

    /**
     * @var int
     * @ORM\Column(type="integer")
     */
    protected $pluginId = 0;

    /**
     * @var string
     * @ORM\Column(type="string")
     */
    protected $pluginField = '';

    /**
     * @var string
     * @ORM\Column(type="string")
     */
    protected $pluginValue = '';

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
    public function getPid(): int
    {
        return $this->pid;
    }

    /**
     * @param int $pid
     */
    public function setPid(int $pid): void
    {
        $this->pid = $pid;
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
    public function getPluginId(): int
    {
        return $this->pluginId;
    }

    /**
     * @param int $pluginId
     */
    public function setPluginId(int $pluginId): void
    {
        $this->pluginId = $pluginId;
    }

    /**
     * @return string
     */
    public function getPluginField(): string
    {
        return $this->pluginField;
    }

    /**
     * @param string $pluginField
     */
    public function setPluginField(string $pluginField): void
    {
        $this->pluginField = $pluginField;
    }

    /**
     * @return string
     */
    public function getPluginValue(): string
    {
        return $this->pluginValue;
    }

    /**
     * @param string $pluginValue
     */
    public function setPluginValue(string $pluginValue): void
    {
        $this->pluginValue = $pluginValue;
    }
}