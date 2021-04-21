$(function () {  


  ////////menu
	$('.menu__btn').on("click", function(){
    $(this).toggleClass('open');
    $('.mobile-menu').toggle(400);   
  });  
  
  // modal screen activate
$('.mobile-menu').live('click', function(){
  modalScreen.show();
  $('body').css('overflow','hidden');
  });
  
  // modal screen de-activate
  $('body, html').live('click', function(){
  modalScreen.hide();
  $('body').css('overflow','auto');
  });

   
 
  //  var mixer = mixitup('.products__inner-box');

  


  
});
