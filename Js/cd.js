$(function() {
  $('.cd-play-img').click(function() {
    $(this).addClass("is_active");
  })
  $('.cd-stop-img').click(function() {
    $(this).siblings().removeClass("is_active");
  })
});