(function ($) {
    "user strict";

  // scroll-to-top
var ScrollTop = $(".scrollToTop");
$(window).on('scroll', function () {
  if ($(this).scrollTop() < 500) {
      ScrollTop.removeClass("active");
  } else {
      ScrollTop.addClass("active");
  }
});
    
    //Create Background Image
  (function background() {
    let img = $('.bg_img');
    img.css('background-image', function () {
      var bg = ('url(' + $(this).data('background') + ')');
      return bg;
    });
  })();

  $(document).ready(function() {
       // wow
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow',
            // animated element css class (default is wow)
            animateClass: 'animated',
            // animation css class (default is animated)
            offset: 0,
            // distance to the element when triggering the animation (default is 0)
            mobile: false,
            // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }
    
    $(document).on('click', '.menu-icon', function () {
        $('.menu-bar').toggleClass('show');
    });
});

})(jQuery);


