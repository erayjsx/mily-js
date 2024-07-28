'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5b348526.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Browser v4.19.2 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('mily.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["header-component_2.cjs",[[1,"header-component",{"logo":[1],"menuItems":[1,"menu-items"],"rightSectionItems":[1,"right-section-items"],"menuOpen":[32]}],[1,"header2-component",{"logo":[1],"menuItems":[1,"menu-items"],"rightSectionItems":[1,"right-section-items"],"menuOpen":[32]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=mily.cjs.js.map