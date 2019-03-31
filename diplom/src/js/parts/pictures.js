"use strict";

function pictures() {
    let sizesBlock = document.querySelectorAll('.sizes-block');

//Добавляем
    sizesBlock[0].addEventListener('mouseover', function () {
        showPictures(0, "img/sizes-1-1.png",true);
    });
    sizesBlock[1].addEventListener('mouseover', function () {
        showPictures(1, "img/sizes-2-1.png",true);
    });
    sizesBlock[2].addEventListener('mouseover', function () {
        showPictures(2, "img/sizes-3-1.png",true);
    });
    sizesBlock[3].addEventListener('mouseover', function () {
        showPictures(3, "img/sizes-4-1.png",true);

    });

//убираем
    sizesBlock[0].addEventListener('mouseout', function () {
        showPictures(0, "img/sizes-1.png",false);
    });
    sizesBlock[1].addEventListener('mouseout', function () {
        showPictures(1, "img/sizes-2.png",false);
    });
    sizesBlock[2].addEventListener('mouseout', function () {
        showPictures(2, "img/sizes-3.png",false);
    });
    sizesBlock[3].addEventListener('mouseout', function () {
        showPictures(3, "img/sizes-4.png",false);
    });


    function showPictures(number, url,type){
        sizesBlock[number].children[0].src = url;
        sizesBlock[number].children[1].hidden=type;
        sizesBlock[number].children[2].hidden=type;
        sizesBlock[number].children[3].hidden=type;
    }


}
export default pictures;