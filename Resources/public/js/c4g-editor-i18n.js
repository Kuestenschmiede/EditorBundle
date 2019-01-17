import {langConstantsGerman} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-constant-i18n-de";
import {langConstantsEnglish} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-constant-i18n-en";
import {projectEditorLang} from "./c4g-project-editor-i18n-de";
let mapsLang = {};

if (typeof mapData !== "undefined") {
  if (mapData.lang === "de") {
    mapsLang = langConstantsGerman;
  } else if (mapData.lang === "en") {
    mapsLang = langConstantsEnglish;
  } else {
    // fallback
    mapsLang = langConstantsGerman;
  }
}
export var langConstants = $.extend(mapsLang, projectEditorLang);