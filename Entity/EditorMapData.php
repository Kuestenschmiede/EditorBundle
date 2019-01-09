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
 * Class EditorMapData
 *
 * @ORM\Entity
 * @ORM\Table(name="tl_c4g_editor_map_data")
 * @package con4gis\EditorBundle\Entity
 */
class EditorMapData extends BaseEntity
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
    protected $uuid = '';

    /**
     * @var string
     * @ORM\Column(type="string")
     */
    protected $name = '';

    /**
     * @var int
     * @ORM\Column(type="integer")
     */
    protected $projectid = 0;

    /**
     * @var int
     * @ORM\Column(name="groupid", type="integer")
     */
    protected $groupid = 0;


    /**
     * @var int
     * @ORM\Column(name="category_id", type="integer")
     */
    protected $categoryid = 0;

    /**
     * @var int
     * @ORM\Column(name="type_id", type="integer")
     */
    protected $typeid = 0;

    /**
     * @var string
     * @ORM\Column(name="loc_geox", type="string", length=20)
     */
    protected $locgeox = "";

    /**
     * @var string
     * @ORM\Column(name="loc_geoy", type="string", length=20)
     */
    protected $locgeoy = "";

    /**
     * @var string
     * @ORM\Column(name="loc_label", type="string")
     */
    protected $loclabel = '';

    /**
     * @var string
     * @ORM\Column(type="text")
     */
    protected $description = '';

    /**
     * @var string
     * @ORM\Column(name="contact_name", type="string")
     */
    protected $contactname = '';

    /**
     * @var string
     * @ORM\Column(name="contact_phone", type="string")
     */
    protected $contactphone = '';

    /**
     * @var int
     * @ORM\Column(name="last_member_id", type="integer")
     */
    protected $lastmemberid = 0;

    /**
     * @var int
     * @ORM\Column(type="smallint")
     */
    protected $published = 0;

    /**
     * @var string
     * @ORM\Column(type="text")
     */
    protected $geojson = '';

    /**
     * @var double
     * @ORM\Column(type="decimal", precision=12, scale=5)
     */
    protected $radius = 0.0;

    /**
     * @var string
     * @ORM\Column(type="string")
     */
    protected $drawtype = "";

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId($id)
    {
        $this->id = $id;
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
     */
    public function setTstamp($tstamp)
    {
        $this->tstamp = $tstamp;
    }

    /**
     * @return string
     */
    public function getUuid()
    {
        return $this->uuid;
    }

    /**
     * @param string $uuid
     */
    public function setUuid($uuid)
    {
        $this->uuid = $uuid;
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
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @return int
     */
    public function getProjectid()
    {
        return $this->projectid;
    }

    /**
     * @param int $projectid
     */
    public function setProjectid($projectid)
    {
        $this->projectid = $projectid;
    }

    /**
     * @return int
     */
    public function getGroupid()
    {
        return $this->groupid;
    }

    /**
     * @param int $groupid
     */
    public function setGroupid($groupid)
    {
        $this->groupid = $groupid;
    }

    /**
     * @return int
     */
    public function getCategoryid()
    {
        return $this->categoryid;
    }

    /**
     * @param int $categoryid
     */
    public function setCategoryid($categoryid)
    {
        $this->categoryid = $categoryid;
    }

    /**
     * @return int
     */
    public function getTypeid()
    {
        return $this->typeid;
    }

    /**
     * @param int $typeid
     */
    public function setTypeid($typeid)
    {
        $this->typeid = $typeid;
    }

    /**
     * @return string
     */
    public function getLocgeox()
    {
        return $this->locgeox;
    }

    /**
     * @param string $locgeox
     */
    public function setLocgeox($locgeox)
    {
        $this->locgeox = $locgeox;
    }

    /**
     * @return string
     */
    public function getLocgeoy()
    {
        return $this->locgeoy;
    }

    /**
     * @param string $locgeoy
     */
    public function setLocgeoy($locgeoy)
    {
        $this->locgeoy = $locgeoy;
    }

    /**
     * @return string
     */
    public function getLoclabel()
    {
        return $this->loclabel;
    }

    /**
     * @param string $loclabel
     */
    public function setLoclabel($loclabel)
    {
        $this->loclabel = $loclabel;
    }

    /**
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @param string $description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * @return string
     */
    public function getContactname()
    {
        return $this->contactname;
    }

    /**
     * @param string $contactname
     */
    public function setContactname($contactname)
    {
        $this->contactname = $contactname;
    }

    /**
     * @return string
     */
    public function getContactphone()
    {
        return $this->contactphone;
    }

    /**
     * @param string $contactphone
     */
    public function setContactphone($contactphone)
    {
        $this->contactphone = $contactphone;
    }

    /**
     * @return int
     */
    public function getLastmemberid()
    {
        return $this->lastmemberid;
    }

    /**
     * @param int $lastmemberid
     */
    public function setLastmemberid($lastmemberid)
    {
        $this->lastmemberid = $lastmemberid;
    }

    /**
     * @return int
     */
    public function getPublished()
    {
        return $this->published;
    }

    /**
     * @param int $published
     */
    public function setPublished($published)
    {
        $this->published = $published;
    }

    /**
     * @return string
     */
    public function getGeojson()
    {
        return $this->geojson;
    }

    /**
     * @param string $geojson
     */
    public function setGeojson($geojson)
    {
        $this->geojson = $geojson;
    }

    /**
     * @return float
     */
    public function getRadius()
    {
        return $this->radius;
    }

    /**
     * @param float $radius
     */
    public function setRadius($radius)
    {
        $this->radius = $radius;
    }

    /**
     * @return string
     */
    public function getDrawtype()
    {
        return $this->drawtype;
    }

    /**
     * @param string $drawtype
     */
    public function setDrawtype($drawtype)
    {
        $this->drawtype = $drawtype;
    }

}