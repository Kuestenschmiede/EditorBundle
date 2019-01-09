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

namespace con4gis\EditorBundle\Classes;

use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapThemesModel;
use con4gis\ProjectsBundle\Classes\Dialogs\C4GBrickDialogParams;
use con4gis\ProjectsBundle\Classes\Fieldtypes\C4GGalleryField;
use Contao\Database;

/**
 * Class ReplaceInsertTags
 * @package MapsProjectBundle
 */
class ReplaceInsertTags
{
    /**
     * Instanz von \Contao\Database
     * @var Database|null
     */
    protected $db = null;


    /**
     * ReplaceInsertTags constructor.
     * @param null $db
     */
    public function __construct($db = null)
    {
        if ($db !== null) {
            $this->db = $db;
        } else {
            $this->db = \Contao\Database::getInstance();
        }
    }

    private function getColor($type, $query) {
        if ($query) {
            if (\FrontendUser::getInstance() && $query->profileMember) {
                $profile = C4gMapProfilesModel::findByPk($query->profileMember);
            } else if ($query->profilePublic) {
                $profile = C4gMapProfilesModel::findByPk($query->profilePublic);
            }

            if ($profile && $profile->theme) {
                $theme = C4gMapThemesModel::findByPk($profile->theme);
                if ($theme) {
                    switch ($type) {
                        case 'mclr': return $theme->maincolor; break;
                        case 'fclr': return $theme->fontcolor; break;
                        case 'sclr': return $theme->shadowcolor; break;
                        default: return '';
                    }
                }
            }
        }
    }

    /**
     * @param $tag
     * @return bool
     */
    public function replaceTag($strTag)
    {
        if ($strTag) {
            $arrSplit = explode('::', $strTag);
        }

        if ($arrSplit && (($arrSplit[0] == 'mapsp')) && isset($arrSplit[1]))
        {
            $fieldName = $arrSplit[1];
            $subdomain = \Contao\Environment::get('serverName');
            if ($strpos = strpos($subdomain,'.')) {
                $subdomain = strtolower(substr($subdomain, 0, $strpos));
            }

            if ($fieldName) {
                $table = 'tl_c4g_maps_project_subdomains';

                //ToDO
                $query = $this->db->prepare("SELECT * FROM $table WHERE subdomain=? AND published=?")
                    ->limit(1)
                    ->execute($subdomain,1);

                if ($query->numRows) {
                    switch($fieldName) {
                        case 'mclr':
                        case 'fclr':
                        case 'sclr':
                            return $this->getColor($fieldName, $query);
                        case 'lon': {
                            if (!$query->locgeox) {
                                $query->locgeox = '10.274947552771524';
                            }
                            return $query->locgeox;
                        }
                        case 'lat': {
                            if (!$query->locgeoy) {
                                $query->locgeoy = '51.29582234501174';
                            }
                            return $query->locgeoy;
                        }
                        case 'logo':
                            $file = \FilesModel::findByUuid($query->$fieldName);
                            if ($file) {
                               $image = \Image::get($file->path,auto,40);
                               return '<div class="ce_image block" id="'.$query->subdomain.'_logo">'.
                                    '<figure class="image_container" itemscope="" itemtype="http://schema.org/ImageObject">'.
                                    '<img class="mapcil_logo" src="'.$image.'" itemprop="image">'.
                                    '</figure>'.
                                    '</div>';
                            }
                            break;
                        default:
                            return $query->$fieldName;
                    }
                }
            }
        }

        return false;
    }
}
