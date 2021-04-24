$(function() {
  $('.is_active1').click(function() {
    console.log("kkkk")
    $(".modal-movie__wrapper").css("display", "block");
    $(".modal-movie__item1").css("display", "block");
  })
  $('.modal__btn').click(function() {
    $(".modal-movie__wrapper").css("display", "none");
    $(".modal-movie__item1").css("display", "none");
  })

  $('.is_active2').click(function() {
    $(".modal-movie__wrapper").css("display", "block");
    $(".modal-movie__item2").css("display", "block");
  })
  $('.modal__btn').click(function() {
    $(".modal-movie__wrapper").css("display", "none");
    $(".modal-movie__item2").css("display", "none");
  })
});