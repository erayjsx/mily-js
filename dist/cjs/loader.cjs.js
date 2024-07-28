'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5b348526.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["header-component_2.cjs",[[1,"header-component",{"logo":[1],"menuItems":[1,"menu-items"],"rightSectionItems":[1,"right-section-items"],"menuOpen":[32]}],[1,"header2-component",{"logo":[1],"menuItems":[1,"menu-items"],"rightSectionItems":[1,"right-section-items"],"menuOpen":[32]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map