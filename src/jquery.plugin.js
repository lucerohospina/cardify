// funcion anonima autoejecutable
(function($) {
  // $('.container').hide(3000);

  // jQuery le hereda todas sus caracteristicas l nuevo objeto
  $.fn.extend({
    // Nombre del componente
    plugin: function(userOptions) {
      // opciones por defecto del componente
      let initialOptions = {
        fondo: 'orangered',
        colorLetra: 'navy',
        letra: '2rem'
      };
      // $.extend() nos permite extender las opciones iniciales
      // del plugin con las ue posiblemente mande el usuario
      let opt = $.extend(initialOptions, userOptions);

      // funcion constructora del plugin
      function init() {
        $(this).css({
          backgroundColor: opt.fondo,
          color: opt.colorLetra,
          fontSize: opt.letra
        });
      }
      // ejecuta la funcion constructora por cada elemento que
      // invoque el componente. 
      return $(this).each(init);
    }
  });
})(jQuery);