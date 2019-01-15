import {MapsInterface} from "./../js/c4g-editor-mapsinterface";
import {Editor} from "./../js/c4g-project-editor";
import {utils} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-utils";
import {C4gLayer} from "./../../../../MapsBundle/Resources/public/js/c4g-layer";

jest.mock("./../js/c4g-project-editor");
jest.mock("./../../../../MapsBundle/Resources/public/js/c4g-maps-constant");
jest.mock("./../../../../MapsBundle/Resources/public/js/c4g-layer");

let mapsInterface;

beforeEach(() => {
  // create mapsInterface with editor mock
  const editor = new Editor({});
  const proxy = {};
  const mapController = {};
  mapsInterface = new MapsInterface(editor, proxy, mapController);
});

it('We can check if the mapsinterface correctly modifies the proxy layerIds', () => {
  // set some layerIds
  const res = ["1", "2", "3", "4"];
  mapsInterface.proxy.layerIds = ["1", "2", "3"];
  mapsInterface.addToLayerIds("4");
  expect(mapsInterface.proxy.layerIds).toEqual(res);
});

it('We can check if the mapsinterface correctly adds a layer to the layer array', () => {
  let layer = new C4gLayer();
  layer.id = "1";
  mapsInterface.proxy.layerController = {};
  mapsInterface.proxy.layerController.arrLayers = {};
  mapsInterface.addToLayerArray(layer);
  expect(Object.keys(mapsInterface.proxy.layerController.arrLayers).length).toEqual(1);
  expect(mapsInterface.proxy.layerController.arrLayers[layer.id]).toEqual(layer);
});