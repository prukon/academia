'use strict';

// let money, time;
// let optionalExpenses = {};

// function start() {
//     money = +prompt("Ваш бюджет на месяц?");
//     time = prompt("Введите дату в формате YYYY-MM-DD");

//     while (isNaN(money) || money == "" || money == null) {
//         money = +prompt("Ваш бюджет на месяц?");
//     }
// }

// // start();

// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     savings: true
// };

// // chooseExpenses();
// // detectDayBudget();
// // detectLevel();
// // checkSaving();
// // chooseOptExpenses();

// function chooseExpenses(){
//     for (let i = 0; i < 2; i++) {
//         let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//             b = prompt("Во сколько обойдется?", "");

//         if (typeof (a) === "string" && typeof (a) != null &&
//             typeof (b) === "string" && typeof (b) != null &&
//             a != "" && b != "" && a.length < 50) {
//             console.log("done");
//             appData.expenses[a] = b;
//         } else {
//             i--;
//         }
//     };
// }
// function detectDayBudget(){
//     appData.moneyPerDay = (appData.budget / 30).toFixed();
//     alert("Бюджет на 1 день: " + appData.moneyPerDay + " руб");
// }
// function detectLevel(){
//     if (appData.moneyPerDay < 100) {
//         console.log("Минимальный уровень достатка")
//     } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//         console.log("Средний уровень достатка");
//     } else if (appData.moneyPerDay > 2000) {
//         console.log("Высокий уровень достатка");
//     } else {
//         console.log("Передана какая-то кабала");
//     }
// }
// function checkSaving(){
//     if(appData.savings == true) {
//         let save = +prompt("Какова сумма накоплений?"),
//         percent = +prompt("Под какой процент?");
//         appData.monthIncome = save/100/12*percent;
//         alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
//     }
// }

// function chooseOptExpenses(){
//     for (let i = 1; i<4;i++){
//     let a = prompt("Статья необязательных расходов?", "");
//     optionalExpenses[i]=a;
// }
// }



// console.log(appData);
// console.log(optionalExpenses);


let newString;
let str = "урок-3-был слишком легким";
str = str[0].toUpperCase() + str.substring(1);
console.log(str); //1 часть

function changeDefis(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "-") {
            count++
        }
    }
    for (let i = 0; i < count; i++) {
        str = str.replace("-", " ");
    }

    return str;
}
str = changeDefis(str);
console.log(str); //2 часть

str = str[19] + str[20] + str[21] + str[22] + str[23] + str[24];
str = str.replace("и", "о");
str = str.replace("м", "о");
console.log(str); //3 часть

let newArr = 0;
let sqr;
let arr = [20, 33, 1, "Человек", 2, 3];
for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
        console.log(arr[i]);

        newArr = newArr + Math.pow(arr[i], 3);
        sqr =  Math.sqrt(newArr);
    }
}
console.log(sqr); //4 часть

