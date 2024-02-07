$(document).ready(function () {
  $(".site-header").click(function () {
    $(".mobile-header").toggle();
  });

  // sticky jeader

  var header = $("header");
  var headerOffset = header.offset().top;

  $(window).scroll(function () {
    if ($(window).scrollTop() > headerOffset) {
      header.addClass("sticky");
    } else {
      header.removeClass("sticky");
    }
  });
});
