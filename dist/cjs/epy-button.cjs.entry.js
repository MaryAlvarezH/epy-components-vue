'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-3dfd17fb.js');

const EpyButton = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.clickButton = core.createEvent(this, "clickButton", 7);
    }
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
        core.h("button", { class: this.epyclass, disabled: this.epyclass.includes("disabled"), onClick: (event) => this.clickButtonHandler(event) }, core.h("slot", null)));
    }
    static get style() { return ":host ::slotted(.left){margin-right:8px}:host ::slotted(.right){margin-left:8px}"; }
};

exports.epy_button = EpyButton;
