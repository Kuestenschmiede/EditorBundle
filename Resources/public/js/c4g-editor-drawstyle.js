import {cssConstants} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-constant";
import {utils} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-utils";
import {TooltipPopUp} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-misc-tooltippopup";

export class EditorDrawStyle {
  /**
   * Constructor for EditorDrawStyle.
   * @param editor
   * @param type    {string} The drawType
   */
  constructor (editor, type) {
    this.editor = editor;
    this.type = type;
  }

  /**
   * Creates the interaction which lays on the map and handles the drawing of a feature. This interactionView belongs
   * to one element.
   * @param styleId
   * @param element
   * @param category
   * @param categoryContainer
   * @param objDrawView
   * @returns {*|boolean}
   */
  createInteractionView(styleId, element, category, categoryContainer, objDrawView) {
    var interactionView,
      source,
      interaction,
      features,
      editorStyle,
      style,
      styleIcon,
      styleImage,
      styleTriggerLabel,
      featureIdCount,
      name,
      olType;

    // Style "shortcut"
    let editor = this.editor;
    let drawContent = this.editor.drawContent;
    let scope = this;
    let drawView = objDrawView.drawView;
    let locstyleArray = editor.mapsInterface.getLocstyleArray();
    let svgSrc = null;
    let height = 0;
    let width  = 0;
    let scale  = 1;
    let styleData = null;

    if (locstyleArray && locstyleArray[styleId]) {
        style = locstyleArray[styleId].style()[0];
        editorStyle = locstyleArray[styleId].editor;
        svgSrc = locstyleArray[styleId].locStyleArr.svgSrc;
        height = locstyleArray[styleId].locStyleArr.icon_size[0];
        width  = locstyleArray[styleId].locStyleArr.icon_size[1];
        scale  = locstyleArray[styleId].locStyleArr.icon_scale;
        styleData = locstyleArray[styleId].locStyleArr;
    }

    if (!style) {
      console.warn('style '+styleId+' not found in locstyleArray');
      return false;
    }

    featureIdCount = 0;

    styleImage = style.getImage() || undefined;

    // Create label for interaction-trigger
    styleTriggerLabel = document.createElement('span');
    // @TODO use css-class for dimensions
    //styleTriggerLabel.style.display = 'block';
    styleTriggerLabel.style.margin = '2px';

    if (editorStyle.iconSrc || styleImage instanceof ol.style.Icon) {
      styleIcon = document.createElement('img');
      if (styleData.editor_icon_size) {
          styleIcon.height = styleData.editor_icon_size[0];
          styleIcon.width = styleData.editor_icon_size[1];
      } else {
          styleIcon.height = '32px';
          styleIcon.width = '32px';
      }

      if (editorStyle.iconSrc && (editorStyle.iconSrc.indexOf('.') !== -1)) {
        styleIcon.src = editorStyle.iconSrc;
      } else {
        if (svgSrc) {
            if(styleData.svgSrc && styleData.icon_scale && styleData.icon_size) {
                let canvas = document.createElement('canvas');
                let ctx = canvas.getContext("2d");
                let height = (styleData.icon_size[0] * styleData.icon_scale);
                let width = (styleData.icon_size[1] * styleData.icon_scale);

                let strokewidth = 0;
                if (styleData.strokewidth && styleData.strokewidth.value) {
                    strokewidth = styleData.strokewidth.value;
                }

                canvas.height = height + (2 * strokewidth);
                canvas.width = width + (2 * strokewidth);
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                if (styleData.fillcolor) {
                    ctx.fillStyle = utils.getRgbaFromHexAndOpacity(styleData.fillcolor, styleData.fillopacity.value);
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                }

                if (strokewidth && styleData.strokecolor) {
                    ctx.strokeStyle = utils.getRgbaFromHexAndOpacity(styleData.strokecolor, styleData.strokeopacity.value);
                    ctx.lineWidth = strokewidth;
                    ctx.strokeRect(0, 0, canvas.width, canvas.height);
                    ctx.translate(0.5, 0.5);
                }

                let img = new Image();
                img.src = styleData.svgSrc;
                img.zIndex = 100;
                img.onload = function () {
                    ctx.drawImage(img, strokewidth, strokewidth, width, height);
                };

                styleIcon = canvas;
                styleTriggerLabel.style.width = (width * scale) + 'px';
                styleTriggerLabel.style.height = (height * scale) + 'px';
            }
        } else if (styleImage.getSrc()) {
            styleIcon.src = styleImage.getSrc();
            styleIcon.scale = scale;
            styleTriggerLabel.style.width = (width * scale)+'px';
            styleTriggerLabel.style.height = (height * scale)+'px';
        }
      }
      styleTriggerLabel.appendChild(styleIcon);
    } else {
      styleTriggerLabel.style.width = '32px';
      styleTriggerLabel.style.height = '32px';
      styleTriggerLabel.style.background = style.getFill().getColor();
      styleTriggerLabel.style.border = '1px solid ' + style.getStroke().getColor();
    }

    // Create interactionView
    //   "addView" will be used for this, because the functionality
    //   ist mostly equal
    interactionView = editor.addView({
      name: 'draw:' + element.name,
      triggerConfig: {
        id: "element-" + category.id + '-' + element.id,
        label: styleTriggerLabel,
        tipLabel: element.name,
        className: cssConstants.EDITOR_DRAW_TRIGGER,
        target: categoryContainer,
        withHeadline: false
      },
      sectionElements: [
        {section: editor.contentContainer, element: drawContent},
        {section: editor.topToolbar, element: editor.viewTriggerBar}
      ],
      initFunction: function () {
        var interactionStyleImage,
          activeSketch,
          activeTooltip;

        // Only show original icon, when the drawing POIs
        if (scope.type.toLowerCase() === 'point' && style.getImage()) {
          interactionStyleImage = style.getImage();
        } else {
          interactionStyleImage = new ol.style.Circle({
            fill: style.getFill(),
            stroke: style.getStroke(),
            radius: 5,
          });
        }
        source = new ol.source.Vector();
        olType = scope.type;
        if (olType === 'Freehand') {
          olType = 'LineString'
        }

        features = new ol.Collection();
        interaction = new ol.interaction.Draw({
          features: features,
          source: source,
          type: olType,
          freehand: scope.type === 'Freehand',
          style: [
            new ol.style.Style({
              stroke: new ol.style.Stroke({
                color: 'rgba(255,255,255,.5)',
                width: style.getStroke().getWidth() + 2
              }),
              image: interactionStyleImage
            }),
            new ol.style.Style({
              geometry: style.getGeometry(),
              fill: style.getFill(),
              stroke: style.getStroke()
            })
          ]
        });

        // @TODO doku
        //
        interaction.on('drawstart',
          function (event) {
            activeSketch = event.feature;
            activeSketch.set('styleId', styleId);

            if (objDrawView.enableInstantMeasureCheckbox && objDrawView.enableInstantMeasureCheckbox.checked) {
              activeTooltip = new TooltipPopUp({
                map: editor.mapsInterface.mapController.map,
                position: event.coordinate,
                horizontal: true
              });
            }
          }, objDrawView);

        // @TODO doku
        //
        editor.mapsInterface.mapController.map.on('pointermove',
          function (event) {
            if (objDrawView.enableInstantMeasureCheckbox && objDrawView.enableInstantMeasureCheckbox.checked && activeSketch) {
              if(activeTooltip && utils.measureGeometry(activeSketch.getGeometry(), true).rawValue && utils.measureGeometry(activeSketch.getGeometry(), true).rawValue === "0.00"){
                activeTooltip.close();
                activeTooltip = null;
              }
              else if(!activeTooltip && utils.measureGeometry(activeSketch.getGeometry(), true).rawValue && utils.measureGeometry(activeSketch.getGeometry(), true).rawValue !== "0.00"){
                activeTooltip = new TooltipPopUp({
                  map: editor.mapsInterface.mapController.map,
                  position: event.coordinate,
                  horizontal: true
                });
              }
              if(activeTooltip){
                activeTooltip.setPosition(event.coordinate);
                activeTooltip.setContent(utils.measureGeometry(activeSketch.getGeometry(), true).htmlValue);
              }
            }
          }, editor);

        // @TODO doku
        //
        interaction.on('drawend',
          function (event) {
            var i,
              vars,
              editorVars,
              name;

            // name the feature
            featureIdCount += 1;
            let drawType = scope.type.toLowerCase();
            name = scope.editor.mapsInterface.getLocstyleArray()[styleId].name.replace("&#40;", "(").replace("&#41;", ")");
            activeSketch.set('tooltip', (scope.editor.mapsInterface.getLocstyleArray()[styleId].tooltip || name) + ' (' + featureIdCount + ')');
            // add styleId
            activeSketch.set('styleId', styleId);
            // add measurements to the feature
            activeSketch.set('measuredLength', utils.measureGeometry(activeSketch.getGeometry(), true));
            if (drawType === 'polygon') {
              activeSketch.set('measuredArea', utils.measureGeometry(activeSketch.getGeometry()));
            }
            if (drawType === 'circle') {
              activeSketch.set('measuredRadius', utils.measureGeometry(activeSketch.getGeometry()));
            }
            // add editor-vars
            vars = editorStyle.vars;
            editorVars = [];
            for (i = 0; i < vars.length; i += 1) {
              editorVars[i] = {};
              editorVars[i].key = vars[i].key;
              editorVars[i].label = vars[i].value;
              editorVars[i].value = '';
            }
            activeSketch.set('editorVars', editorVars);
            activeSketch.set('projectId', editor.projectController.currentProject.id);
            // communicate new element with server
            editor.featureHandler.handleDrawnFeature(
              activeSketch,
              element,
              category,
              editor.projectController.currentProject,
              editor.projectController.projectLayer,
              source,
              drawType
            );
            scope.editor.mapsInterface.updateStarboard();
            // reset active-element variables
            activeSketch = null;
            if (activeTooltip) {
              activeTooltip.close();
              activeTooltip = null;
            }
          }, editor);

        if (editor.projectController.currentProject) {
          editor.mapsInterface.mapController.map.addInteraction(interaction);
        }
        return true;

      }, // end of "initFunction()"

      /**
       * Is called when the view is activated (i.e. the trigger is clicked)
       * @returns {boolean}
       */
      activateFunction: function () {
        if (editor.projectController.currentProject) {
          // deactivate mapHover
          editor.mapsInterface.mapController.mapHover.deactivate();
          // Reset feature-list
          features.clear();
          // Enable interaction
          interaction.setActive(true);
        }
        return true;
      },

      /**
       * Is called when the view is deactivated (i.e. the trigger of another view is clicked)
       * @returns {boolean}
       */
      deactivateFunction: function (paused) {
        if (editor.projectController.currentProject) {
          // only take away the interaction when the editor is closed and not paused
          if (!paused) {
            editor.mapsInterface.mapController.mapHover.activate();
            // finish drawings, if not already done
            if (scope.type.toLowerCase() !== 'point') {
              try {
                interaction.finishDrawing();
              } catch (ignore) {
                // 0_o
              }
            }
          }
        }
        // Remove from map
        interaction.setActive(false);
        return true;
      }
    }, drawView);

    return interactionView;
  }
}