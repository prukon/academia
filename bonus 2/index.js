// // касание элемента
// touchstart
// // прикосновение и перемещение
// touchmove
// // прикосновение и перемещение и отпускание
// touchend
// //палец зашел на элемент
// touchennter
// //палец ушел с элемента
// touchleave
// //палец не регистрируется в браузере
// touchcancel

window.addEventListener('DomContentLoaded', function () {
    let box = document.querySelector('.box');
    box.addEventListener('touchstart', function (e) {
        e.preventDefault();
        console.log("Red box:touchstart");
        console.log(e.target); //получить элемент в который тыкнули
        console.log(e.touches);
        console.log(e.touches[0].target);
        console.log(e.changedTouches);
        console.log(e.targetTouches);
    })
    box.addEventListener('touchmove', function (e) {
        e.preventDefault();
        console.log("Red box: " + e.touches[0].pageX); 
    })
    box.addEventListener('touchend', function (e) {
        e.preventDefault();
        console.log("Red box:touchend");
    })
})

// new RegExp('paпетgtnttern', 'flags');
// /pattern/
let ans = prompt('Введите ваше имя');
let reg = /n/i;
// console.log(ans.search(reg));
// let reg = /n/g;
// console.log(ans.match(reg));
// let pass = prompt("Введите пароль");
// console.log(pass.replace(/./g,"*"));
// alert('12-34-56'.replace(/-/g,':'));    
// console.log(reg.test(ans));
// Флаг регистра
//i 
// Ищем глобально
//g
// Многострочно
//m
// //цифры
// \d
// // слова
// \w
// // пробелы
// \s


// let ans = prompt('Введите число');
// let reg  = /\d/g;
// console.log(ans.match(reg));
// let str = 'Mu name us R2D2';
// console.log(str.match(/\w\d\w\d/i));
