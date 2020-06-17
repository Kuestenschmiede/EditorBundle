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
        })
        let mapController = props.mapController;
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
            control: control,
            range: 0,
            features: "[]",
            editorId: 0
        }
        this.features = new Collection();
        this.editorLayer = new Vector({source: new VectorSource({format: new GeoJSON()})});
    }

    open() {
        console.log("open");
        jQuery(this.props.mapController.editorContainer).removeClass("c4g-close").addClass("c4g-open");
        this.props.mapController.map.addLayer(this.editorLayer);
        this.setState({
            open: true
        });
        this.props.mapController.setOpenComponent(this);
    }
    close() {
        console.log("close");
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
                    for (let i in features) {
                        if (features.hasOwnProperty(i)) {
                            let jsonFeature = features[i];
                            if (jsonFeature.get("editorId") === feature.get("editorId")) {
                                source.removeFeature(feature);
                                if (jsonFeature.get('radius')) {
                                    jsonFeature.setGeometry(new Circle(jsonFeature.getGeometry().getCoordinates(), jsonFeature.get('radius')));
                                }
                                source.addFeature(jsonFeature);
                            }
                        }
                    }
                })
            }
        }
        catch(error) {
            console.log(error);
        }
        if (this.state.range) {
            let selection = window.getSelection();
            let range = selection.getRangeAt(0);
            range.setStart(range.startContainer, this.state.range);
            range.setEnd(range.startContainer, this.state.range);
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
                        return <button key={index} className={"c4g-editor-" + element + " " + (element === scope.state.currentMode ? "c4g-active" : "c4g-inactive")}
                                       onMouseUp={() => scope.setState({currentMode: element})}/>;
                    })}
                </div>
                <EditorView mode={this.state.currentMode} active={true} editorLayer={this.state.editorLayer} features={this.features} addFeature={this.addFeature} editorLayer={this.editorLayer} editorId={this.state.editorId} countEditorId={this.countEditorId} updateFeatures={this.updateFeatures} mapController={this.props.mapController} editor={this} lang={this.langConstants}/>
                <div className={"classclassclass"}>
                    <pre contentEditable={true} suppressContentEditableWarning={true} onInput={this.changeJSON}>{this.state.features}</pre>
                </div>
            </div>
        );
    }
}