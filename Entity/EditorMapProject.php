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
 * Class EditorMapProject
 *
 * @ORM\Entity
 * @ORM\Table(name="tl_c4g_editor_map_project")
 * @package con4gis\EditorBundle\Entity
 */
class EditorMapProject extends BaseEntity
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
    protected $groupid = 0;

    /**
     * @var string
     * @ORM\Column(type="string")
     */
    protected $caption = '';

    /**
     * @var string
     * @ORM\Column(type="text")
     */
    protected $description = '';

    /**
     * @var int
     * @ORM\Column(type="integer")
     */
    protected $lastmemberid = 0;

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
    public function setId(int $id)
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
    public function setTstamp(int $tstamp)
    {
        $this->tstamp = $tstamp;
    }

    /**
     * @return int
     */
    public function getGroupid(): int
    {
        return $this->groupid;
    }

    /**
     * @param int $groupid
     */
    public function setGroupid($groupid)
    {
        if (is_string($groupid)) {
            $groupid = intval($groupid);
        }
        $this->groupid = $groupid;
    }

    /**
     * @return string
     */
    public function getCaption(): string
    {
        return $this->caption;
    }

    /**
     * @param string $caption
     */
    public function setCaption(string $caption)
    {
        $this->caption = $caption;
    }

    /**
     * @return string
     */
    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * @param string $description
     */
    public function setDescription(string $description)
    {
        $this->description = $description;
    }

    /**
     * @return int
     */
    public function getLastmemberid(): int
    {
        return $this->lastmemberid;
    }

    /**
     * @param int $lastmemberid
     */
    public function setLastmemberid(int $lastmemberid)
    {
        $this->lastmemberid = $lastmemberid;
    }
}