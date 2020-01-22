import { a as patchEsm, b as bootstrapLazy } from './core-165e720c.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["epy-button", [[4, "epy-button", { "epyclass": [1] }]]]], options);
    });
};
export { defineCustomElements };
