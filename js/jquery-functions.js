jQuery( document ).ready(function() {
  jQuery('#hamburger-icon').click(function(){
    jQuery(this).toggleClass('icon-transform');
    jQuery( ".desktop-nav" ).slideToggle("slow");
  });

  jQuery('.footer-submenu label').after().click(function () {
    if(jQuery( window ).width() <= 780 ){
      var id = jQuery(this).attr('for');
      jQuery( "#"+id ).slideToggle("slow");
      jQuery(this).toggleClass('plus-icon-transform');
    }
  });
});
