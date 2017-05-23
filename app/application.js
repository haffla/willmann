'use strict';

const App = {
  getQueryParam(param) {
    const res = location.search.substr(1)
      .split("&")
      .find(function(item) {
          return item.split("=")[0] == param
      });
    return res ? res.split("=")[1] : null;
  },

  init() {
    const slider = $('.carousel').flickity({
      lazyLoad: true,
      prevNextButtons: false,
      initialIndex: this.getQueryParam('index'),
      pageDots: false,
      friction: 0.3,
      setGallerySize: false
    });

    slider.on( 'staticClick.flickity', function( event, pointer, cellElement, cellIndex ) {
      const dir = event.pageX < $('body').width() / 2 ? 'previous' : 'next';
      slider.flickity(dir, null);
    });

    const textLink = $('#text-link');

    $('#text-link').click((e) => {
      e.preventDefault();
      const theContent = $('.the-content').toggleClass('hidden');
      const carousel = $('.carousel').toggleClass('hidden');
      if(theContent.hasClass('hidden')) {
        textLink.text('Text');
      }
      else {
        textLink.text('Images');
      }
    });
  }
};

module.exports = App;
