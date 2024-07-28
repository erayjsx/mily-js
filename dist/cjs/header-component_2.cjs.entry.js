'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5b348526.js');

const headerComponentCss = ".drawer__overlay,.drawer__wrapper{position:fixed;top:0;right:0;bottom:0}.drawer{display:none}.drawer__overlay{left:0;width:100%;z-index:200;opacity:0;transition:opacity .3s;will-change:opacity;background-color:#000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.drawer__header{padding:1.5rem;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #ddd}.drawer__close{margin:0 0 0 1rem;padding:0;border:none;background-color:transparent;cursor:pointer;background-image:url(\"data:image/svg+xml,%0A%3Csvg width='15px' height='16px' viewBox='0 0 15 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='2.-Menu' transform='translate(-15.000000, -13.000000)' stroke='%23000000'%3E%3Cg id='Group' transform='translate(15.000000, 13.521000)'%3E%3Cpath d='M0,0.479000129 L15,14.2971819' id='Path-3'%3E%3C/path%3E%3Cpath d='M0,14.7761821 L15,-1.24344979e-14' id='Path-3'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");width:18px;height:18px;flex-shrink:0}.drawer__wrapper{height:100%;width:100%;z-index:9999;overflow:auto;transition:transform .3s;will-change:transform;background-color:#fff;display:flex;flex-direction:column;-webkit-transform:translate3d(103%,0,0);transform:translate3d(103%,0,0);-webkit-overflow-scrolling:touch;box-shadow:0 2px 6px #777}.drawer__content{position:relative;overflow-x:hidden;overflow-y:auto;height:100%;flex-grow:1;padding:1.5rem}.drawer--left .drawer__wrapper{left:0;right:auto;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.drawer.is-active{display:block}.drawer.is-visible .drawer__wrapper{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.drawer.is-visible .drawer__overlay{opacity:.5}:host{display:block}a{color:black}header{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;background:#fff;border-bottom:1px solid #e4e4e4;font-family:sans-serif}.logo{font-size:1.5em}.logo img{object-fit:contain}nav{display:flex;gap:20px}nav a{text-decoration:none}.right-section{display:flex;gap:20px}.menu-icon{display:none;cursor:pointer}@media (max-width: 768px){nav{display:none;flex-direction:column;gap:10px;position:absolute;top:50px;left:0;right:0;background:#333;padding:10px 20px}nav.open{display:flex}.menu-icon{display:block}}";
const HeaderComponentStyle0 = headerComponentCss;

const HeaderComponent$1 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("header", { key: 'f98f04d6a333cda8230bb614a4fe2ef50016d5a5' }, index.h("div", { key: '4bc9e3be1acfa2ca2d8fa74a309d19208b84e211', class: "logo" }, index.h("img", { key: '5ba9b99afe86e7627d841e751591ca9a9e67c7a9', src: this.logo, height: 40, width: 160 })), index.h("nav", { key: '3a7dce32689e8ebc3f412bd3e6291de0d958a406' }, this.parsedMenuItems.map(item => (index.h("a", { href: item.link }, item.name)))), index.h("div", { key: '82ccba1381e1a48da6a0429b23197526e2f912d9', class: "right-section" }, this.parsedRightSectionItems.map(item => (index.h("a", { href: item.link }, item.name))), index.h("div", { key: '080938bf51f041ee98df25bff4d54977edcf323d', class: "menu-icon", onClick: () => this.toggleMenu() }, "\u2630")), index.h("section", { key: '6ca735606b26f86b0b24409b6163a252dde00ef1', class: "drawer drawer--left", id: "drawer", "data-drawer-target": true }, index.h("div", { key: '0287fde233ada102778c3355ac4fc1b92b3ee265', class: "drawer__overlay", "data-drawer-close": true, tabindex: "-1", onClick: () => this.closeMenu() }), index.h("div", { key: '5cf3b3443786929467db9c0612aec93e8e538064', class: "drawer__wrapper" }, index.h("div", { key: '7ababac1ba3b27ebaa72c5f5bd8aa42caf3ee2ee', class: "drawer__header" }, index.h("button", { key: '2d7036052add751b9f991899fe6498eb258c7c56', class: "close-button", onClick: () => this.closeMenu() }, "\u2716")), index.h("div", { key: '18ec8cd611cba713b37ba18048c4236b99e114ed', class: "drawer__content" }, this.parsedMenuItems.map(item => (index.h("a", { href: item.link, onClick: () => this.closeMenu() }, item.name))))))));
    }
};
HeaderComponent$1.style = HeaderComponentStyle0;

