'use strict';
var day = new Date();


let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

for (let i = 0; i < week.length; i++) {
    if (i == day.getDay() - 1) {
        if (i == 6 || i == 5) {
            document.write("<p style ='font-weight: 800; font-style: italic;'>" + week[i] + "</p>");
        } else {
            document.write("<p style =' font-style: italic;'>" + week[i] + "</p>");
        }
    } else {
        if (i == 6 || i == 5) {
            document.write("<p style ='font-weight: 800'>" + week[i] + "</p>");
        } else {
            document.write("<p>" + week[i] + "</p>");
        }
    }
}

let arr = [4.34, 2.44, 6.34, 9.12, 7.33, 3.91, 7.17];

for (let i = 0; i<arr.length; i++){
    var  now = arr[i];
    now = now + "";
    
    if(now[0] == 3 || now[0] == 7){
console.log(arr[i]);
}
}