$(function() {

  $('.main-top__wrapper').on('mousemove', function(e) {
    var x = Math.round(e.pageX / 100) * 2;
    var y = Math.round(e.pageY / 100) * 2;
    var x
    $('.character-1').css('transform', 'translate(' + x + 'px,' + y + 'px)');
    $('.character-2').css('transform', 'translate(' + x * 2 + 'px,' + y * 2 + 'px)');
    $('.character-3').css('transform', 'translate(' + x * 2 + 'px,' + y * 2 + 'px)');
    $('.main-top__bg-img').css('transform', 'translate(' + -x + 'px,' + -y + 'px)');
  });
  $('.baner__list').slick({
    autoplay: true,
    autoplaySpeed:5000,
    dots: false,
    arrows: false, 
});

$('.main-top__wrapper2').click(function() {
  $(".top-modal-movie").css("display", "block");
})
$('.product-modal').hover(function() {
  $(".nav-product-modal").toggleClass("modal-active");
})
});