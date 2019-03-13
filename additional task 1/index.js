// Необходимо реализовать автодополнение. При введении в инпут первых букв страны - появляется список стран, которые начинаются на те буквы, которые вы ввели. Чем больше букв вы вводите - тем меньше стран в списке. Страну можно выбрать, кликнув по ней мышкой - в этом случае ее название появится в инпуте.
// Массив со списком стран я уже сделал.

let content;
let curCountry;
let now;
let = giveCountries = [];
let = giveCountries1 = [];
let = giveCountries2 = [];
let = giveCountries3 = [];
let = giveCountries4 = [];
let = giveCountries5 = [];
let = giveCountries6 = [];

let list = document.querySelector('#list ul');

let countries = ["Австралия", "Австрия", "Азербайджан", "Албания", "Алжир", "Ангола",
	"Андорра", "Антигуа и Барбуда", "Антильские острова", "Аргентина", "Армения", "Афганистан",
	"Багамские острова", "Бангладеш", "Барбадос", "Бахрейн", "Белиз", "Белоруссия", "Бельгия", "Бенин",
	"Болгария", "Боливия", "Босния и Герцеговина", "Ботсвана", "Бразилия", "Буркина-Фасо", "Бурунди",
	"Бутан", "Вануату", "Ватикан", "Великобритания", "Венгрия", "Венесуэла", "Вьетнам", "Габон", "Гаити",
	"Гайана", "Гамбия", "Гана", "Гватемала", "Гвинея", "Гвинея-Бисау", "Германия", "Голландия", "Гондурас", "Гонконг", "Гренада", "Гренландия", "Греция", "Грузия", "Гуам", "Дания", "Демократическая Республика Конго", "Джибути", "Доминиканская республика", "Египет", "Замбия", "Западная Сахара", "Зимбабве", "Израиль", "Индия", "Индонезия", "Иордания", "Ирак", "Иран", "Ирландия", "Исландия", "Испания", "Италия", "Йемен", "Кабо-Верде", "Казахстан", "Камбоджа", "Камерун", "Канада", "Катар", "Кения", "Кипр", "Киргизия", "Кирибати", "Китай", "КНДР", "Колумбия", "Коморские острова", "Коста-Рика", "Кот-д'Ивуар", "Куба", "Кувейт", "Лаос", "Латвия", "Лесото", "Либерия", "Ливан", "Ливия", "Литва", "Лихтенштейн", "Люксембург", "Маврикий", "Мавритания", "Мадагаскар", "Македония", "Малави", "Малайзия", "Мали", "Мальдивы", "Мальта", "Марокко", "Мартиника", "Мексика", "Микронезия", "Мозамбик", "Молдавия", "Монако", "Монголия", "Мьянма", "Намибия", "Непал", "Нигер", "Нигерия", "Никарагуа", "Новая Зеландия", "Новая Каледония", "Норвегия", "ОАЭ", "Оман", "Пакистан", "Палестина", "Панама", "Папуа-Новая Гвинея", "Парагвай", "Перу", "Польша", "Португалия", "Пуэрто-Рико", "Республика Конго", "Республика Корея", "Россия", "Руанда", "Румыния", "Сальвадор", "Сан-Марино", "Сан-Томе и Принсипи", "Саудовская Аравия", "Свазиленд", "Сенегал", "Сент-Китс и Невис", "Сент-Люсия", "Сербия", "Сингапур", "Сирия", "Словакия", "Словения", "Соломоновы острова", "Сомали", "Судан", "Суринам", "США", "Сьерра-Леоне", "Таджикистан", "Таиланд", "Тайвань", "Танзания", "Того", "Тонга", "Тринидад и Тобаго", "Тунис", "Туркменистан", "Турция", "Уганда", "Узбекистан", "Украина", "Уругвай", "Фиджи", "Филиппины", "Финляндия", "Франция", "Французская Гвиана", "Хорватия", "Центральноафриканская Республика", "Чад", "Черногория", "Чехия", "Чили", "Швейцария", "Швеция", "Шри-Ланка", "Эквадор", "Экваториальная Гвинея", "Эритрея", "Эстония", "Эфиопия", "ЮАР", "Ямайка", "Япония"
];
let country = document.querySelector('#country');
country.addEventListener('input', function (event) {
	changeContent()
	if (content.length == 1) {
		giveCountries = []
		for (let i = 0; i < countries.length; i++) {
			if (countries[i][0] == content[0]) {
				giveCountries.push(countries[i]);
			}
		}
	}
	if (content.length == 2) {
		giveCountries1 = []
		giveCountries2 = []
		giveCountries3 = []
		giveCountries4 = []
		for (let i = 0; i < giveCountries.length; i++) {
			if (giveCountries[i][1] == content[1]) {
				giveCountries1.push(giveCountries[i]);
			}
		}
	}
	if (content.length == 3) {
		giveCountries2 = []
		giveCountries3 = []
		for (let i = 0; i < giveCountries1.length; i++) {
			if (giveCountries1[i][2] == content[2]) {
				giveCountries2.push(giveCountries1[i]);
			}
		}
	}
	if (content.length == 4) {
		giveCountries3 = []
		for (let i = 0; i < giveCountries2.length; i++) {
			if (giveCountries2[i][3] == content[3]) {
				giveCountries3.push(giveCountries2[i]);
			}
		}
	}
	if (content.length == 5) {
		giveCountries4 = []
		for (let i = 0; i < giveCountries3.length; i++) {
			if (giveCountries3[i][4] == content[4]) {
				giveCountries4.push(giveCountries3[i]);
			}
		}
	}

	clearList(giveCountries1)
	clearList(giveCountries2)
	clearList(giveCountries3)
	clearList(giveCountries4)

	if (content == 0) {
		list.textContent = [];
	}
})

function changeContent() {
	if (country.value) {
		content = country.value
	} else content = 0;
}

function clearList(a) {
	if (a.length) {

		var myNode = document.querySelector('#list ul')
		while (myNode.firstChild) {
			myNode.removeChild(myNode.firstChild);
		}
		for (let i = 0; i < a.length; i++) {
			var newLi = document.createElement('li');
			newLi.innerHTML = a[i];
			list.appendChild(newLi);
		}
		curCountry = document.querySelectorAll('#list ul li');
		for (let i = 0; i < curCountry.length; i++) {
			now = curCountry[i];
			now.addEventListener('click', function () {
				country.value = curCountry[i].outerText;

				var myNode = document.querySelector('#list ul')
				while (myNode.firstChild) {
					myNode.removeChild(myNode.firstChild);
				}
			})

		}

	}
}
function autoComplit(a, b) {
	if (content.length == b) {
		giveCountries1 = []
		giveCountries2 = []
		giveCountries3 = []
		for (let i = 0; i < giveCountries.length; i++) {
			if (giveCountries[i][a] == content[a]) {
				giveCountries1.push(giveCountries[i]);
			}
		}
	}
}

