'use strict';

let money = +prompt("Ваш бюджет на месяц?");
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
                b = prompt("Во сколько обойдется?", "");

        if (typeof (a) === "string" && typeof (a) != null &&
                typeof (b) === "string" && typeof (b) != null &&
                a != "" && b != "" && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
        } else {

        }
};



appData.moneyPerDay = appData.budget / 30;

alert("Бюджет на 1 день: " + appData.moneyPerDay + " руб");

if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
} else {
        console.log("Передана какая-то кабала");
}


// switch (true) { 
//     case appData.moneyPerDay < 100:
//     console.log("Минимальный уровень достатка");
//     break;
//  case appData.moneyPerDay > 100 && appData.moneyPerDay < 2000:
//  console.log("Средний уровень достатка");
//  break;
//  case appData.moneyPerDay > 2000:
//  console.log("Высокий уровень достатка");
//  break;55
//     default:
//     console.log("Передана какая-то кабала");
// }
    
    
// (appData.moneyPerDay < 100) ? console.log("Минимальный уровень достатка") :
// (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) ? console.log("Средний уровень достатка") :
// (appData.moneyPerDay > 2000) ? console.log("Высокий уровень достатка") :  console.log("Передана какая-то кабала");


console.log(appData);

