// Revolut Template JS + jQuery

$(document).ready(function () {
  $('.menu-item > a').mouseover(function () { // Mouse over sull'a di menu-item
    $('.dropdown-menu').hide(); // Nascondo tutti i menu a tendina
    $(this).next().show(); // Mostro il div successivo al menu-item > a attivo
  });
  $('.main-menu').mouseleave(function () { // Faccio in modo che il menu attivo sparisca appena esco dal div contenente la navbar
    $('.dropdown-menu').hide();
  });
});
