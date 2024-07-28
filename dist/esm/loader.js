import { b as bootstrapLazy } from './index-8b939548.js';
export { s as setNonce } from './index-8b939548.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["header-component_2",[[1,"header-component",{"logo":[1],"menuItems":[1,"menu-items"],"rightSectionItems":[1,"right-section-items"],"menuOpen":[32]}],[1,"header2-component",{"logo":[1],"menuItems":[1,"menu-items"],"rightSectionItems":[1,"right-section-items"],"menuOpen":[32]}]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map