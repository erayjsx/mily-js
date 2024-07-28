import { h } from "@stencil/core";
export class HeaderComponent {
    constructor() {
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
    static get is() { return "header-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["header-component.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["header-component.css"]
        };
    }
    static get properties() {
        return {
            "logo": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "logo",
                "reflect": false,
                "defaultValue": "'Logo'"
            },
            "menuItems": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "menu-items",
                "reflect": false
            },
            "rightSectionItems": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "right-section-items",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "menuOpen": {}
        };
    }
}
//# sourceMappingURL=header-component.js.map
