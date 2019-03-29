"use strict";

function modal() {

  //let more = document.querySelector('.more');
  let overlay = document.querySelector('.popup-design');
  let close = document.querySelectorAll('.popup-close');
  let descriptionBtn = document.querySelectorAll('.button-design');

  for (let i = 0; i < descriptionBtn.length; i++) {
    descriptionBtn[i].addEventListener('click', function () {
      overlay.style.display = 'block';
      //   this.classList.add('more-splash');
      //  document.body.style.overflow = 'hidden';
    });
  }
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function () {
      console.log(2);
      overlay.style.display = 'none';
      document.body.style.overflow = '';
    });
  }

}
// module.exports = modal;
export default modal;
