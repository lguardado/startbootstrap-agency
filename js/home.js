(function($) {
  "use strict"; // Start of use strict

  $('.js-en-trigger').click(function() {
    if ($('.es').is(":visible")){
      $('.es').hide();
      $('.en').show();
    } else {
      $('.en').hide();
      $('.es').show();  
    }
  });

  $('.document').ready(function() {
    $('.es').hide();
    $('.en').show();
  });

})(jQuery); // End of use strict
