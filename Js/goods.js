$(function() {

const array = [
  {item: ".item1", modal: ".modal1"},
  {item: ".item2", modal: ".modal2"},
  {item: ".item3", modal: ".modal3"},
  {item: ".item4", modal: ".modal4"},
  {item: ".item5", modal: ".modal5"},
  {item: ".item6", modal: ".modal6"},
  {item: ".item7", modal: ".modal7"},
  {item: ".item8", modal: ".modal8"},
  {item: ".item9", modal: ".modal9"}
]

$.each(array, function(index, array){
  $("" + array.item).click(function() {
    $("" + array.modal).css("display", "block");
    $(".main__container").addClass("position-fixed");
  })
  $('.modal__btn').click(function() {
    $("" + array.modal).css("display", "none");
    $(".main__container").removeClass("position-fixed");
  })

})

});