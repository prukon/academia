let allListMenu = document.querySelectorAll('.menu li'),
    menu = document.querySelector('.menu'),
    mainTitle = document.querySelector('#title'),
    textArea = document.querySelector('#prompt'),
    adv = document.querySelector('.adv'),
    allColumn = document.querySelectorAll('.column'),
    clienMassage = prompt("Какое у вас отношение к технике Apple?", ""),
     li;
     
menu.replaceChild(allListMenu[2], allListMenu[1]);
menu.removeChild(allListMenu[3]);
AddLi("Третий элемент");
AddLi("Четвертый элемент");
AddLi("Пятый элемент");


document.body.style.background = 'url(img/apple_true.jpg) 100% 100% no-repeat';
mainTitle.textContent = 'Мы продаем только подлинную технику Apple';
allColumn[1].removeChild(adv);
textArea.textContent = clienMassage;


function AddLi(className) {
    li = document.createElement('li');
    li.textContent = className;
    li.classList.add('menu-item');
    menu.appendChild(li);
}