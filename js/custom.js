'use strict';

$('.goto').on('click', function() {
  var obj = $(this);
  var element = obj.attr('data-target');
  $('html, body').animate(
    {
      scrollTop: element ? $(element).offset().top - 70 : 0
    },
    1000
  );
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 1024) {
    $('#toTop').fadeIn('slow');
  } else {
    $('#toTop').fadeOut('slow');
  }
});
