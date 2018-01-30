(function($) {
  $.fn.cardify = function() {
    // Ubicando todas etiquetas img del contenedor con la clase cardify-mode
    $(this).find('img').each(function() {
      // Cada etiqueta img tomara como padre una etiqueta figure
      $(this).wrap('<figure></figure>');
      // A cada padre de la etiqueta img se le pondra como ultimo hijo una etiqueta figcaption
      // A cada figcaption se le pondra como texto el atributo de su imagen correspondiente
      $(this).parent().append($('<figcaption>' + $(this).attr('alt') + '</figcaption>'));
    });
  };

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
    });
  };  

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