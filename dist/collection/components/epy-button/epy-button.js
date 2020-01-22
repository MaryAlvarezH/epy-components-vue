import { h } from "@stencil/core";
export class EpyButton {
    // Click with Event decorator
    clickButtonHandler(e) {
        if (this.epyclass && !this.epyclass.includes("disabled")) {
            console.log("handler click");
            this.clickButton.emit(e);
        }
    }
    // CLick with Listen decorator
    // @Listen("click", { capture: true })
    // handleClick() {
    //   if (!this.epyclass.includes("disabled")) {
    //     console.log("listen click ");
    //   }
    // }
    render() {
        return (
        // <button
        //   class={this.epyclass}
        //   disabled={this.epyclass.includes("disabled")}
        //   onClick={(event: UIEvent) => this.clickButtonHandler(event)}
        // >
        //   <slot></slot>
        // </button>
        h("button", { class: this.epyclass, disabled: this.epyclass.includes("disabled"), onClick: (event) => this.clickButtonHandler(event) },
            h("slot", null)));
    }
    static get is() { return "epy-button"; }
    static get originalStyleUrls() { return {
        "$": ["epy-button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["epy-button.css"]
    }; }
    static get properties() { return {
        "epyclass": {
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
            "attribute": "epyclass",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "clickButton",
            "name": "clickButton",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
