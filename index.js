'use strict';

let second = 2;
var leftBorderWidth = 1;
const pi = 3.14;
var sym = Symbol();
var n = null;
var u = undefined;
var obj = {};
var person = {
    name: "John",
    age: 25,
    isMaried: false
};
// console.log(person.name);
// console.log(person["name"]);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
// console.log(arr[2]);
// alert("Hello World");

// let answer = confirm("are you here?");
// console.log(answer);

// let answer = +prompt("have you 18 years old?", "Yes");
//  console.log(typeof(answer));

// console.log(typeof(arr));
// console.log(typeof(null));
// console.log(typeof(undefined));

// console.log("arr" + " - object");
// console.log(typeof("arr" + " - object"));


let incr = 10,
    decr = 10;
// incr++;
// decr--;
// console.log(++incr);
// console.log(--decr);

// console.log(incr++);
// console.log(decr--);
// console.log(5%2);

// console.log("2"==2);

let isChecked = true,
    isClose = false;

console.log(isChecked && isClose);
console.log(isChecked || isClose);
console.log(isChecked || (isClose = 2));
console.log(isClose);

// 'use strict';



var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");
var firstExpenses = prompt("Введите обязательную статью расходов в этом месяце");
var answerOne = +prompt("Во сколько обойдется?");

var secondExpenses = prompt("Введите обязательную статью расходов в этом месяце");
var answerTwo = +prompt("Во сколько обойдется?");


let appData = {
    budget: money,
    timeData: time,
    expenses: {
        firstExpenses: answerOne,
        secondExpenses: answerTwo,
    },
    optionalExpenses: {},
    income: [],
    savings: false
};
console.log(appData);

let curBidget = (appData.budget - (appData.expenses.firstExpenses + appData.expenses.secondExpenses))/30;
alert("Бюджет на 1 день: " + curBidget + " руб"); 