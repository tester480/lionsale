$(document).ready(function(){
   menu();
   nav();
   scroll();
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

function circle() {
   function circularText(txt, radius, classIndex) {
      txt = txt.split(""),
        classIndex = document.getElementsByClassName("circle-text")[classIndex];
    
      var deg = 360 / txt.length,
        origin = 0;
    
      txt.forEach((ea) => {
        ea = `<p style='height:${radius}px;
    position:absolute;
    transform:rotate(${origin}deg);
    transform-origin:0 100%'>${ea}</p>`;
        classIndex.innerHTML += ea;
        origin += deg;
      });
    }
    if ($(window).width() <= 992) {
      circularText("Агенство полного цикла   Агенство полного цикла   ", 65, 0);
   }
   else{
      circularText("Агенство полного цикла   Агенство полного цикла   ", 80, 0);
   }
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
   if ($(window).width() <= 992) {
      $("#hero-navigation").on("click","a", function (event) {
         event.preventDefault();

         var id = $(this).attr('href'),
            top = $(id).offset().top;

         $('.main, body, html').animate({scrollTop: top}, 1500);
      });
   }
}

