'use strict';
//получение элемента
document.getElementById('btn');
$('#btn');


//добавление и удаление класса при наведении
$(document).ready(function () {
    $('.list-item:first').hover(function () {
        $(this).toggleClass('active');
    });
    //готовая анимация при клике
    $('.list-item:eq(2)').on('click', function () {
        $('image:even').fadeToggle('slow');
    });

    $('.list-item:eq(4)'.on('click', function () {
        $('image:odd').animate(
            {
                opacity:'toogle',
                height:'toogle'
            }, 3000
        );
    }));

});

// document.querySelectorAll('.lsit').forEach();
// .classlist
// .addEventListener
// $.ajax - fetch
// anitations

 //Angular
// 1. Node.js -> npm пакеты
// 2. TypeScript
// 3. Webpack (сборщик модулей)
// 4. MVC (modal, view, controller)
// 5. Angular

// React
// 1. Node.js -> npm пакеты
// 2. Babel
// 3. JSX препроцессор
// 4. Webpack (сборщик модулей)
// 5. React

//Vue
// 1. Node.js -> npm пакеты
// 2. Babel
// 3. Webpack (сборщик модулей)