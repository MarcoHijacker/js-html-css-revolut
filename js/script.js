// Revolut Template JS + jQuery

$(document).ready(function () {
  $('.menu-item > a').mouseover(function () { // Mouse over sull'a di menu-item
    $('.dropdown-menu').hide(); // Nascondo tutti i menu a tendina
    $('.menu-item > a').removeClass('active'); // Tolgo il colore nero di selezione delle voci di menu dopo che il mouse ha selezionato un'altra voce della navbar
    $(this).addClass('active'); // La classe active aggiunge il colore nero alla voce del menu attiva che sta mostrando il menu a tendina
    $(this).next().show(); // Mostro il div successivo al menu-item > a attivo
  });
  $('.main-menu').mouseleave(function () {
    $('.dropdown-menu').hide(); // Faccio in modo che il menu attivo sparisca appena esco dal div contenente la navbar
    $('.menu-item > a').removeClass('active'); // Tolgo il colore nero di selezione delle voci di menu dopo che il mouse ha abbandonato la navbar
  });
});
