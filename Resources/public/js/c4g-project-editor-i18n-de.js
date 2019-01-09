// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.constant = this.c4g.maps.constant || {};

(function ($, c4g) {
  'use strict';

  /**
   * Language constants (en)
   */
  c4g.maps.constant.i18n = $.extend(c4g.maps.constant.i18n, {

    LANG: 'de',

    METADATA_EDIT: "Metadaten bearbeiten",
    DUPLICATE_ELEMENT: "Element duplizieren",
    DISPLACE_ELEMENT: "Element in anderes Projekt verschieben",
    DUPLICATE_AND_DELETE: "Element duplizieren & in anderes Projekt verschieben",
    CHOOSE_PROJECT: "Wähle ein Projekt ...",


    NONE: '' // last line
  }); // end of "language constants" ---

}(jQuery, this.c4g));

export var projectEditorLang = this.c4g.maps.constant.i18n;