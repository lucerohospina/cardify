(function($) {
  // Propuesta de cardify que implementa la etiqueta figure sin estilos
  $.fn.cardify = function() {
    
    function mainEvent() {
    // Ubicando todas etiquetas img del contenedor con la clase cardify-mode
    $(this).find('img').each(function() {
      // Cada etiqueta img tomara como padre una etiqueta figure
      $(this).wrap('<figure></figure>');
      // A cada padre de la etiqueta img se le pondra como ultimo hijo una etiqueta figcaption
      // A cada figcaption se le pondra como texto el atributo de su imagen correspondiente
      $(this).parent().append($(`<figcaption>${$(this).attr('alt')}</figcaption>`));
        
    });
  }

  function hoverImg() {
    $('img').hover(
      function() {
        $(this).css('opacity', '0.2');
        $(this).next().css('opacity', '1');
      },
      function() {
        $(this).css('opacity', '1');
        $(this).next().css('opacity', '0');
      }
    );
  }
        
  function noStyles() {
    mainEvent();
    hoverImg();
    $('img').parent().addClass('figure-styles-inline');
    $(this).next().addClass('figcaption-styles'); 
  }


  function inlineStyle() {
    mainEvent();
    hoverImg();
    $('img').addClass('image-styles-inline');
    $(this).parent().addClass('figure-styles');
    $(this).next().addClass('figcaption-styles-inline');
  }
  };

  
})(jQuery);

