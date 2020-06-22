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
import {Vector} from "ol/layer";
import {Vector as VectorSource} from "ol/source";
import {GeoJSON} from "ol/format";
import {Collection} from "ol";
import {Circle} from 'ol/geom'
import {Draw, Select} from "ol/interaction";
import {C4gStarboardStyle} from "./../../../../../MapsBundle/Resources/public/js/components/c4g-starboard-style.jsx";


export class EditorView extends Component {
    constructor(props) {
        super(props);
        const scope = this;
        this.state = {
            'freehand': false,
            'features': "[]",
            'activeElement': props.elements[0] ? props.elements[0].id : 0,
            'activeStyle': props.elements[0] ? props.elements[0].styleId : 0
        };
        this.interaction;
        this.changeJSON = this.changeJSON.bind(this);
    }
    render() {
        if (this.props.mode !== "select" && this.props.active) {
            if (this.interaction) { //only one drawinteraction at a time
                this.props.mapController.map.removeInteraction(this.interaction);
            }
            this.interaction = new Draw({
                // features: this.props.features,
                source: this.props.editorLayer.getSource(),
                type: this.props.mode,
                stopclick: false,
                freehand: this.state.freehand
            });
            this.interaction.on('drawend',
                (event) => {
                    event.feature.set('editorId', this.props.editorId);
                    event.feature.set('locstyle', this.state.activeStyle);
                    event.feature.set('elementId', this.state.activeElement);
                    let geojson;
                    if (this.props.mode === "Circle") { //turn Circle into valid GeoJSON
                        let geometry = event.feature.getGeometry().clone().transform("EPSG:3857", "EPSG:4326");
                        let center = geometry.getCenter();
                        let radius = event.feature.getGeometry().getRadius();
                        geojson = {
                            type: "Feature",
                            geometry: {
                                type: "Point",
                                coordinates: center
                            },
                            properties: {
                                editorId: this.props.editorId,
                                radius: radius
                            }
                        }
                    }
                    else {
                        geojson = new GeoJSON().writeFeatureObject(event.feature, {
                            dataProjection: "EPSG:4326",
                            featureProjection: "EPSG:3857"
                        });
                    }
                    this.props.addFeature(geojson)
                    this.props.countEditorId();
                }
            );
            this.props.mapController.map.addInteraction(this.interaction);
        }
        else {
            if (this.interaction) { //only one drawinteraction at a time
                this.props.mapController.map.removeInteraction(this.interaction);
            }
            this.interaction = new Select({
                layers: [this.props.editorLayer]
            });
            this.props.mapController.map.addInteraction(this.interaction);
        }
        let returnVal = null;
        let elements = this.props.elements.map((element) => {
            return (<button style={{height: "32px", width: "32px"}}
                            onMouseUp={() =>{this.setState({activeElement: element.id, activeStyle: element.styleId})}}>
                <C4gStarboardStyle styleData={this.props.styleData} styleId={element.styleId}/></button>)
        })
        if (this.props.active) {
            returnVal = (
                <div>
                    <p>{this.props.mode}</p>
                    <button className={"c4g-editor-LineString"} onMouseUp={() => {this.changeFreehand()}}></button>
                    <div>
                        {elements}
                    </div>
                </div>
            )
        }
        return returnVal;
    }
    componentDidUpate(prevProps) {
        // if (prevProps.mode !== this.props.mode) {
            console.log("update");
        // }
    }
    changeFreehand() {
        this.setState({
            freehand: !this.state.freehand
        })
    }
    changeJSON(event) {
        this.setState({features: event.target.value})
    }
    componentDidMount() {
        console.log("mount");
    }
    componentWillUnmount() {
        console.log("unmount");
    }
}