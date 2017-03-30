(function ($) {

  // Initialize foundation.
  $(document).foundation();

  // Set active link status on page load.
  var path = location.pathname.split("/")[1];
  if (path.length > 0) {
    $('nav a[href^="/' + path + '"]').addClass('active');
  }
  else {
    $('nav a.home').addClass('active');
  }

  // Add active class to menu-icon when the menu is open.
  $('.menu-icon').click(function(){
    $(this).toggleClass('active');
  });

})(jQuery);