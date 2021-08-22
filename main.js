$(document).ready(function () {

   //Burger

   $('.burger').click(function () {
      $(this).toggleClass('active');
   })

   //Burger



   //Choose faculty filter

   $('.faculty_list_item').click(function (e) {
      e.preventDefault();
      $(".faculty_list_item").removeClass('active');
      $(this).addClass('active');
   })

   //Choose faculty filter

})




