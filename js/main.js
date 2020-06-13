$(document).ready(function(){
   menu();
   nav();
   scroll();
   animate();
   circle();
   cases();
   yak();
});

function menu() {
   $(".burger").on('click', function () {
         var $parent = $(".header");
         if ($parent.hasClass('mob-menu')) {
            $parent.removeClass('mob-menu');
         } else {
            $parent.addClass('mob-menu');
         }
   }); 
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".header").length) {
         if ($(".header").hasClass("mob-menu")) {
            $(".header").removeClass("mob-menu");
         }
      }
   });
}

function nav() {
   $('.acc-menu li .name-link').on('click', f_acc);
      function f_acc(){
         if ($(window).width() <= 992) {
            // $('.acc-menu li .acc-body').not($(this).next()).slideUp(300);
            $(this).next().slideToggle(500);

            if ($(this).hasClass('acc-open')) {
               $(this).removeClass('acc-open');
            } else {
               $(this).addClass('acc-open');
            }
         }  
      } 
};

function scroll(){
   if ($(window).width() > 992) {
      var elem = $.jInvertScroll(['.main'],{
         onScroll: function(percent) {
            // console.log(percent);
         }
      });
   }  
};

function animate() {
   if ($(window).width() <= 992) {
      new WOW().init();
   }
   else{
      $(window).scroll(function(){
         var divWidth = $(".wrapper").width() - 500;
         var section = $("section");  
   
         section.each(function(){
            var offset = $(this).offset().left;
            var ind = $(this).index() + 1;
            
            if(offset > divWidth) {
               $(".title-white, .title-img, .description, .section-link, .quote, .acc-menu, .bg-letter, .bg-shape", this).addClass("animated fadeOutUp");
            }
            
            if ( (offset < divWidth)){
               if ($(".title-white, .title-img, .description, .section-link, .quote, .acc-menu, .bg-letter, .bg-shape", this).hasClass("fadeOutUp")){
                  $(".title-white, .title-img, .description, .section-link, .quote, .acc-menu, .bg-letter, .bg-shape", this).removeClass("fadeOutUp");
                  $(".title-white, .title-img, .description", this).addClass("animated fadeInDown");
                  $(".section-link, .quote, .acc-menu", this).addClass("animated fadeInUp");
                  $(".bg-letter, .bg-shape", this).addClass("animated fadeIn");
                  setTimeout(function(){
                     $(".title-white, .title-img, .description", this).removeClass("fadeInDown");
                     $(".section-link, .quote, .acc-menu", this).removeClass("fadeInUp");
                     $(".bg-letter, .bg-shape", this).removeClass("animated fadeIn");
                  }, 1500);
               }
               else {
                  $(".title-white, .title-img, .description", this).addClass("animated fadeInDown");
                  $(".section-link, .quote, .acc-menu", this).addClass("animated fadeInUp");
                  $(".bg-letter, .bg-shape", this).addClass("animated fadeIn");
               }
            }
         });
      });
   }
};

function circle() {
   new CircleType(document.getElementById('circle-text'));
};

function cases() {
   $('.cases-list').slick({
      infinite: true,
      dots: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      rows: 2,
      autoplay: 300
    });
};

function yak() {
   $("#hero-navigation").on("click","a", function (event) {
      event.preventDefault();
      if ($(window).width() <= 992) {
         var id = $(this).attr('href'),
            top = $(id).offset().top;
         $('.main, body, html').animate({scrollTop: top}, 1500);
      }
      else{
         var id = $(this).attr('href'),
            left = $(id).offset().left;
         $('.main, body, html').animate({scrollTop: left + 190}, 1500);
      }
   });
}

