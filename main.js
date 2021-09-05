$(document).ready(function () {

   //Burger

   $('.burger').click(function () {
      $(this).toggleClass('active');
      $('.mobile_menu').toggleClass('active');
   })

   //Burger


   https://joxi.net/V2V7WOdU8NRqwA
   //Choose faculty filter

   $('.faculty_list_item, .faculty_modal_list_item').click(function (e) {
      e.preventDefault();
      $(".faculty_list_item, .faculty_modal_list_item").removeClass('active');
      $(this).addClass('active');
   })

   //Choose faculty filter

   //Faculty and filter modals

   $('.choose_faculty_filter').click(function (e) {
      e.preventDefault();
      $('#myOverlay').fadeIn(230, function () {
         $('.faculty_modal')
            .css('display', 'block')
            .animate({ opacity: 1 }, 130);
      });
   });

   $('.filter_btn').click(function (e) {
      e.preventDefault();
      $('#myOverlay').fadeIn(230, function () {
         $('.filter_modal')
            .css('display', 'block')
            .animate({ opacity: 1 }, 130);
      });
   });

   $('#close, #myOverlay').click(function () {
      $('.faculty_modal, .filter_modal').animate({ opacity: 0 }, 130, function () {
         $(this).css('display', 'none');
         $('#myOverlay').fadeOut(230);
      });
   });

   //Faculty and filter modals

   $('.choose_faculty, .faculty_menu, .faculty_menu:after').hover(function () {
      $('.faculty_menu').toggleClass('active');
   });

});




