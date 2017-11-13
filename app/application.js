'use strict';

import 'jquery-lazyload';
import Swiper from 'swiper';

const App = {
  init() {
    const swiperContainer = $('.swiper-container');
    const swiperWrapper = $('.swiper-wrapper');
    if(swiperContainer.length) {
      this.setupSwipe(swiperContainer, swiperWrapper);
    }

    $("img.lazy").lazyload();

    // could set css min-height to 100vh, but does not work on IE < 11
    $('#main-wrapper').css("min-height", $(window).height());
    $('#copyright-section').removeClass('hidden');

    // $('#text-link').click((e) => {
    //   e.preventDefault();
    //   const theContent = $('.the-content').toggleClass('hidden');
    //   swiperWrapper.toggleClass('hidden');
    //   $('.swiper-button-prev, .swiper-button-next, .swiper-pagination').toggleClass('hidden');
    //   if(theContent.hasClass('hidden')) {
    //     textLink.text('Text');
    //   }
    //   else {
    //     textLink.text('Images');
    //   }
    // });
  },

  setupSwipe(swiperContainer, swiperWrapper) {
    const setSwiperContainerHeight = function() {
      const hsize = ($(window).height() * 0.9);
      swiperContainer.css("height", hsize + "px");
    }

    $(document).ready(setSwiperContainerHeight);
    $(window).resize(setSwiperContainerHeight);

    const swiper = new Swiper('.' + swiperContainer.attr('class'), {
      speed: 800,
      loop: false,
      keyboardControl: true,
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      paginationClickable: true,
      hashnav: true,
      hashnavWatchState: true,
      preloadImages: false,
      lazyLoading: true,
      lazyLoadingOnTransitionStart: true,
      onLazyImageReady: function(swiper, slide, image) {
        $(slide).find('p.short').removeClass('hidden');
        const $image = $(image);
        $image.attr('alt', $image.data('alt'));
      }
    });

    swiperWrapper.click(function(ev) {
      const width = $(window).width();
      ev.pageX < width / 2 ? swiper.slidePrev() : swiper.slideNext();
    });
  }
};

module.exports = App;
