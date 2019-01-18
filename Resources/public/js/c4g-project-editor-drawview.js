import {cssConstants} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-constant";
import {EditorDrawStyle} from "./c4g-project-editor-drawstyle";
import {langConstants} from "./c4g-editor-i18n";
import {ElementCategory} from "./c4g-editor-element-category";
import {ElementType} from "./c4g-editor-element-type";

export class EditorDrawview {

  constructor(type, categories, editor) {
    this.type = type;
    this.editor = editor;
    this.categories = this.setupCategories(categories);
  }

  setupCategories(jsonCategories) {
    let categories = [];
    for (let i = 0; i < jsonCategories.length; i++) {
      let categoryElementTypes = [];
      for (let j = 0; j < jsonCategories[i].elements.length; j++) {
        categoryElementTypes.push(this.createTypeObject(jsonCategories[i].elements[j]));
      }
      categories.push(this.createCategoryObject(jsonCategories[i], categoryElementTypes));
    }
    return categories;
  }

  createTypeObject(jsonElement) {
    return new ElementType(
      jsonElement.id,
      jsonElement.name,
      jsonElement.categoryId,
      jsonElement.styleId
    );
  }

  createCategoryObject(jsonCategory, types) {
    return new ElementCategory(
      jsonCategory.id,
      jsonCategory.name,
      types
    );
  }

  /**
   * Initializes the container elements for the draw styles.
   * @returns {*}
   */
  init() {
    let TRIGGER_DRAW,
      drawContent,
      optionsDiv,
      enableInstantMeasureCheckbox,
      enableInstantMeasureCheckboxLabel,
      addDrawStyle,
      scope = this;

    let editor = this.editor;
    let locStyles = this.editor.mapsInterface.getLocstyleArray();

    TRIGGER_DRAW = 'EDITOR_VIEW_TRIGGER_DRAW_' + this.type.toUpperCase();

    drawContent = document.createElement('div');
    drawContent.className = cssConstants['EDITOR_DRAW_CONTENT_' + this.type.toUpperCase()];

    let inputFilter = this.createProjectFilter();
    drawContent.appendChild(inputFilter);
    this.drawContent = drawContent;

    if (this.type.toLowerCase() !== 'point') {
      optionsDiv = document.createElement('div');
      optionsDiv.className = cssConstants.EDITOR_DRAW_OPTIONS;
      drawContent.appendChild(optionsDiv);

      enableInstantMeasureCheckbox = document.createElement('input');
      enableInstantMeasureCheckbox.type = 'checkbox';
      enableInstantMeasureCheckbox.id = 'enableInstantMeasureFor' + options.type;
      enableInstantMeasureCheckbox.checked = true; //by default
      optionsDiv.appendChild(enableInstantMeasureCheckbox);
      this.enableInstantMeasureCheckbox = enableInstantMeasureCheckbox;

      enableInstantMeasureCheckboxLabel = document.createElement('label');
      enableInstantMeasureCheckboxLabel.setAttribute('for', 'enableInstantMeasureFor' + options.type);
      enableInstantMeasureCheckboxLabel.innerHTML = langConstants.EDITOR_ENABLE_INSTANT_MEASURE;
      optionsDiv.appendChild(enableInstantMeasureCheckboxLabel);

      this.enableInstantMeasureCheckboxLabel = enableInstantMeasureCheckboxLabel;
      optionsDiv.appendChild(document.createElement('br'));
    }

    // add the categories
    for (let i = 0; i < this.categories.length; i++) {
      let category = this.categories[i];
      let divObj = this.addCategory(category);
      this.drawContent.appendChild(divObj.categoryDiv);
      this.addElementsForCategory(category.elementTypes, category, divObj.elements);
      if (!this.editor.projectController.currentProject) {
        this.drawContent.style.display = "none";
      }
    }

    this.drawView = editor.addView({
      name: 'draw:' + this.type.toLowerCase(),
      triggerConfig: {
        tipLabel: langConstants[TRIGGER_DRAW],
        className: cssConstants[TRIGGER_DRAW],
        withHeadline: true
      },
      sectionElements: [
        {section: editor.contentContainer, element: drawContent},
        {section: editor.topToolbar, element: editor.viewTriggerBar}
      ],
      initFunction: function () {

      },
      activateFunction: function () {
        if (editor.currentProject) {
          scope.drawContent.style.display = "block";
        }
        return true;
      },
      deactivateFunction: function () {
        return true;
      }
    });

    return this.drawView;
  }

  /**
   * Adds a category to the editor drawContent-section. It is bound to a project and is displayed when the project
   * is selected. A category contains different elements, which can be dragged onto the map.
   * @param category
   * @return Object div containing the category
   */
  addCategory(category) {
    var categoryDiv,
      catHeadline,
      elementDiv,
      toggleView,
      headlineDiv,
      elementCount;

    categoryDiv = document.createElement('div');
    elementDiv = document.createElement('div');
    headlineDiv = document.createElement('div');
    headlineDiv.className = "c4g-category-headline";
    headlineDiv.id = "category-headline-" + category.id;
    elementDiv.id = "category-" + category.id;
    toggleView = document.createElement('button');
    toggleView.className = "c4g-toggle-category";

    if (category.visible === undefined) {
      toggleView.className += " c4g-toggle-category-closed";
      elementDiv.style.display = "none";
    } else {
      if (category.visible) {
        toggleView.className += " c4g-toggle-category-open";
      } else {
        toggleView.className += " c4g-toggle-category-closed";
        elementDiv.style.display = "none";
      }
    }

    // click listener for toggling the categories
    $(toggleView).click(function(event) {
      if ($(this).hasClass("c4g-toggle-category-open")) {
        $(this).removeClass("c4g-toggle-category-open").addClass("c4g-toggle-category-closed");
        elementDiv.style.display = "none";
        category.visible = false;
      } else {
        $(this).removeClass("c4g-toggle-category-closed").addClass("c4g-toggle-category-open");
        elementDiv.style.display = "block";
        category.visible = true;
      }
    });

    //closed categories by default
    //ToDo insert caching mechanism
    //$(toggleView).removeClass("c4g-toggle-category-opened").addClass("c4g-toggle-category-open");
    //elementDiv.style.display = "block";
    category.visible = true;

    // categoryDiv.className = "project-" + project.projectId;
    catHeadline = document.createElement('div');
    elementCount = 0;
    if (category.elementTypes) {
        elementCount = category.elementTypes.length;
    }
    catHeadline.innerHTML = category.name + " (" + elementCount + ")";
    catHeadline.className = 'catHeadline';
    headlineDiv.appendChild(catHeadline);
    headlineDiv.appendChild(toggleView);
    categoryDiv.appendChild(headlineDiv);
    categoryDiv.appendChild(elementDiv);
    // this.plugin.categories[category.id] = category;
    return {categoryDiv: categoryDiv, elements: elementDiv};
  }

