import { r as registerInstance, c as createEvent, h } from './core-165e720c.js';
var EpyButton = /** @class */ (function () {
    function EpyButton(hostRef) {
        registerInstance(this, hostRef);
        this.clickButton = createEvent(this, "clickButton", 7);
    }
    // Click with Event decorator
    EpyButton.prototype.clickButtonHandler = function (e) {
        if (this.epyclass && !this.epyclass.includes("disabled")) {
            console.log("handler click");
            this.clickButton.emit(e);
        }
    };
    // CLick with Listen decorator
    // @Listen("click", { capture: true })
    // handleClick() {
    //   if (!this.epyclass.includes("disabled")) {
    //     console.log("listen click ");
    //   }
    // }
    EpyButton.prototype.render = function () {
        var _this = this;
        return (
        // <button
        //   class={this.epyclass}
        //   disabled={this.epyclass.includes("disabled")}
        //   onClick={(event: UIEvent) => this.clickButtonHandler(event)}
        // >
        //   <slot></slot>
        // </button>
        h("button", { class: this.epyclass, disabled: this.epyclass.includes("disabled"), onClick: function (event) { return _this.clickButtonHandler(event); } }, h("slot", null)));
    };
    Object.defineProperty(EpyButton, "style", {
        get: function () { return ":host ::slotted(.left){margin-right:8px}:host ::slotted(.right){margin-left:8px}"; },
        enumerable: true,
        configurable: true
    });
    return EpyButton;
}());
export { EpyButton as epy_button };
