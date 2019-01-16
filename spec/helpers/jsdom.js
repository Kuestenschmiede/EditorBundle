import {JSDOM} from 'jsdom';

const dom = new JSDOM('<html><body></body></html>', {pretendToBeVisual:true});
global.document = dom.window.document;
global.window = dom.window;
global.navigator = dom.window.navigator;
global.requestAnimationFrame = dom.window.requestAnimationFrame;