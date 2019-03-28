'use strict';

// let timerLd = setTimeout(sayHello, 3000);
// clearTimeout(timerLd); //отмена вызова 

// let timerLd = setInterval(sayHello, 3000);
// clearTimeout(timerLd);

// function sayHello(){
//     alert("Hello, World");
// }

// function sayHello(){
// console.log("hello, world")
//  }


// //ресурсивный вызов setTimeout
// let timerLd = setTimeout(function log(){
//     console.log("hello");
//     setTimeout(log, 2000)
// }, 3000);

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnimation() {
    let pos = 0;
    let id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener.length('click', myAnimation);

//дегегирование
let btnBlock = document.querySelector('.btn-block'),
btns = document.getElementsByTagName('button');
btnBlock.addEventListener('click',function(event){
if(event.target && event.target.target == 'BUTTON'){
    if(event.target && event.target.matches('button.first')){

//if(event.target && event.сlassList.contains('first')){

    console.log(333);
}}
})