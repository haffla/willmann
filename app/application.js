'use strict';

import 'jquery-lazyload';

const App = {
  init() {
    $("img.lazy").lazyload();

    // could set css min-height to 100vh, but does not work on IE < 11
    $('#main-wrapper').css("min-height", $(window).height());
    $('#copyright-section').removeClass('hidden');
  }
};

module.exports = App;
