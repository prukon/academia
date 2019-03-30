"use strict";

function addMore() {
    let buttonStyles = document.querySelector('.button-styles');
    let hideStiles = document.querySelectorAll('.styles-2');
        buttonStyles.addEventListener('click', function () {
            buttonStyles.style.display = "none";
            for (let i = 0; i < hideStiles.length; i++) {
                hideStiles[i].classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs");
                hideStiles[i].classList.add('col-sm-3','col-sm-offset-0','col-xs-10','col-xs-offset-1');
            }
        });
}
export default addMore;