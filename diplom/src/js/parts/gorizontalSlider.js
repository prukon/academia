"use strict";

function gorizontalSlider() {
  let slideIndex = 1;
  let slides = document.querySelectorAll('.feedback-slider-item');
  let prev = document.querySelector('.main-prev-btn');
  let next = document.querySelector('.main-next-btn');
  let dotsWrap = document.querySelector('.slider-dots');
  let dots = document.querySelectorAll('.dot');
  plusSlides(slideIndex);
  setInterval(updateClock, 4000);

  function showSlides(n) {
    if (n > slides.length - 1) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(function (item) {
      slides[slideIndex - 1].classList.add("animated");
      slides[slideIndex - 1].classList.add("fadeInRight");
      return item.style.display = 'none';
    });

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }


    slides[slideIndex - 1].style.display = 'block';
    // slides[slideIndex - 1].classList.add("animated");
    // slides[slideIndex - 1].classList.add("fadeOutLeft");
  }



  prev.addEventListener('click', function () {
    plusSlides(-1);
  });
  next.addEventListener('click', function () {
    plusSlides(1);
  });

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function updateClock() {
    plusSlides(1);
  }

}

// module.exports = slider;

export default gorizontalSlider;