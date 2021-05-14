<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

namespace con4gis\EditorBundle\Entity;

use \Doctrine\ORM\Mapping as ORM;
use con4gis\CoreBundle\Entity\BaseEntity;

/**
 * Class EditorElement
 *
 * @ORM\Entity
 * @ORM\Table(name="tl_c4g_editor_element")
 * @package con4gis\EditorBundle\Entity
 */
class EditorElement extends BaseEntity
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
    public function getUuid(): string
    {
        return $this->uuid;
    }

    /**
     * @param string $uuid
     */
    public function setUuid(string $uuid): void
    {
        $this->uuid = $uuid;
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
     * @return int
     */
    public function getProjectid(): int
    {
        return $this->projectid;
    }

    /**
     * @param int $projectid
     */
    public function setProjectid(int $projectid): void
    {
        $this->projectid = $projectid;
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
    public function setGroupid(int $groupid): void
    {
        $this->groupid = $groupid;
    }

    /**
     * @return int
     */
    public function getCategoryid(): int
    {
        return $this->categoryid;
    }

    /**
     * @param int $categoryid
     */
    public function setCategoryid(int $categoryid): void
    {
        $this->categoryid = $categoryid;
    }

    /**
     * @return int
     */
    public function getTypeid(): int
    {
        return $this->typeid;
    }

    /**
     * @param int $typeid
     */
    public function setTypeid(int $typeid): void
    {
        $this->typeid = $typeid;
    }

    /**
     * @return string
     */
    public function getLocgeox(): string
    {
        return $this->locgeox;
    }

    /**
     * @param string $locgeox
     */
    public function setLocgeox(string $locgeox): void
    {
        $this->locgeox = $locgeox;
    }

    /**
     * @return string
     */
    public function getLocgeoy(): string
    {
        return $this->locgeoy;
    }

    /**
     * @param string $locgeoy
     */
    public function setLocgeoy(string $locgeoy): void
    {
        $this->locgeoy = $locgeoy;
    }

    /**
     * @return string
     */
    public function getLoclabel(): string
    {
        return $this->loclabel;
    }

    /**
     * @param string $loclabel
     */
    public function setLoclabel(string $loclabel): void
    {
        $this->loclabel = $loclabel;
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
    public function setDescription(string $description): void
    {
        $this->description = $description;
    }

    /**
     * @return string
     */
    public function getContactname(): string
    {
        return $this->contactname;
    }

    /**
     * @param string $contactname
     */
    public function setContactname(string $contactname): void
    {
        $this->contactname = $contactname;
    }

    /**
     * @return string
     */
    public function getContactphone(): string
    {
        return $this->contactphone;
    }

    /**
     * @param string $contactphone
     */
    public function setContactphone(string $contactphone): void
    {
        $this->contactphone = $contactphone;
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
    public function setLastmemberid(int $lastmemberid): void
    {
        $this->lastmemberid = $lastmemberid;
    }

    /**
     * @return int
     */
    public function getPublished(): int
    {
        return $this->published;
    }

    /**
     * @param int $published
     */
    public function setPublished(int $published): void
    {
        $this->published = $published;
    }

    /**
     * @return string
     */
    public function getGeojson(): string
    {
        return $this->geojson;
    }

    /**
     * @param string $geojson
     */
    public function setGeojson(string $geojson): void
    {
        $this->geojson = $geojson;
    }

    /**
     * @return float
     */
    public function getRadius(): float
    {
        return $this->radius;
    }

    /**
     * @param float $radius
     */
    public function setRadius(float $radius): void
    {
        $this->radius = $radius;
    }

    /**
     * @return string
     */
    public function getDrawtype(): string
    {
        return $this->drawtype;
    }

    /**
     * @param string $drawtype
     */
    public function setDrawtype(string $drawtype): void
    {
        $this->drawtype = $drawtype;
    }
}