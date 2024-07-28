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
        return (h("header", { key: '8dc1dfdc34227a41e3531464f3a899fb0c468afc' }, h("nav", { key: '73661ea87c69f5337db4017faa8b6253d7e050c9' }, this.parsedMenuItems.map(item => (h("a", { href: item.link }, item.name)))), h("div", { key: '968b917102d7918ede80f009e6682717c280c6e2', class: "logo" }, this.logo), h("div", { key: '8cce39f6bb9ff99cc9cd7514a1d968eca69067da', class: "right-section" }, this.parsedRightSectionItems.map(item => (h("a", { href: item.link }, item.name))), h("div", { key: '065272c292676e9f3be20ed4a57b9031ea97de7e', class: "menu-icon", onClick: () => this.toggleMenu() }, "\u2630")), h("section", { key: '4062f4b805aa52bbee5d18a0a6ce8f936a36fc3b', class: "drawer drawer--left", id: "drawer", "data-drawer-target": true }, h("div", { key: '089b8415c356268d3fb304abb9489fa3ac6dba0a', class: "drawer__overlay", "data-drawer-close": true, tabindex: "-1", onClick: () => this.closeMenu() }), h("div", { key: '863a27e2aaed2a308e7ff598639ac35fcf686b7d', class: "drawer__wrapper" }, h("div", { key: 'fa5c887f37d47043e90db2696b86f04d4ae227bc', class: "drawer__header" }, h("button", { key: 'f046591a448cdb4ec422da5f74feda6bc1050753', class: "close-button", onClick: () => this.closeMenu() }, "\u2716")), h("div", { key: 'c70a25784ea4db81d04c9bc238289f3003689762', class: "drawer__content" }, this.parsedMenuItems.map(item => (h("a", { href: item.link, onClick: () => this.closeMenu() }, item.name))))))));
    }
    static get is() { return "header2-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["header2-component.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["header2-component.css"]
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
//# sourceMappingURL=header2-component.js.map
