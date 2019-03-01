'use strict';

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};








for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = +prompt("Во сколько обойдется?", "");
        appData.expenses[a] = b;
}


let curBidget = (appData.budget - (appData.expenses.firstExpenses + appData.expenses.secondExpenses)) / 30;
alert("Бюджет на 1 день: " + curBidget + " руб");
console.log(appData);