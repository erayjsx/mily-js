import type { Components, JSX } from "../types/components";

interface Header2Component extends Components.Header2Component, HTMLElement {}
export const Header2Component: {
    prototype: Header2Component;
    new (): Header2Component;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
