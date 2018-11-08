$( document ).ready(function() {
    /* activate jquery isotope */
    var $container = $('#posts').isotope({
      itemSelector : '.item',
      isFitWidth: true
    });
  
    $(window).smartresize(function(){
      $container.isotope({
        columnWidth: '.col-sm-3'
      });
    });
    
    $container.isotope({ filter: '*' });
  
      // filter items on button click
    $('.filters').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $container.isotope({ filter: filterValue });
    });
    
    // Show/Hide the tooltip

    if (window.matchMedia('(max-width: 768px)').matches) {
      $('.tooltip_profile').css('display','block');
      $('.img_profile_1').mouseenter(function () { 
        $('.tooltip_profile').css('display', 'block!important')
      })
      $('.tooltip_profile').mouseleave(function () { 
        $('.tooltip_profile').css('display', 'block!important')
      })
      $('#hero_profile_1').click(function () {
        $('.tooltip_profile').css('display', 'block!important')
      })
    }

      if(window.matchMedia('(min-width: 768px)').matches){
        $('.tooltip_profile').css('display', 'none!important')
        $('.img_profile_1').mouseenter(function () { 
          $('.tooltip_profile').fadeIn(10);
          $('#gallery_profile_1').css('padding', '150px 0');
      })
      $('.tooltip_profile').mouseleave(function () { 
          $('.tooltip_profile').hide();
          $('#gallery_profile_1').css('padding', '40px 0 7rem 0');
      })
      $('#hero_profile_1').click(function () {
          $('.tooltip_profile').hide();
          $('#gallery_profile_1').css('padding', '40px 0 7rem 0');
      })
      }
});
  
  
  