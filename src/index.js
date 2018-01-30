(function($) {
  // Propuesta de cardify que implementa la etiqueta figure sin estilos
  $.fn.cardify = function() {
    // Ubicando todas etiquetas img del contenedor con la clase cardify-mode
    $(this).find('img').each(function() {
      // Cada etiqueta img tomara como padre una etiqueta figure
      $(this).wrap('<figure></figure>');
      // A cada padre de la etiqueta img se le pondra como ultimo hijo una etiqueta figcaption
      // A cada figcaption se le pondra como texto el atributo de su imagen correspondiente
      $(this).parent().append($('<figcaption>' + $(this).attr('alt') + '</figcaption>'));
      
      // hover
      $(this).hover(
        function() {
          $(this).css('opacity', '0');
          $(this).next().css('display', 'none');
        }, function() {
          $(this).css('opacity', '1');
          $(this).next().css('display', 'block');
        }
      );
    });
  };
  // Propuesta de estilo inline-block de figure con tamaño de imágenes redimensionado, caption arreglado.
  $.fn.cardifyStylesInline = function() {
    // Ubicando todas etiquetas img del contenedor con la clase cardify-mode
    $(this).find('img').each(function() {
      // Cada etiqueta img tomara como padre una etiqueta figure
      $(this).wrap('<figure></figure>')
        .css({'max-width': '15rem',
          'heigth': 'auto'});
      // A cada padre de la etiqueta img se le pondra como ultimo hijo una etiqueta figcaption
      // A cada figcaption se le pondra como texto el atributo de su imagen correspondiente
      $(this).parent().append($('<figcaption>' + $(this).attr('alt') + '</figcaption>'))
        .css({'margin-top': '5rem',
          'margin-bottom': '2rem',
          'margin-right': '2rem',
          'display': 'inline-block'});
      $('figcaption').css({'text-align': 'center',
        'font-size': '1.5em'});
  
      // hover
      // $(this).hover(
      //   function() {
      //     var title = $(this).attr('title');
      //     $(this).css('opacity', '0');
      //   }, function() {
      //     $(this).css('opacity', '1');
      //   }
      // );
    });
  };  
  // Propuesta con el estilo default de figure con tamaño de imágenes redimensionado, caption arreglado.
  $.fn.cardifyStylesBlock = function() {
    // Ubicando todas etiquetas img del contenedor con la clase cardify-mode
    $(this).find('img').each(function() {
      // Cada etiqueta img tomara como padre una etiqueta figure
      $(this).wrap('<figure></figure>')
        .css({'max-width': '15rem',
          'heigth': 'auto',
          'margin-left': '7%'});
      // A cada padre de la etiqueta img se le pondra como ultimo hijo una etiqueta figcaption
      // A cada figcaption se le pondra como texto el atributo de su imagen correspondiente
      $(this).parent().append($('<figcaption>' + $(this).attr('alt') + '</figcaption>'))
        .css({'margin-top': '5rem',
          'margin-bottom': '2rem'});
      $('figcaption').css({'font-size': '1.5em',
        'margin-left': '7%',
        'margin-top': '1%'});
    });
  }; 
})(jQuery);