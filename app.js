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

document.querySelector('.btn-contact').addEventListener('click', function() {
   smoothScroll('#contact',1000);
});

document.querySelector('.btn-up').addEventListener('click', function() {
   smoothScroll('.home',1000);
});


// ===== TYPEWRITING FUNCTION ===== //
const texts = ['Web Developer', 'Frontend Dev.'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
   if(count === texts.length){
      count = 0;
   }
   currentText = texts[count];
   letter = currentText.slice(0, ++index);
   document.querySelector('.typing').textContent = letter;
   if(letter.length === currentText.length){
      count++;
      index = 0;
   }
   setTimeout (type, 400);
}());



// ===== ABOUT ME MODAL ===== //
const modal = document.querySelector('.modal');
const overlayModal = document.querySelector('.overlay-modal');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlayModal.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlayModal.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlayModal.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// ===== ABOUT ME && SKILLS INFO SCROLL APPEAR ===== //
function scrollAppear(){
   var aboutMe = document.querySelector('.about-me');
   var skillsInfo = document.querySelector('.skills-info');
   var introPositionAboutMe = aboutMe.getBoundingClientRect().top;
   var introPositionSkillsInfo = skillsInfo.getBoundingClientRect().top;
   var screenPositon = window.innerHeight /3;

   if(introPositionAboutMe < screenPositon) {
      aboutMe.classList.add('about-me-appear');
   }
   if(introPositionAboutMe > screenPositon) {
      aboutMe.classList.remove('about-me-appear');
   }

   if(introPositionSkillsInfo < screenPositon) {
      skillsInfo.classList.add('skills-info-appear');
   }
   if(introPositionSkillsInfo > screenPositon) {
      skillsInfo.classList.remove('skills-info-appear');
   }
}
window.addEventListener('scroll', scrollAppear);