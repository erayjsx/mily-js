import { p as proxyCustomElement, H, h } from './p-71b6f932.js';

const headerComponentCss = ".drawer__overlay,.drawer__wrapper{position:fixed;top:0;right:0;bottom:0}.drawer{display:none}.drawer__overlay{left:0;width:100%;z-index:200;opacity:0;transition:opacity .3s;will-change:opacity;background-color:#000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.drawer__header{padding:1.5rem;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #ddd}.drawer__close{margin:0 0 0 1rem;padding:0;border:none;background-color:transparent;cursor:pointer;background-image:url(\"data:image/svg+xml,%0A%3Csvg width='15px' height='16px' viewBox='0 0 15 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='2.-Menu' transform='translate(-15.000000, -13.000000)' stroke='%23000000'%3E%3Cg id='Group' transform='translate(15.000000, 13.521000)'%3E%3Cpath d='M0,0.479000129 L15,14.2971819' id='Path-3'%3E%3C/path%3E%3Cpath d='M0,14.7761821 L15,-1.24344979e-14' id='Path-3'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");width:18px;height:18px;flex-shrink:0}.drawer__wrapper{height:100%;width:100%;z-index:9999;overflow:auto;transition:transform .3s;will-change:transform;background-color:#fff;display:flex;flex-direction:column;-webkit-transform:translate3d(103%,0,0);transform:translate3d(103%,0,0);-webkit-overflow-scrolling:touch;box-shadow:0 2px 6px #777}.drawer__content{position:relative;overflow-x:hidden;overflow-y:auto;height:100%;flex-grow:1;padding:1.5rem}.drawer--left .drawer__wrapper{left:0;right:auto;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.drawer.is-active{display:block}.drawer.is-visible .drawer__wrapper{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.drawer.is-visible .drawer__overlay{opacity:.5}:host{display:block}a{color:black}header{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;background:#fff;border-bottom:1px solid #e4e4e4;font-family:sans-serif}.logo{font-size:1.5em}.logo img{object-fit:contain}nav{display:flex;gap:20px}nav a{text-decoration:none}.right-section{display:flex;gap:20px}.menu-icon{display:none;cursor:pointer}@media (max-width: 768px){nav{display:none;flex-direction:column;gap:10px;position:absolute;top:50px;left:0;right:0;background:#333;padding:10px 20px}nav.open{display:flex}.menu-icon{display:block}}";
const HeaderComponentStyle0 = headerComponentCss;

const HeaderComponent$1 = /*@__PURE__*/ proxyCustomElement(class HeaderComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.parsedMenuItems = [];
        this.parsedRightSectionItems = [];
        this.logo = 'Logo';
        this.menuItems = undefined;
        this.rightSectionItems = undefined;
        this.menuOpen = false;
    }
    componentWillLoad() {
        if (this.menuItems) {
            this.parsedMenuItems = JSON.parse(this.menuItems);
        }
        if (this.rightSectionItems) {
            this.parsedRightSectionItems = JSON.parse(this.rightSectionItems);
        }
    }
    toggleMenu() {
        this.menuOpen = !this.menuOpen;
        if (this.menuOpen) {
            document.getElementById('drawer').classList.add('is-active');
            document.getElementById('drawer').classList.add('is-visible');
        }
        else {
            document.getElementById('drawer').classList.remove('is-visible');
            setTimeout(() => {
                document.getElementById('drawer').classList.remove('is-active');
            }, 350);
        }
    }
    closeMenu() {
        this.menuOpen = false;
        document.getElementById('drawer').classList.remove('is-visible');
        setTimeout(() => {
            document.getElementById('drawer').classList.remove('is-active');
        }, 350);
    }
    render() {
        return (h("header", { key: 'f98f04d6a333cda8230bb614a4fe2ef50016d5a5' }, h("div", { key: '4bc9e3be1acfa2ca2d8fa74a309d19208b84e211', class: "logo" }, h("img", { key: '5ba9b99afe86e7627d841e751591ca9a9e67c7a9', src: this.logo, height: 40, width: 160 })), h("nav", { key: '3a7dce32689e8ebc3f412bd3e6291de0d958a406' }, this.parsedMenuItems.map(item => (h("a", { href: item.link }, item.name)))), h("div", { key: '82ccba1381e1a48da6a0429b23197526e2f912d9', class: "right-section" }, this.parsedRightSectionItems.map(item => (h("a", { href: item.link }, item.name))), h("div", { key: '080938bf51f041ee98df25bff4d54977edcf323d', class: "menu-icon", onClick: () => this.toggleMenu() }, "\u2630")), h("section", { key: '6ca735606b26f86b0b24409b6163a252dde00ef1', class: "drawer drawer--left", id: "drawer", "data-drawer-target": true }, h("div", { key: '0287fde233ada102778c3355ac4fc1b92b3ee265', class: "drawer__overlay", "data-drawer-close": true, tabindex: "-1", onClick: () => this.closeMenu() }), h("div", { key: '5cf3b3443786929467db9c0612aec93e8e538064', class: "drawer__wrapper" }, h("div", { key: '7ababac1ba3b27ebaa72c5f5bd8aa42caf3ee2ee', class: "drawer__header" }, h("button", { key: '2d7036052add751b9f991899fe6498eb258c7c56', class: "close-button", onClick: () => this.closeMenu() }, "\u2716")), h("div", { key: '18ec8cd611cba713b37ba18048c4236b99e114ed', class: "drawer__content" }, this.parsedMenuItems.map(item => (h("a", { href: item.link, onClick: () => this.closeMenu() }, item.name))))))));
    }
    static get style() { return HeaderComponentStyle0; }
}, [1, "header-component", {
        "logo": [1],
        "menuItems": [1, "menu-items"],
        "rightSectionItems": [1, "right-section-items"],
        "menuOpen": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["header-component"];
    components.forEach(tagName => { switch (tagName) {
        case "header-component":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, HeaderComponent$1);
            }
            break;
    } });
}
defineCustomElement$1();

const HeaderComponent = HeaderComponent$1;
const defineCustomElement = defineCustomElement$1;

export { HeaderComponent, defineCustomElement };

//# sourceMappingURL=header-component.js.map