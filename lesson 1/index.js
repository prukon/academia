'use strict';
var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");
var firstExpenses = prompt("Введите обязательную статью расходов в этом месяце");
var answerOne = +prompt("Во сколько обойдется?");

var secondExpenses = prompt("Введите обязательную статью расходов в этом месяце");
var answerTwo = +prompt("Во сколько обойдется?");


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

appData.expenses[firstExpenses] = answerOne;
appData.expenses[secondExpenses] = answerTwo;


console.log(appData);
let budjet = appData.budget/30;

alert("Бюджет на 1 день: " + budjet + " Руб");