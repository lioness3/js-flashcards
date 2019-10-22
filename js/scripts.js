$(function() {
  $(".click-java").click(function() {
    $("#javascript-showing").toggle();
    $("#javascript-hidden").toggle();
  });

  $(".click-operator").click(function() {
    $("#operator-showing").toggle();
    $("#operator-hidden").toggle();
  });

  $(".click-Variables").click(function() {
    $("#Variables-showing").toggle();
    $("#Variables-hidden").toggle();
  });
});