  /**
   * Adds a selection of elements to a category. For each element, a trigger label is created and drawn under the
   * corresponding category.
   * @param elements
   * @param category
   * @param catContainer  HTML container for the category
   */
  addElementsForCategory(elements, category, catContainer) {
    var element,
      missingStyles = [],
      self = this,
      missingElements = [],
      styleIds = [];

    var addElement = function(element) {
      element.drawInteraction = self.addDrawStyle(element.styleId, element, category, catContainer);
    };

    console.log("add Elements");

    for (var key in elements) {
      if (elements.hasOwnProperty(key)) {
        element = elements[key];
        styleIds.push(element.styleId);
        if (!self.editor.mapsInterface.getLocstyleArray()[element.styleId]) {
          missingStyles.push(element.styleId);
          missingElements.push(element);
        } else {
          addElement(element);
        }
      }
    }

    if (missingStyles.length > 0) {
      self.editor.proxy.locationStyleController.loadLocationStyles(missingStyles, {
        always: function() {
          for (var i = 0; i < missingElements.length; i++) {
              if (self.editor.proxy.locationStyleController.arrLocStyles[missingElements[i].styleId]) {
                addElement(missingElements[i]);
              }
          }

          self.editor.update();
          // self.plugin.elementsLoaded = true;
          // TODO durch richtigen hook ersetzen, falls nötig
          // if (c4g.maps.hook !== undefined && typeof c4g.maps.hook.elements_Loaded === 'object') {
          //     c4g.maps.utils.callHookFunctions(c4g.maps.hook.elements_Loaded);
          // }
          return false;
          }});

    } else {
      // TODO durch richtigen hook ersetzen, falls nötig
      // self.plugin.elementsLoaded = true;
      // if (c4g.maps.hook !== undefined && typeof c4g.maps.hook.elements_Loaded === 'object') {
      //   c4g.maps.utils.callHookFunctions(c4g.maps.hook.elements_Loaded);
      // }
    }
    return true;
  }
  createProjectFilter(){
    const scope = this;
    let filterDiv = document.createElement("div");
    let filterInput = document.createElement("input");

    filterDiv.appendChild(filterInput);
    $(filterInput).keyup(function(){
      function filterProject(){
        let matchedCategoryIds = [];
        let matchedElementIds = [];
        for(let drawstyleType in scope.editor.drawStyles){
          if(scope.editor.drawStyles.hasOwnProperty(drawstyleType)){
            const drawstyle = scope.editor.drawStyles[drawstyleType];
            for(let categoryId in drawstyle.categories){
              const category = drawstyle.categories[categoryId];
              if(category.name.toUpperCase().indexOf(filterInput.value.toUpperCase()) >= 0){ //Category checked. Show all elements
                matchedCategoryIds.push(category.id);
                for(let elementId in category.elementTypes){
                  matchedElementIds.push(category.elementTypes[elementId].id);
                }
              }
              else{
                for(let elementId in category.elementTypes){
                  const element = category.elementTypes[elementId];
                  if(element.name.toUpperCase().indexOf(filterInput.value.toUpperCase()) >= 0){
                    matchedElementIds.push(element.id);
                    matchedCategoryIds.push(category.id);
                  }

                }
              }
            }
          }
        }
        const allCategories = document.getElementsByClassName('c4g-category-headline');
        for(let category in allCategories){
          if(allCategories.hasOwnProperty(category)){
            allCategories[category].style.display = 'none';
          }
        }
        const allElements = document.getElementsByClassName('c4g-draw-trigger');
        for(let element in allElements){
          if(allElements.hasOwnProperty(element)){
            allElements[element].style.display = 'none';
          }
        }
        for(let category in matchedCategoryIds){
          let div = document.getElementById('category-headline-' + matchedCategoryIds[category]);
          div.style.display = ""
        }
        for(let element in matchedElementIds){
          let div = document.getElementById('element-' + matchedElementIds[element]);
          div.style.display = ""
        }

      }
      setTimeout( function(){
        // two or zero letters are required
        if (filterInput.value.length !== 1) {
          filterProject();
        }
      }, 350);
    });
    return filterDiv;
  }

  /**
   * Shortcut call to create the EditorDrawStyle instances.
   * @param styleId
   * @param element
   * @param category
   * @param catContainer
   * @returns {*}
   */
  addDrawStyle(styleId, element, category, catContainer) {
    let interaction = new EditorDrawStyle(this.editor, this.type);
    return interaction.createInteractionView(styleId, element, category, catContainer, this);
  }
}