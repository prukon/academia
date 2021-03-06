//"use strict";
function form() {
	let message = {
		loading: 'Идет отправка...',
		success: 'Отправлено',
		failure: 'Ошибка'
	};

	let form = document.querySelector('.modalForm');
	let input = form.getElementsByTagName('input');
	let statusMessage = document.createElement('div');
	let insideForm = document.querySelector('.getDesign .main-form');
	let insideFormH4 = document.querySelector('.getDesign h4');
	let insideFormFile = document.querySelector('.getDesign .file_uploa');
	let phone = document.querySelectorAll('.phone-number');
	let commentValue = document.querySelectorAll('.comment-value');
	let name = document.querySelectorAll('.name-value');
	//  form2 = document.querySelector('#form'),
	//   popup = document.querySelector('.popup');
	statusMessage.classList.add('status');
	function sendForm(elem) {
		elem.addEventListener('submit', function (event) {
			if (elem.classList.contains('modalForm')) {
				event.preventDefault();
				elem.appendChild(statusMessage);
				let formData = new FormData(elem);
				let obj = {};
				formData.forEach(function (value, key) {
					obj[key] = value;
				});
				// for(let i=0; i<formData.length;i++){
				//   obj[i] = formData[i];
				// };
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

				postData(json).then(function () {
					return statusMessage.innerHTML = message.loading;
				}).then(function () {
					insideForm.style.display = "none";
					insideFormH4.style.display = "none";
					insideFormFile.style.display = "none";
					statusMessage.innerHTML = message.success;

				}).catch(function () {
					insideForm.style.display = "none";
					insideFormH4.style.display = "none";
					insideFormFile.style.display = "none";
					return statusMessage.innerHTML = message.failure;
				}).then(ClearInput);
			}
		});
	}

	function validPhone(i) {
		phone[i].addEventListener('input', function () {
			phone[i].value = phone[i].value.replace(/[^0-9]/g, "").slice(0, 11);
		});
	};

	for (let i = 0; i < phone.length; i++) {
		validPhone(i);
	}

	function validName(i) {
		name[i].addEventListener('input', function () {
			name[i].value = name[i].value.replace(/[^А-я]/g, "");
		});
	};

	for (let i = 0; i < name.length; i++) {
		validName(i);
	}

	function validComment(i) {
		commentValue[i].addEventListener('input', function () {
			commentValue[i].value = commentValue[i].value.replace(/[A-z]/g, "");
		});
	};
	for (let i = 0; i < commentValue.length; i++) {
		validComment(i);
	}

	sendForm(form);
	// sendForm(form2);
}

// module.exports = form;

export default form;