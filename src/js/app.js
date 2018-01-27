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