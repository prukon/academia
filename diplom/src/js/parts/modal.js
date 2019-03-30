"use strict";

function modal() {

  //let more = document.querySelector('.more');
  let overlay = document.querySelector('.popup-design');
  let popupConsultation = document.querySelector('.popup-consultation');
  let close = document.querySelectorAll('.popup-close');
  let getDesignInput = document.querySelectorAll('.getDesign input');
  let getDesignTextarea = document.querySelector('.getDesign textarea');
  let orderBtn = document.querySelectorAll('.button-design');
  let descriptionBtn = document.querySelectorAll('.button-consultation');
  let insideForm = document.querySelector('.getDesign .main-form');
  let insideFormH4 = document.querySelector('.getDesign h4');
  let insideFormFile = document.querySelector('.getDesign .file_uploa');
  let status = document.querySelector('.status');
  let popupDesign = document.querySelector('.popup-design');

  let fixedGift = document.querySelector('.fixed-gift');
  let popupGift = document.querySelector('.popup-gift');

  







  for (let i = 0; i < orderBtn.length; i++) {
    orderBtn[i].addEventListener('click', function () {
      overlay.style.display = 'block';
      //   this.classList.add('more-splash');
      //  document.body.style.overflow = 'hidden';
    });
  }
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function () {
      overlay.style.display = 'none';
      popupConsultation.style.display = 'none';
      popupGift.style.display = 'none';
      
 //     document.body.style.overflow = '';
      insideForm.style.display = "block";
      insideFormH4.style.display = "block";
      insideFormFile.style.display = "block";

      for (let i = 0; i < getDesignInput.length; i++) {
        getDesignInput[i].value = "";
      }
      getDesignTextarea.value = "";
    });
  }


  popupDesign.addEventListener('click', function () {
    // overlay.style.display = 'none';
    // popupConsultation.style.display = 'none';
    // document.body.style.overflow = '';
    // insideForm.style.display = "block";
    // insideFormH4.style.display = "block";
    // insideFormFile.style.display = "block";

    // for (let i = 0; i < getDesignInput.length; i++) {
    //   getDesignInput[i].value ="";
    // }
    // getDesignTextarea.value = "";
    console.log(1);
  });

  for (let i = 0; i < descriptionBtn.length; i++) {
    descriptionBtn[i].addEventListener('click', function () {
      popupConsultation.style.display = 'block';
      //   this.classList.add('more-splash');
      //  document.body.style.overflow = 'hidden';
    });
  }

  //подарок
  fixedGift.addEventListener('click', function () {
    fixedGift.style.display = 'none';
    popupGift.style.display = 'block';

  });


}
// module.exports = modal;



export default modal;