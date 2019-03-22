'use strict';
let drink = 0;
// function shoot(arrow, headshot, fail){
//     console.log("Вы сделали выстрел");
//     setTimeout(function(){
//         Math.random() > .5 ? headshot({}) : fail("Вы промахнулись");
//     }, 1000)
// };
// function win() {
//     console.log('Вы победили!');
//     (drink == 1) ? buyBeer(): giveMoney();
// }
// function buyBeer() {
//     console.log('Вам купили пиво!');
// }
// function lose() {
//     console.log('Вы проиграли!');
// }
// function giveMoney() {
//     console.log('Вам заплатили!');
// }
// shoot({},
//     function (mark) {
//         console.log('Вы попали в цель!');
//         win(mark, buyBeer, giveMoney);
//     },
//     function (miss) {
//         console.error(miss);
//         lose();
//     })
function shoot(arrow) {
    console.log("Вы сделали выстрел");
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > .5 ? resolve({}) : reject("Вы промахнулись");
        }, 1000)
    });
    return promise;
};
function win() {
    console.log('Вы победили!');
    (drink == 1) ? buyBeer(): giveMoney();
}
function buyBeer() {
    console.log('Вам купили пиво!');
}
function lose() {
    console.log('Вы проиграли!');
}
function giveMoney() {
    console.log('Вам заплатили!');
}
shoot({})
    .then(mark => console.log('Вы попали в цель!'))
    .then(win)
    .catch(lose)