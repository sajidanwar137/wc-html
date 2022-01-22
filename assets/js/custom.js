$(document).ready(function () {
  if ($(window).width() <= 767) {
    $(".menu-icon").click(function(){
      $(this).toggleClass('active');
      $('body').toggleClass('mob-menu-open');
    });
    $(".mob-nav-overlay").click(function(){
      $('.menu-icon').removeClass('active');
      $('body').toggleClass('mob-menu-open');
    });
    $(".menu li a").click(function(){
      $('.menu-icon').removeClass('active');
      $('body').removeClass('mob-menu-open');
    });
  }
  $(".button.quiz").click(function(){
    $('#quiz-popup').addClass('show');
    $('body').css('overflow-y','hidden');
  });
  $(".popup-close,.popup-overlay").click(function(){
    $('.popup-outer').removeClass('show');
    $('body').css('overflow-y','auto');
  });
  $('.testimonial-inner').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows:false,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });    
});