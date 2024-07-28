import { p as promiseResolve, b as bootstrapLazy } from './index-8b939548.js';
export { s as setNonce } from './index-8b939548.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.19.2 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["header-component_2",[[1,"header-component",{"logo":[1],"menuItems":[1,"menu-items"],"rightSectionItems":[1,"right-section-items"],"menuOpen":[32]}],[1,"header2-component",{"logo":[1],"menuItems":[1,"menu-items"],"rightSectionItems":[1,"right-section-items"],"menuOpen":[32]}]]]], options);
});

//# sourceMappingURL=mily.js.map