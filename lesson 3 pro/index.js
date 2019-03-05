'use strict';

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
        sqr = Math.sqrt(newArr);
    }
}
console.log(sqr); //4 часть



function func(a) {
    if (typeof a != "string") {
        alert("Передана не строка");
    } else {
        a = a.trim();
        if (a.length > 50) {
            a = a.substr(0, 50);
            a = a + "...";
        }
    }
    console.log(a);
}
func(" Этот инструмент является отличным помощником, кстати, всем привет! "); //5 часть