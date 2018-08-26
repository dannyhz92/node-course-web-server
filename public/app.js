// import Velocity from "velocity-animate";

// Velocity(document.getElementById("hometron"), { opacity: 0.5 }, { duration: 1000 });

var isSecondPartAnimated = false;

setTimeout(function() {
  $("#tron")
    .velocity("transition.slideUpIn", { stagger: 250 })

}, 500);
$(window).scroll(function(){

if($(window).scrollTop() > 20 && !isSecondPartAnimated) {
  $("#secondsection")
  .velocity("slideDown", { duration: 1500 })
  isSecondPartAnimated = true;
}
});

// document.getElementById("hermans").style.color = green;

console.log("This");
