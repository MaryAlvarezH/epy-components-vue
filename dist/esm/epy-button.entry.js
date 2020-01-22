import { r as registerInstance, c as createEvent, h } from './core-165e720c.js';

const EpyButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.clickButton = createEvent(this, "clickButton", 7);
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
        h("button", { class: this.epyclass, disabled: this.epyclass.includes("disabled"), onClick: (event) => this.clickButtonHandler(event) }, h("slot", null)));
    }
    static get style() { return ":host ::slotted(.left){margin-right:8px}:host ::slotted(.right){margin-left:8px}"; }
};

export { EpyButton as epy_button };
