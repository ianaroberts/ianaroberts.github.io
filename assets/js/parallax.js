$(document).ready(function()
{
  var midcity = document.querySelectorAll(".midcity"),
    speed = 0.5;
  //midcity.style.setProperty('--shift', ($(window).height() * 0.22) + "px");

  $(window).on('resize scroll', function()
  {
    var pixels = ($(window).height() * 0.22);
    console.log(pixels);

    var windowYOffset = window.pageYOffset,
      shift = pixels - (windowYOffset * speed);
    console.log(windowYOffset);
    console.log(shift);
console.log("");
    //document.getElementsByClassName("midcity").style.marginTop = "50px";
    //midcity[0].style.marginTop = shift;
    midcity[0].style.setProperty('--shift', pixels - (windowYOffset * speed) + "px");
  });
});
