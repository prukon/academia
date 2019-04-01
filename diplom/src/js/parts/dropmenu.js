"use strict";

function dropmenu() {
    let accordion = document.querySelector('#accordion');
    let accordionHeading = document.querySelectorAll('.accordion-heading');
    let text = document.querySelectorAll('.accordion-block');
    for (let i = 0; i < accordionHeading.length; i++) {
        text[i].style.display = 'none';
    }
    accordion.addEventListener('click', function (event) {
        for (let i = 0; i < accordionHeading.length; i++) {
            accordionHeading[i].classList.remove('ui-accordion-header-active');
                  text[i].style.display = 'none';
        }
         if(event.path[1].tagName == "P"){
        event.path[1].classList.add("ui-accordion-header-active");
    }
        event.path[1].nextSibling.nextSibling.classList.add('animated', 'fadeInUp');
        event.path[1].nextSibling.nextSibling.style.display = 'block';
    });
}
export default dropmenu;