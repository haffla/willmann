'use strict';

import lightbox from 'lightbox2';

const App = {
  init() {
    lightbox.option({
      resizeDuration: 280,
      wrapAround: true
    });
  }
};

module.exports = App;
