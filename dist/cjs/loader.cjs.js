'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-3dfd17fb.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["epy-button.cjs",[[4,"epy-button",{"epyclass":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
