'use strict';
let num  = 33721; //1) Создать переменную num со значением 33721
num = num + "";
let result = num[0]*num[1]*num[2]*num[3]*num[4];

let result2 = result**3; //2) Полученный результат возвести в степень 3, используя только 1 оператор
let result3 = result2 +"";
result3  = result3[0] + result3[1]; 
console.log(result3);  // Вывести на экран первые 2 цифры полученного числа
