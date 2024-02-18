$(document).ready(function () {
  $(".site-header").click(function () {
    $('body').addClass('open-mobile-menu');
  });
  $('.fa-xmark').click(function() {
    $('body').removeClass('open-mobile-menu');
  })
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

  $(".selling-product").slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    prevArrow:
      '<div class="slide-arrow prev-arrow"><i class="fa-solid fa-chevron-left"></i></div>',
    nextArrow:
      '<div class="slide-arrow next-arrow"><i class="fa-solid fa-chevron-right"></i></div>',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $('.testimonial-section ul li .slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  })  
});
