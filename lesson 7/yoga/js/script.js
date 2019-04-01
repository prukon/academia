// window.addEventListener('DOMContentLoaded', function () {
// 'use strict';
//     let tab = document.querySelectorAll('.info-header-tab'),
//         info = document.querySelector('.info-header'),
//         tabContent = document.querySelectorAll('.info-tabcontent');

//     function hideTabContent(a) {
//         for (let i = a; i < tabContent.length; i++) {
//             tabContent[i].classList.remove('show');
//             tabContent[i].classList.add('hide');
//         }
//     }
//     hideTabContent(1);

//     function showTabContent(b) {
//         if (tabContent[b].classList.contains('hide')) {
//             tabContent[b].classList.remove('hide');
//             tabContent[b].classList.add('show');
//         }
//     }
//     info.addEventListener('click', function (event) {
//         let target = event.target;
//         if (target && target.classList.contains('info-header-tab')) {
//             for (let i = 0; i < tab.length; i++) {
//                 if (target == tab[i]) {
//                     hideTabContent(0);
//                     showTabContent(i);
//                 }
//             }
//         }
//     })
// });



//Home Work

let date = new Date('Marth 10, 2018 23:15:30');



let timerLd = setInterval(sayHello, 1000);

function sayHello() {
    date = new Date();
    let hours = date.getHours(); //часы
    if (hours < 10) {
        hours = "0" + hours;
    }
    let minutes = date.getMinutes(); //минуты
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    let seconds = date.getSeconds(); //секунды
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    let setHours = document.querySelector('#hours');
    setMinutes = document.querySelector('#minutes');
    setSeconds = document.querySelector('#seconds');
    setHours.textContent = hours + ":";
    setMinutes.textContent = minutes + ":";;
    setSeconds.textContent = seconds;
}