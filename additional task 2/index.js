let hidden = document.querySelector(".popup__call-phone-hidden"),
    visible = document.querySelector(".popup__call-phone"),
    allWrap =  document.querySelectorAll(".popup__call-phoneblock"),
    wrap = document.querySelector(".popup__call-wrap"),
    visibility = 0,
    popupCallSvg = document.querySelector(".popup__call-svg"),
    number0,
    number1,
    country,
    countryDom0,
    countryDom1,
    countryDom =  document.querySelectorAll(".popup__call-country");
wrap.addEventListener('click', function () {
    if (visibility) {
        hidden.style.visibility = "hidden";
        visibility = 0;
        popupCallSvg.style.transform = 'rotate(' + 0 + 'deg)';
    } else {
        hidden.style.visibility = "";
        visibility = 1;
        popupCallSvg.style.transform = 'rotate(' + 180 + 'deg)';
         number = hidden.firstElementChild.placeholder;
    }
})
hidden.addEventListener('click', function () {
    hidden.style.visibility = "hidden";
    number0 = visible.firstElementChild.placeholder;
    number1 = hidden.firstElementChild.placeholder;
    visible.firstElementChild.placeholder = number1;
    hidden.firstElementChild.placeholder = number0;
    countryDom0 = countryDom[0].textContent;
    countryDom1 = countryDom[1].textContent;
    countryDom[0].textContent = countryDom1;    
    countryDom[1].textContent = countryDom0;   
    visibility = 0;
    popupCallSvg.style.transform = 'rotate(' + 0 + 'deg)';  
})
