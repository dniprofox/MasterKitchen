$(function () {  


  ////////menu
	$('.menu__btn,.mobail__header-prev').on("click", function(){
    $(this).toggleClass('open');
    $('.mobile-menu').toggle(400);  
    
  });  
  
   // ToTop////
   $(window).on('scroll',function () {
      
    if ($(this).scrollTop() != 0)
       $('#toTop').fadeIn("slow");
    else
       $('#toTop').fadeOut("slow");
   });
   
    $('#toTop').on('click',function () {
        $('body,html').animate({
        scrollTop: 0
        }, 800);
    });    
 

   
 
  //  var mixer = mixitup('.products__inner-box');

  


  
});
