$(".head").mouseleave(function() {
  $( ".head" ).animate({
    color: "rgb(255,255,255)",
    backgroundColor: "rgb(0,0,0)"
  });
});
$(".head").mouseenter(function() {
  $( ".head" ).animate({
    color: "rgb(0,0,0)",
    backgroundColor: "rgb(255,255,255)"
  });
});
