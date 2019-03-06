'use strict';
let money, time;
let optionalExpenses = {};

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}

// start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");

            if (typeof (a) === "string" && typeof (a) != null &&
                typeof (b) === "string" && typeof (b) != null &&
                a != "" && b != "" && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Бюджет на 1 день: " + appData.moneyPerDay + " руб");
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка")
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Передана какая-то кабала");
        }
    },
    checkSaving: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {
            let a = prompt("Статья необязательных расходов?", "");
            optionalExpenses[i] = a;
        }
    },
    chooseIncome: function () {
        for (let i = 0; i < 1; i++) {
            let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
            if (typeof (items) === "string" && typeof (items) != null && items != "") {
                appData.income = items.split(', ');
            } else {
                i--;
            }
        }
        for (let i = 0; i < 1; i++) {
            let itemsTwo = prompt("Может что-то еще?)", "");
            if (typeof (itemsTwo) === "string" && typeof (itemsTwo) != null && itemsTwo != "") {
                appData.income.push(itemsTwo);
            } else {
                i--;
            }
        }
        appData.income.sort();
        console.log("Способы доп. заработка: ");
        appData.income.forEach(function(item, i){
            console.log(i+1 + " " + item );
        });
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + appData[key])
}



// chooseExpenses();
// detectDayBudget();
// detectLevel();
// checkSaving();
// chooseOptExpenses();


console.log(appData);
console.log(optionalExpenses);

