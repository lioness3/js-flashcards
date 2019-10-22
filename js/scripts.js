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

  $(".click-Variable2").click(function() {
    $("#Variable2-showing").toggle();
    $("#Variable2-hidden").toggle();
  });

  $(".click-Functions").click(function() {
    $("#Functions-showing").toggle();
    $("#Functions-hidden").toggle();
  });

  $(".click-Methods").click(function() {
    $("#Methods-showing").toggle();
    $("#Methods-hidden").toggle();
  });

  $(".click-Arguements").click(function() {
    $("#Arguements-showing").toggle();
    $("#Arguements-hidden").toggle();
  });
});
