'use strict';

import 'jquery-lazyload';
import Swiper from 'swiper';

const App = {
  init() {
    const swiperContainer = $('.swiper-container');
    const swiperWrapper = $('.swiper-wrapper');
    if(swiperContainer.length) {
      this.setupSwipe(swiperContainer);
    }

    $("img.lazy").lazyload();

    const textLink = $('#text-link');

    $('#text-link').click((e) => {
      e.preventDefault();
      const theContent = $('.the-content').toggleClass('hidden');
      swiperWrapper.toggleClass('hidden');
      $('.swiper-button-prev, .swiper-button-next, .swiper-pagination').toggleClass('hidden');
      if(theContent.hasClass('hidden')) {
        textLink.text('Text');
      }
      else {
        textLink.text('Images');
      }
    });
  },

  setupSwipe(swiperContainer) {
    const setSwiperContainerHeight = function() {
      const hsize = ($(window).height() * 0.9) - $('#personal').outerHeight(true);
      swiperContainer.css("height", hsize + "px");
    }

    $(document).ready(setSwiperContainerHeight);
    $(window).resize(setSwiperContainerHeight);

    const mySwiper = new Swiper('.' + swiperContainer.attr('class'), {
      loop: true,
      keyboardControl: true,
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      paginationClickable: true,
      hashnav: true,
      hashnavWatchState: true,
      preloadImages: false,
      // Enable lazy loading
      lazyLoading: true,
      lazyLoadingOnTransitionStart: true,
      onLazyImageReady: function(swiper, slide, image) {
        $(slide).find('p.short').removeClass('hidden');
        const $image = $(image);
        $image.attr('alt', $image.data('alt'));
      }
    });
  }
};

module.exports = App;
