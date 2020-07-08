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

  $('.hamburger-menu').click(function () { // Al click sul menu hamburger
    $('header').hide(); // nascondo l'header con tutti i contenuti in viewport
    $('#mobile-menu').show(); // E mostro una section#mobile-menu con il menu mobile
  });

  $('.mobile-right a i').click(function () { // Una volta aperto il menu mobile, avrò una (X) in alto a dx, al click su di essa
    $('#mobile-menu').hide(); // Nascondo menu mobile
    $('header').show(); // Mostro header principale
  });

  $('.mobile-item span').click(function () { // Al click su una voce di menu mobile
    $(this).toggleClass('active'); // Aggiungo colore nero in classe active allo span cliccato
    $(this).next().slideToggle(); // Faccio andare in display block l'ul successivo allo span cliccato
    if($(this).children().hasClass('fa-chevron-down')) { // Qui sistemo la logica della freccia che indica se il menu è aperto o chiuso
      $(this).children().removeClass('fa-chevron-down'); // Se sul click la freccia è giù tolgo questa
      $(this).children().addClass('fa-chevron-up active'); // E la rimpiazzo con una freccia in su, colore nero
    } else {
      $(this).children().removeClass('fa-chevron-up active'); // Altrimenti faccio l'inverso di sopra, tolgo freccia su attiva
      $(this).children().addClass('fa-chevron-down'); // E rimetto la freccia giù inattiva
    }
  });
});
