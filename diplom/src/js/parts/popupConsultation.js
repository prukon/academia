"use strict";

function popupConsultation() {
    let popupConsultation = document.querySelector('.popup-consultation');

 setInterval(showModal, 60000);

function showModal(){
    popupConsultation.style.display = 'block';
  }

}
export default popupConsultation;