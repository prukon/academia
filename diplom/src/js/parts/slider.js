//slider
function slider() {
    console.log(1);
    "use strict";

    let slideIndex = 1,
        slides = document.querySelectorAll('.main-slider-item');
    showSlides(slideIndex);
    setInterval(updateClock, 3000);


    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        slides.forEach(function (item) {
            return item.style.display = 'none';
        });
        slides[slideIndex - 1].style.display = 'block';
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function updateClock() {
        plusSlides(1);
    }
}


module.exports = slider;