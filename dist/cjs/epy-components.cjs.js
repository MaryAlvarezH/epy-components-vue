'use strict';

const core = require('./core-3dfd17fb.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["epy-button.cjs",[[4,"epy-button",{"epyclass":[1]}]]]], options);
});
