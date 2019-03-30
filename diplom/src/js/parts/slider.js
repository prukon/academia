//slider
function slider() {

    "use strict";

    let slideIndex = 1,
        slides = document.querySelectorAll('.main-slider-item');
    showSlides(slideIndex);
   // setInterval(updateClock, 4000);


    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        slides.forEach(function (item) {
            slides[slideIndex - 1].classList.add("animated");
            slides[slideIndex - 1].classList.add("bounceInUp");
            return item.style.display = 'none';
        });
        slides[slideIndex - 1].style.display = 'block';
        slides[slideIndex - 1].classList.add("animated");
        slides[slideIndex - 1].classList.add("fadeInDown");
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function updateClock() {
        plusSlides(1);
    }
}
module.exports = slider;