(function($) {
  $.fn.cardify = function() {
    $(this).find('img').each(function() {
      $(this).wrap('<figure></figure>')
      $(this).parent().append($('<figcaption></figcaption>'));
      $(this).next().text($(this).attr('alt')); 
    });
  };
})(jQuery);