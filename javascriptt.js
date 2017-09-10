$('.open-menu').on('click', function() {
  $('.wrap').toggleClass('menu-is-open');
  var menuState = $('.wrap').hasClass('menu-is-open') ? true : false;
});
