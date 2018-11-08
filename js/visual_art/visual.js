$(document).ready(function () {
    $('.dropdown').on('show.bs.dropdown', function () {
        $('.fa').removeClass('fa-bars').addClass('fa-close')
      });
      $('.dropdown').on('hide.bs.dropdown', function () {
        $('.fa').removeClass('fa-close').addClass('fa-bars')
      });

     var ias = jQuery.ias({
      container:  '#infinite-container',
      item:       '.infinite-item',
     
     })
    });