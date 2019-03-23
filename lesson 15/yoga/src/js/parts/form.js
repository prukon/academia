function form() {
    let message = {
            loading: 'Загрузка...',
            success: 'Спасибо! Скоро мы с вами свяжемся',
            failure: 'Что-то пошло не так'
        },
        form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        phone = document.querySelectorAll('.phone'),
        form2 = document.querySelector('#form'),
        popup = document.querySelector('.popup');

    statusMessage.classList.add('status');

    function sendForm(elem) {
        elem.addEventListener('submit', function (event) {
            event.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(elem);

            let obj = {};
            formData.forEach(function (value, key) {
                obj[key] = value;
            });
            let json = JSON.stringify(obj);

            function postData(data) {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve();
                            console.log('1');
                        } else if (request.readyState === 4) {
                            if (request.status == 200) {
                                resolve();
                                console.log('2');
                            } else {
                                reject();
                                console.log('3');
                            }
                        }
                    };
                    request.send(data);
                });
            } //end postData
            function ClearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }
            postData(json)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => {
                    statusMessage.innerHTML = message.success;
                })
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(ClearInput);
        });
    }
    for (let i = 0; i < phone.length; i++) {
        phone[i].addEventListener('input', function () {
            phone[i].value = phone[i].value.replace(/[^+0-9]/g, "");
        });
    }

    sendForm(form);
    sendForm(form2);

}
module.exports = form;