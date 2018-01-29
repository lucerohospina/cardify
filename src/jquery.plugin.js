// funcion anonima autoejecutable
(function($) {
  // $('.container').hide(3000);

  // jQuery le hereda todas sus caracteristicas al nuevo objeto
  $.fn.extend({
    // Nombre del componente
    plugin: function() {
      let $container = $('#hello');
      let $image = $('#test-img');

      $('#first-btn').on('click', function() {
        let imageAlt = $image.attr('alt');
        $image.wrap('<figure class=\'new\'></figure>');
        $('figure').append(`<figcaption>${imageAlt}</figcaption>`);
      });
      // return $(this);
    }
  });
})(jQuery);