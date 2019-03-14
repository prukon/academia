

let box = document.querySelector('.box');
let btn = document.addEventListener('click', function(){
    box.style.height = box.scrollHeight +'px';
})
let width = box.clientWidth;
let height = box.clientHeight;

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect().left);

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollTop); //размер скрола





btn.addEventListener('click', function(){
    box.scrollTop = 0;
})

scrollBy(0,200); //перемещение по координатам от текущего места
scrollTo(0,200); //перемещение по координатам от начала координат