import Vue from "vue";
import App from "./App.vue";
import "../node_modules/epy-scss/dist/css/epy.css";
import { applyPolyfills, defineCustomElements } from "../loader";

Vue.config.productionTip = false;

Vue.config.ignoredElements = [/epy-\w*/];

applyPolyfills().then(() => {
  defineCustomElements(window);
});

new Vue({
  render: h => h(App)
}).$mount("#app");
