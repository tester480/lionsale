$(document).ready(function(){
   menu();
   nav();
   scroll();
   particles();
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
      var elem = $.jInvertScroll(['.holder'],{
         onScroll: function(percent) {
            console.log(percent);
         }
      });
   }  
};

function particles() {
   particlesJS.load('particles-js', 'js/particles-js/particles/config.json', function() {
      console.log('callback - particles.js config loaded');
    });
};

function animate() {
   new WOW().init();
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
      var id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
   });
}
