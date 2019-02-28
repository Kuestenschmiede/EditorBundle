/*
  * This file is part of con4gis,
  * the gis-kit for Contao CMS.
  *
  * @package   	con4gis
  * @version    6
  * @author  	con4gis contributors (see "authors.txt")
  * @license 	LGPL-3.0-or-later
  * @copyright 	Küstenschmiede GmbH Software & Design
  * @link       https://www.con4gis.org
  */
import {cssConstants} from "./c4g-editor-constant-css";
import {EditorSelectInteraction} from "./c4g-editor-selectinteraction";
import {langConstants} from "./c4g-editor-i18n";

export class EditorSelectView {
  constructor(options) {
    if (!options.editor) {
      console.warn("Cannot initialize select view without editor...");
    }
    this.options = options;
  }

  init() {
    var scope,
      selectedFeatures,
      selectContentWrapper,
      selectView,
      fnHandleSelection,
      editor;

    let selectInteraction, selectBoxInteraction;
    scope = this;
    editor = this.options.editor;
    this.selectContentWrapper = this.createHelpContent();
    let objSelect = new EditorSelectInteraction(editor, scope);
    let interactions = objSelect.createSelectInteraction();
    selectBoxInteraction = interactions.boxInteraction;
    selectInteraction = interactions.selectInteraction;
    scope.selectInteraction = objSelect;
    scope.selectInteraction.interactions = interactions;

    selectView = editor.addView({
      name: 'select',
      triggerConfig: {
        tipLabel: langConstants.EDITOR_VIEW_TRIGGER_SELECT,
        className: cssConstants.EDITOR_VIEW_TRIGGER_SELECT,
        withHeadline: true
      },
      sectionElements: [
        {section: editor.contentContainer, element: this.selectContentWrapper},
        {section: editor.topToolbar, element: editor.viewTriggerBar}
      ],
      initFunction: function () {
        editor.options.mapController.map.addInteraction(selectInteraction);
        editor.options.mapController.map.addInteraction(selectBoxInteraction);
        return true;
      },
      activateFunction: function () {
        // Disable mapHover
        editor.options.mapController.mapHover.deactivate();
        // Reset display, if no features are selected
        if (selectInteraction.getFeatures().getLength() < 1) {
          scope.reloadHelpContent();
        }
        // Enable interaction
        selectInteraction.setActive(true);
        editor.options.mapController.map.addInteraction(selectInteraction);
        selectBoxInteraction.setActive(true);
        editor.options.mapController.map.addInteraction(selectBoxInteraction);
        selectInteraction.activate();
        return true;
      },
      deactivateFunction: function () {
        // Disable interaction
        selectInteraction.setActive(false);
        editor.options.mapController.map.removeInteraction(selectInteraction);
        selectBoxInteraction.setActive(false);
        editor.options.mapController.map.removeInteraction(selectBoxInteraction);
        objSelect.deselectAllElements();
        selectInteraction.deactivate();
        // enable mapHover
        editor.options.mapController.mapHover.activate();

        return true;
      }
    });

    return selectView;
  }

  /**
   * Creates the default content, containing help hints, for the select view.
   */
  createHelpContent() {
    let selectContentWrapper,
      selectContentHeadline,
      selectContent,
      selectContentInfo;

    selectContentWrapper = document.createElement('div');

    // selectContentHeadline = document.createElement('div');
    // selectContentHeadline.innerHTML = langConstants.EDITOR_VIEW_TRIGGER_SELECT;
    // selectContentHeadline.className = 'contentHeadline';
    // selectContentWrapper.appendChild(selectContentHeadline);

    selectContent = document.createElement('div');
    selectContent.className = cssConstants.EDITOR_CONTENT_SELECT;
    selectContentInfo = document.createElement('p');
    selectContentInfo.innerHTML = langConstants.EDITOR_SELECT_INFO;
    selectContentInfo.innerHTML += '<br><br><sub>' + langConstants.EDITOR_SELECT_INFO_ADDITIONAL + '</sub>';
    selectContent.appendChild(selectContentInfo);
    selectContentWrapper.appendChild(selectContent);

    this.selectContent = selectContent;
    // this.selectContentHeadline = selectContentHeadline;
    this.selectContentInfo = selectContentInfo;

    return selectContentWrapper;
  }

  /**
   * Shows the default help content in the select view.
   */
  reloadHelpContent() {
    this.selectContent.innerHTML = "";
    this.options.editor.contentHeadline.innerHTML = langConstants.EDITOR_VIEW_TRIGGER_SELECT;
    this.selectContentInfo.innerHTML = langConstants.EDITOR_SELECT_INFO;
    this.selectContentInfo.innerHTML += '<br><br><sub>' + langConstants.EDITOR_SELECT_INFO_ADDITIONAL + '</sub>';
    //this.selectContent.appendChild(this.selectContentHeadline);
    this.selectContent.appendChild(this.selectContentInfo);
  }
}