let box = document.getElementById('box'),
    btn = document.getElementsByClassName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.wrapper . heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('')

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';


for (let i = 0; i<heart.length; i++){
heart[i].style.backgroundColor = 'blue';
}

heart.forEach(function(item,i, hearts){
item.style.backgroundColor = 'blue';
});


let div = document.createElement('div'); //создание элемента
text = document.createTextNode("Тут был я"); //Добалвение текста
div.classList.add('black'); //добавление класса
document.body.appendChild(div); //добалвение элемента (после)
wrapper.appendChild(div);
document.body.insertBefore(div, circle[0]); //добалвение элемента (до)
document.body.removeChild(circle[1]); //удаление элемента
document.body.replaceChild(btn[1],circle[2]); //замена элемента

div.innerHTML = '<h1>Hello, World!</h1>'; //Добавление текста
div.textContent = 'Hello, World!';

console.log(div);

'use strict';
let btn = document.querySelectorAll('button');
let wrap = document.querySelector(".wrapper");
let link = document.querySelector('a');
// btn[0].onclick = function() {
//     console.log('Вы нажали первую кнопку');
// };



// btn[0].addEventListener('click',function(){
//     alert('Вы нажали первую кнопку');
// });

// btn[0].addEventListener('click',function(){
//     alert('Вы опять нажали на первую кнопку');
// });

// btn[0].addEventListener('mouseenter',function(){
//     alert('Наведение');
// });

btn[0].addEventListener('click',function(event){
    console.log(event)
    let target = event.target;
    target.style.display = 'none'; //скрытие по клику
    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target)
});

wrap.addEventListener('click',function(){
    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target)
})
link.addEventListener('click', function(event){
    event.preventDefault(); //отмена стандартного поведения в браузере
    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target)
});
btn.forEach(function(item){
    item.addEventListener('mouseleave', function(){
        console.log('Мы вышли!'); //сообщение для маусовер для всех кнопок
    })
})