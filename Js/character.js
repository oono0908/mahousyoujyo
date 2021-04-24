$(function() {

  var main = ".character-list";
  var item = ".character-nav__list";
  var info = ".character-info__list";

  $(main).slick({
    vertical: true,
    prevArrow: '<img class="character-list__nav-btn character-btn1" src="../Image/character_nav_btn.svg" alt="ボタン">',
    nextArrow: '<img class="character-list__nav-btn character-btn2" src="../Image/character_nav_btn.svg" alt="ボタン">',
    asNavFor: item,
    infinite: true,
    
  });
  
  $(item).slick({
    slidesToShow: 9,
    arrows: false, 
    asNavFor: main,
    centerMode: true,
    infinite: true
  });
  $(item+" .slick-slide").on('click',function(){
    var index = $(this).attr("data-slick-index");
    $(item).slick("slickGoTo",index,false);
    $(info).slick("slickGoTo",index,false);
  });

  $(info).slick({
    arrows: false, 
    vertical: true,
  });
  $(".character-list__nav-btn").on("click", function(){
    var index = $(main+" .slick-current").attr("data-slick-index");
    $(info).slick("slickGoTo",index,false);
  });
  // $(main).on('afterChange', function(){
  //   var index = $(main+" .slick-current").attr("data-slick-index");
  //   $(info).slick("slickGoTo",index,false);
  // });
  function BtnPositionChange() {
    $(".character-btn1").click(function(){
      $(".character-btn1").toggleClass("btn-up");
    })
  }
  
});