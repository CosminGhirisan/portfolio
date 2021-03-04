'use strict'

// ===== SCROLL FUNCTION ===== //
function smoothScroll (target, duration) {
   var target = document.querySelector(target);
   var targetPosition = target.getBoundingClientRect().top;
   var startPosition = window.pageYOffset;
   var distance = targetPosition - startPosition;
   var startTime = null;
   
   function animation(currentTime) {
      if(startTime === null) {
         startTime = currentTime;
      }
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed,  startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
   }

   function ease(t, b, c, d) {
      t /= d / 2;
      if (t<1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t-2) -1) + b;
   }

   requestAnimationFrame(animation);
}

document.querySelector('.about').addEventListener('click', function() {
   smoothScroll('#about',1000);
});

document.querySelector('.skills').addEventListener('click', function() {
   smoothScroll('#skills',1000);
});

document.querySelector('.work').addEventListener('click', function() {
   smoothScroll('#work',1000);
});

document.querySelector('.contact').addEventListener('click', function() {
   smoothScroll('#contact',1000);
});

document.querySelector('.btn-up').addEventListener('click', function() {
   smoothScroll('.home',1000);
});


