$(document).ready(function(){
   menu();
   nav();
   circle();
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
      //скрываем все кроме того, что должны открыть
         // $('.acc-menu li .acc-body').not($(this).next()).slideUp(300);
      // открываем или скрываем блок под заголовком, по которому кликнули
         $(this).next().slideToggle(500);
      // добавляем класс, чтобы повернуть стрелку
         if ($(this).hasClass('acc-open')) {
            $(this).removeClass('acc-open');
         } else {
            $(this).addClass('acc-open');
         }
      }   
};

function circle() {
   new CircleType(document.getElementById('circle-text'));
};