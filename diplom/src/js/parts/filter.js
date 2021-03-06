"use strict";

function filter() {
    let portfolioMenu = document.querySelector(".portfolio-menu");
    let portfolioItems = document.querySelectorAll(".portfolio-menu li");
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
        for (let i = 0; i < portfolioItems.length; i++) {
            portfolioItems[i].classList.remove('active');
            }
        for (let i = 0; i < portfolioWrapper.length; i++) {
            portfolioWrapper[i].style.display = "";
            portfolioNo.style.display = "none";
            if (portfolioWrapper[i].classList.contains(className)) {
                event.path[0].classList.add('active');
            } else {
                portfolioWrapper[i].style.display = "none";
            }
        }
    }

    function hidePortfolio() {
        for (let i = 0; i < portfolioItems.length; i++) {
            portfolioItems[i].classList.remove('active');
            }
        for (let i = 0; i < portfolioWrapper.length; i++) {
            portfolioWrapper[i].style.display = "none";
            portfolioNo.style.display = "block";
            event.path[0].classList.add('active');
        }
    }
}
export default filter;