"use strict";

function filter() {
    let portfolioMenu = document.querySelector(".portfolio-menu");
    let portfolioWrapper = document.querySelectorAll('.portfolio-wrapper div');
    let portfolioNo = document.querySelector(".portfolio-no");

    portfolioMenu.addEventListener('click', function (event) {

        if (event.target.textContent == 'Все работы') {
            showPortfolio("all");
        } else if (event.target.textContent == 'Для влюбленных') {
            showPortfolio("lovers");
        } else if (event.target.textContent == 'Для шефа') {
            showPortfolio("chef");
        } else if (event.target.textContent == 'Для девушки') {
            showPortfolio("girl");
        } else if (event.target.textContent == 'Для парня') {
            showPortfolio("guy");
        } else if (event.target.textContent == 'Для бабушки') {
            hidePortfolio();
        } else if (event.target.textContent == 'Для дедушки') {
            hidePortfolio();
        }
    });

    function showPortfolio(className) {
        for (let i = 0; i < portfolioWrapper.length; i++) {
            portfolioWrapper[i].style.display = "";
            portfolioNo.style.display = "none";
            if (portfolioWrapper[i].classList.contains(className)) {} else {
                portfolioWrapper[i].style.display = "none";
            }
        }
    }

    function hidePortfolio() {
        for (let i = 0; i < portfolioWrapper.length; i++) {
            portfolioWrapper[i].style.display = "none";
            portfolioNo.style.display = "block";
        }
    }
}
export default filter;