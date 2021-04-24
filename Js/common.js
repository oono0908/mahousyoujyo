$(function() {
  function close(){
    $('.nav__btn').click(function() {
      $(".nav").addClass("nav_close");
      $('.nav__btn').addClass("nav__btn_open");
      change_txt();
      $(".nav__btn_open").on('click', function(){
        $(".nav").removeClass("nav_close");
        $('.nav__btn').removeClass("nav__btn_open");
        change_txt();
        close();
      })
    })
  }

  $('.header__wrapper').hover(function(){
    $('.top-header__img-under1').toggleClass("flash-active");
  });
  function change_txt(){
    if($(".nav__btn").hasClass('nav__btn_open')){
      $(".nav__btn-txt").text("CLOSE");
    } else if(!$(".nav__btn").hasClass('nav__btn_open')){
      $(".nav__btn-txt").text("MENU");
    }
  }
  
  $('.newsdata__item').hover(function(){
    $(this).find(".newsdata__bg-img").toggleClass('js-change-color');
    $(this).find(".newsdata__txt").toggleClass('js-animation');
    $(this).find(".newsdata__date").toggleClass('js-animation');
  });
  $('.storydata__item').hover(function(){
    $(this).find(".storydata__img").toggleClass('js-change-color');
    $(this).find(".storydata__txt").toggleClass('js-animation');
  });
  $('.product-item').hover(function(){
    $(this).find(".product-item__img").toggleClass('js-change-color');
    $(this).find(".product-item__txt").toggleClass('js-animation');
  });
  $('.specialdata__item').hover(function(){
    $(this).find(".specialdata__bg-img").toggleClass('js-change-color');
    $(this).find(".specialdata__txt").toggleClass('js-animation');
  });
  $('.moviedata__item').hover(function(){
    $(this).find(".moviedata__bg-img").toggleClass('js-change-color');
    $(this).find(".moviedata__txt").toggleClass('js-animation');
  });
  setTimeout(function(){
    $('.cover1').css('display',"none");
    $('.cover2').css('display',"none");
  },4000);
  close();

  $('.to-top').click(function() {
    $("html").animate({scrollTop:0}, 1000, 'swing');
    return false;
  });

});

