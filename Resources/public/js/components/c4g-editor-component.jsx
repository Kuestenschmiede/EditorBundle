/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 *
 */
import React, { Component } from "react";
import {EditorView} from "./c4g-editor-view.jsx";
import {getEditorLanguage} from "./../c4g-editor-i18n";
import {Titlebar} from "./../../../../../MapsBundle/Resources/public/js/components/c4g-titlebar.jsx"
import {Control} from "ol/control";
import {Group, Vector} from "ol/layer";
import {GeoJSON} from "ol/format";
import {Draw} from "ol/interaction";
import {Vector as VectorSource} from "ol/source";
import {Collection} from "ol";
import {Circle} from "ol/geom";
import {utils} from "./../../../../../MapsBundle/Resources/public/js/c4g-maps-utils";
import {Fill, Style, Text} from "ol/style";

export class EditorComponent extends Component {
    constructor(props) {
        super(props);

        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.countEditorId = this.countEditorId.bind(this);
        this.addFeature = this.addFeature.bind(this);
        this.changeJSON = this.changeJSON.bind(this);

        const scope = this;
        let element = document.createElement('div');
        let button = document.createElement('button');
        button.title = "Test";
        element.className = "c4g-editor-control ol-unselectable ol-control c4g-close";
        element.appendChild(button);
        jQuery(element).on('click', (event) => {
            let hidden = scope.props.mapController.editorContainer.className.includes('c4g-close');
            if (scope.state.open) {
                if (!hidden) {
                    scope.close();
                }
                else {
                    jQuery(scope.props.mapController.editorContainer).removeClass('c4g-close').addClass('c4g-open');
                }
            }
            else {
                scope.open();
            }
        });
        this.config = {};
        this.arrLocstyles = [];
        let mapController = props.mapController;
        this.getConfiguration(mapController.data.feEditorProfile);
        this.langConstants = getEditorLanguage(mapController.data);
        let control = new Control({element: element, target: props.target});
        control.isOpen = () => {
            return false;
        }
        if (!mapController.mapsControls.controls.editor) {
            mapController.mapsControls.controls.editor = control;
            mapController.map.addControl(control);
        }
        this.modes = ["select", "Point", "LineString", "Polygon", "Circle"];
        this.state = {
            open: props.open || false,
            currentMode: "select",
            styleData: {},
            control: control,
            range: 0,
            features: "[]",
            editorId: 0
        };
        this.styleFunction = function(feature, resolution) {
            let size = false;
            let returnStyle = [];
            if (feature && feature.get && feature.get('features')) {
                let features = feature.get('features');
                size = features.length;
                feature = features[0];
            }
            if (feature && feature.getStyle()) {
                returnStyle = feature.getStyle();
            }
            else if (feature && feature.get && feature.get('locstyle')) {
                let locstyle = feature.get('locstyle');
                if (scope.props.mapController.proxy.locationStyleController.arrLocStyles && scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle] && scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style) {
                    let style = scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style;
                    if (typeof style === "function") {
                        returnStyle = style(feature, resolution, false);
                    }
                    else {
                        returnStyle = scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style;
                    }
                }
            }
            return returnStyle
        };
        this.features = new Collection();
        this.editorLayer = new Vector({
            source: new VectorSource({format: new GeoJSON()}),
            style: this.styleFunction
        });
    }

    open() {
        jQuery(this.props.mapController.editorContainer).removeClass("c4g-close").addClass("c4g-open");
        this.props.mapController.map.addLayer(this.editorLayer);
        this.setState({
            open: true
        });
        this.props.mapController.setOpenComponent(this);
    }
    close() {
        jQuery(this.props.mapController.editorContainer).removeClass("c4g-open").addClass("c4g-close");
        this.props.mapController.map.removeLayer(this.editorLayer);
        this.setState({
            open: false
        });
    }
    countEditorId () {
        let newCount = this.state.editorId + 1;
        this.setState({
            editorId: newCount
        })
    }
    getConfiguration (id) {
        let url = "con4gis/editorService/" + id;
        fetch(url).then(
            (response) => {
                response.json().then(
                    (json) => {
                        for (let i in json.drawStyles) {
                            if (json.drawStyles.hasOwnProperty(i)) {
                                this.config[i] = [];
                                let drawStyle = json.drawStyles[i];
                                for (let j in drawStyle.categories) {
                                    if (drawStyle.categories.hasOwnProperty(j)) {
                                        let category = drawStyle.categories[j];
                                        for (let k in category.elements) {
                                            if (category.elements.hasOwnProperty(k)) {
                                                let element = category.elements[k];
                                                this.config[i].push(element);
                                                let checkLocstyle = this.arrLocstyles.findIndex((locstyle) => locstyle === element.styleId);
                                                if (checkLocstyle === -1 && element.styleId) {
                                                    this.arrLocstyles.push(element.styleId);
                                                }
                                            }
                                        }
                                    }
                                }

                            }
                        }
                        this.props.mapController.proxy.locationStyleController.loadLocationStyles(this.arrLocstyles, {
                            "done": (styleData) => {
                                this.setState({
                                    styleData: styleData
                                })
                            }
                        })
                })
            })
    }
    reRender(){
        try{
            if (this.state.features.length > 2) {
                let strGeojson = '{"type": "FeatureCollection", "features": ' + this.state.features + '}';
                let geojson = JSON.parse(strGeojson);
                let features = new GeoJSON({
                    featureProjection: "EPSG:3857"
                }).readFeatures(geojson);
                let source = this.editorLayer.getSource();
                source.forEachFeature((feature) => {

                    source.removeFeature(feature);

                });
                for (let i in features) {
                    if (features.hasOwnProperty(i)) {
                        let jsonFeature = features[i];
                        if (jsonFeature.get('radius')) {
                            jsonFeature.setGeometry(new Circle(jsonFeature.getGeometry().getCoordinates(), jsonFeature.get('radius')));
                        }
                        source.addFeature(jsonFeature);
                    }
                }
            }
        }
        catch(error) {
            console.log(error);
        }
        if (this.state.range) {
            let selection = window.getSelection();
            let range = selection.getRangeAt(0);
            let startContainer = range.startContainer.childNodes[0] || range.startContainer;
            range.setStart(startContainer, this.state.range);
            range.setEnd(startContainer, this.state.range);
            selection.removeRange(range);
            selection.addRange(range);
        }
    }
    changeJSON(event) {
        let range = window.getSelection().getRangeAt(0).startOffset;
        this.setState({features: event.target.innerText, range: range}, () => {
            this.reRender();
        })
    }
    addFeature (feature) {
        let strReplace = "[" + JSON.stringify(feature, null, 2);
        strReplace += this.state.features.length > 2 ? "," : ""; //if features already filled, add "," to string
        let features = this.state.features.replace("[", strReplace);
        this.setState({
            features: features
        });
    }
    render() {
        const scope = this;
        return (
            <div className={"c4g-editor-wrapper"}>
                <Titlebar wrapperClass={"c4g-editor-header"} headerClass={"c4g-editor-headline"} hideContainer={".c4g-editor-container"}
                          header={this.langConstants.EDITOR} closeBtnClass={"c4g-titlebar-close"} closeBtnCb={this.close} closeBtnTitle={this.langConstants.CLOSE}>
                </Titlebar>
                <div className={"c4g-editor-mode-switcher"}>
                    {this.modes.map(function(element, index) {
                        return <button key={index} className={"c4g-editor-" + element + "  " + (element === scope.state.currentMode ? "c4g-active" : "c4g-inactive")}
                                       onMouseUp={() => scope.setState({currentMode: element})}/>;
                    })}
                </div>
                <EditorView className={"c4g-editor-view"} styleFunction={this.styleFunction} mode={this.state.currentMode} styleData={this.state.styleData} elements={this.config[this.state.currentMode] ? this.config[this.state.currentMode]: []} active={true} editorLayer={this.state.editorLayer} features={this.features} addFeature={this.addFeature} editorLayer={this.editorLayer} editorId={this.state.editorId} countEditorId={this.countEditorId} updateFeatures={this.updateFeatures} mapController={this.props.mapController} editor={this} lang={this.langConstants}/>
                <div className={"classclassclass"} style={{overflow: "none"}}>
                    <pre contentEditable={true} style={{overflowY: "scroll", overflowX: "none", height: "400px"}} suppressContentEditableWarning={true} onInput={this.changeJSON}>{this.state.features}</pre>
                </div>
            </div>
        );
    }
}