/*
 * @Author: zaifastafa
 * @Date:   2017-11-23 20:46:01
 * @Last Modified by:   zaifastafa
 * @Last Modified time: 2017-12-07 20:08:40
 */

'use strict';

$('.goto').on('click', function() {
  var obj = $(this);
  var element = obj.attr('data-target');
  $("html, body").animate({
    scrollTop: element ? $(element).offset().top - 70 : 0
  }, 1000);
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 1024) {
    $('#toTop').stop(true, true).fadeIn();
  } else {
    $('#toTop').stop(true, true).fadeOut();
  }
});
