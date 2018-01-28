$(document).ready(function() {
  // $('button').plugin();
  $('#defecto').on('click', function() {
    $('#hola').plugin();
  });

  $('#usuario').on('click', function() {
    $('#hola').plugin({
      fondo: 'greenyellow'
    });
  });
});

// INSERTANDO LA IMG DEL CONTENEDOR EN UNA FIGURE CON SU FIGCAPTION
// $(document).ready(function() {
//   let $container = $('#hello');
//   let $image = $('#test-img');

//   $('#first-btn').on('click', function() {
//     let imageAlt = $image.attr('alt');
//     $image.wrap('<figure class=\'new\'></figure>');
//     $('figure').append(`<figcaption>${imageAlt}</figcaption>`);
//   });
// });