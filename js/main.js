$(document).ready(function() {
 
  $("#owl-example").owlCarousel({
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
      itemsTablet : [768,2],
      itemsMobile : [599,1],
      items: 4,
      navigation : true,
      autoPlay: true,
      autoPlaySpeed: 5000,
      stopOnHover: true,
      pagination: false,
      navigationText : ['<span class="prev-arrows"><i class="fa fa-angle-left"></i></span>','<span class="next-arrows"><i class="fa fa-angle-right"></i></span>'],
    });

    $('.dropdown').on('show.bs.dropdown', function () {
      $('.fa').removeClass('fa-bars').addClass('fa-close')
    });
    $('.dropdown').on('hide.bs.dropdown', function () {
      $('.fa').removeClass('fa-close').addClass('fa-bars')
    });
});