const header2ComponentCss = ".drawer__overlay,.drawer__wrapper{position:fixed;top:0;right:0;bottom:0}.drawer{display:none}.drawer__overlay{left:0;width:100%;z-index:200;opacity:0;transition:opacity .3s;will-change:opacity;background-color:#000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.drawer__header{padding:1.5rem;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #ddd}.drawer__close{margin:0 0 0 1rem;padding:0;border:none;background-color:transparent;cursor:pointer;background-image:url(\"data:image/svg+xml,%0A%3Csvg width='15px' height='16px' viewBox='0 0 15 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='2.-Menu' transform='translate(-15.000000, -13.000000)' stroke='%23000000'%3E%3Cg id='Group' transform='translate(15.000000, 13.521000)'%3E%3Cpath d='M0,0.479000129 L15,14.2971819' id='Path-3'%3E%3C/path%3E%3Cpath d='M0,14.7761821 L15,-1.24344979e-14' id='Path-3'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");width:18px;height:18px;flex-shrink:0}.drawer__wrapper{height:100%;width:100%;z-index:9999;overflow:auto;transition:transform .3s;will-change:transform;background-color:#fff;display:flex;flex-direction:column;-webkit-transform:translate3d(103%,0,0);transform:translate3d(103%,0,0);-webkit-overflow-scrolling:touch;box-shadow:0 2px 6px #777}.drawer__content{position:relative;overflow-x:hidden;overflow-y:auto;height:100%;flex-grow:1;padding:1.5rem}.drawer--left .drawer__wrapper{left:0;right:auto;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.drawer.is-active{display:block}.drawer.is-visible .drawer__wrapper{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.drawer.is-visible .drawer__overlay{opacity:.5}:host{display:block}header{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;background:#fff;border-bottom:1px solid #e4e4e4;font-family:sans-serif}.logo{font-size:1.5em}nav{display:flex;gap:20px}nav a{color:red;text-decoration:none}.right-section{display:flex;gap:20px}.menu-icon{display:none;cursor:pointer}@media (max-width: 768px){nav{display:none;flex-direction:column;gap:10px;position:absolute;top:50px;left:0;right:0;background:#333;padding:10px 20px}nav.open{display:flex}.menu-icon{display:block}}";
const Header2ComponentStyle0 = header2ComponentCss;

const HeaderComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("header", { key: '8dc1dfdc34227a41e3531464f3a899fb0c468afc' }, index.h("nav", { key: '73661ea87c69f5337db4017faa8b6253d7e050c9' }, this.parsedMenuItems.map(item => (index.h("a", { href: item.link }, item.name)))), index.h("div", { key: '968b917102d7918ede80f009e6682717c280c6e2', class: "logo" }, this.logo), index.h("div", { key: '8cce39f6bb9ff99cc9cd7514a1d968eca69067da', class: "right-section" }, this.parsedRightSectionItems.map(item => (index.h("a", { href: item.link }, item.name))), index.h("div", { key: '065272c292676e9f3be20ed4a57b9031ea97de7e', class: "menu-icon", onClick: () => this.toggleMenu() }, "\u2630")), index.h("section", { key: '4062f4b805aa52bbee5d18a0a6ce8f936a36fc3b', class: "drawer drawer--left", id: "drawer", "data-drawer-target": true }, index.h("div", { key: '089b8415c356268d3fb304abb9489fa3ac6dba0a', class: "drawer__overlay", "data-drawer-close": true, tabindex: "-1", onClick: () => this.closeMenu() }), index.h("div", { key: '863a27e2aaed2a308e7ff598639ac35fcf686b7d', class: "drawer__wrapper" }, index.h("div", { key: 'fa5c887f37d47043e90db2696b86f04d4ae227bc', class: "drawer__header" }, index.h("button", { key: 'f046591a448cdb4ec422da5f74feda6bc1050753', class: "close-button", onClick: () => this.closeMenu() }, "\u2716")), index.h("div", { key: 'c70a25784ea4db81d04c9bc238289f3003689762', class: "drawer__content" }, this.parsedMenuItems.map(item => (index.h("a", { href: item.link, onClick: () => this.closeMenu() }, item.name))))))));
    }
};
HeaderComponent.style = Header2ComponentStyle0;

exports.header2_component = HeaderComponent;
exports.header_component = HeaderComponent$1;

//# sourceMappingURL=header-component_2.cjs.entry.js.map