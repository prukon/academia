window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    let hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };
    hideTabContent(1);

    let showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };
    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                }
            }
        }
    });
});
let deadline = '2019-03-18';

let getTimeRemaining = (endtime) => {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor((t / (1000 * 60 * 60)));
    // hours = Math.floor((t / 1000 / 60 / 60) % 24),
    // days = Math.floor((t / (1000 * 60 * 60 * 24)));
    return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
};

let setClock = (id, endtime) => {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        let t = getTimeRemaining(endtime);
        hours.textContent = t.hours;
        minutes.textContent = t.minutes;
        seconds.textContent = t.seconds;


        if (hours.textContent.length == 1) {
            hours.textContent = `0 ${hours.textContent}`;
        }
        if (minutes.textContent.length == 1) {
            minutes.textContent = `0 ${minutes.textContent}`;
        }

        if (seconds.textContent.length == 1) {
            seconds.textContent = `0 ${seconds.textContent}`;
        }


        if (hours.textContent < 0) {
            hours.textContent = '00';
        }

        if (hours.textContent < 0) {
            hours.textContent = '00';
        }
        if (minutes.textContent < 0) {
            minutes.textContent = '00';
        }
        if (seconds.textContent < 0) {
            seconds.textContent = '00';
        }
        //  console.log(hours.textContent)
        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
};

setClock('timer', deadline);

//Modal
let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close'),
    descriptionBtn = document.querySelectorAll('.description-btn');

more.addEventListener('click', function (){
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
});

for (let i = 0; i < descriptionBtn.length; i++) {
    descriptionBtn[i].addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
}
close.addEventListener('click', () => {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';

});

let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так'
};
let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div'),
    phone = document.querySelectorAll('.phone'),
    form2 = document.querySelector('#form');

statusMessage.classList.add('status');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.appendChild(statusMessage);
    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    // request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    let formData = new FormData(form);
    console.log(formData);
    //преобразование в JSON
    let obj = {};
    formData.forEach(function (value, key) {
        obj[key] = value;
    });
    let json = JSON.stringify(obj);
    // request.send(formData);
    request.send(json);
    request.addEventListener('readystatechange', () => {
        if (request.readyState < 4) {
            statusMessage.innerHTML = message.loading;
        } else if (request.readyState === 4 && request.status == 200) {
            statusMessage.innerHTML = message.success;
        } else {
            statusMessage.innerHTML = message.failure;
        }
    });
    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
    }
});


form2.addEventListener('submit', (event) => {
   event.preventDefault();
    form2.appendChild(statusMessage);
    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    // request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    let formData = new FormData(form2);
    //console.log(formData);
    //преобразование в JSON
    let obj = {};
    formData.forEach(function (value, key) {
        obj[key] = value;
    });
    let json = JSON.stringify(obj);
    // request.send(formData);
    request.send(json);
    request.addEventListener('readystatechange', () => {
        if (request.readyState < 4) {
            statusMessage.innerHTML = message.loading;
        } else if (request.readyState === 4 && request.status == 200) {
            statusMessage.innerHTML = message.success;
        } else {
            statusMessage.innerHTML = message.failure;
        }
    });
    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
    }
});


for (let i = 0; i< phone.length; i++){
    phone[i].addEventListener('input', function () {
        phone[i].value = phone[i].value.replace(/[^+0-9]/g, "");
    });
}
