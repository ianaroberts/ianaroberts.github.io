if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/sw.js')
           .then(function() { console.log("Service Worker Registered"); });
}

$(document).ready(function()
{
  $('.buttonAnimation').on('click', function () {
    $('.animatedIcon').toggleClass('open');
  });
});
