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
$(document).ready(()=>{
  let deg = 0
  setInterval(()=>{
    if(deg>360){
      let deg=0
    };
    $("body").css("background","linear-gradient("+deg.toString()+"deg,red,yellow,green")
    deg += 3
  },50);
});
