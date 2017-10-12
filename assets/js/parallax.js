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
    console.log(pixels);
    console.log(windowYOffset);
    if (windowYOffset > pixels)
    {
      mSpeed = 2;
      fSpeed = 2;
    }
    if (windowYOffset <= pixels)
    {
      mSpeed = 0.5;
      fSpeed = 0.25;
    }
  });

  //Stop Safari from ruining the parallax illusion
  var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
  if (isSafari == true)
  {
     window.addEventListener('touchmove',function(event)
     {
        event.preventDefault();
     });
    
    var scrollX = 0,
      scrollY = 0,
      scrollMinX = 0,
      scrollMinY = 0,
      scrollMaxX = document.body.scrollWidth - window.innerWidth,
      scrollMaxY = document.body.scrollHeight - window.innerHeight,
      nudge = document.querySelectorAll(".nudge");

    // Insure that the page dimensions are correct
    window.addEventListener('resize', function () {
      scrollMaxX = document.body.scrollWidth - window.innerWidth;
      scrollMaxY = document.body.scrollHeight - window.innerHeight;
    }, false);

    // Listen for overscroll and deploy counter measures
    window.addEventListener('scroll', function () {
      scrollX = window.scrollX;
      scrollY = window.scrollY;

      if (scrollX <= scrollMinX)
      {
        //nudge[0].style.setProperty('--nudgeX', (scrollX - scrollMinX) + "px");
        window.scroll(scrollMinX, scrollY);
      }

      if (scrollX >= scrollMaxX)
      {
        //nudge[0].style.setProperty('--nudgeX', (scrollMaxX - scrollX) + "px");
        window.scroll(scrollMaxX, scrollY);
      }

      if (scrollY <= scrollMinY)
      {
        //nudge[0].style.setProperty('--nudgeY', (scrollMinY - scrollY) + "px");
        window.scroll(scrollX, scrollMinY);
      }

      if (scrollY >= scrollMaxY)
      {
        //nudge[0].style.setProperty('--nudgeY', (scrollY - scrollMaxY) + "px");
        window.scroll(scrollX, scrollMaxY);
      }
    }, false);
  }
});
