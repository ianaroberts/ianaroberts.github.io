$(document).ready(function()
{
  //Define the css sections and the scroll speeds
  var midcity = document.querySelectorAll(".midcity"),
    farcity = document.querySelectorAll(".farcity"),
    mSpeed = 0.5,
    fSpeed = 0.25;

  //Listen for a resize or scroll to addjust the shift property
  $(window).on('resize scroll', function()
  {
    //Convert the vh margin of midcity to px and find the num px down the scroll is
    var pixels = ($(window).height() * 0.22),
      windowYOffset = window.pageYOffset;

    //Set the shift variable to the new value
    midcity[0].style.setProperty('--shift', pixels - (windowYOffset * mSpeed) + "px");
    farcity[0].style.setProperty('--shift', -(windowYOffset * fSpeed) + "px");
  });
});
