let btnStart = document.getElementById('start'),
    blocksValue = document.querySelectorAll('.result-table div'),
    dataDiv = document.querySelectorAll('.expenses-item'),
    btnAccept = document.getElementsByTagName('button'),
    btnAcceptOne = btnAccept[0],
    btnAcceptTwo = btnAccept[1],
    calculate = btnAccept[2],
    someClasses = [],
    valueClasses = [],
    valueDiv = [],
    Optionalexpenses = document.querySelectorAll('.optionalexpenses-item'),
    income = document.querySelector('#income'),
    savings = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

    blocksValue.forEach(function (item, i, hearts) {
        someClasses.push(item.classList.item(0));
    });

for (let i = 0; i < someClasses.length; i++) {
    if (someClasses[i].indexOf('value') > 0) {
        valueClasses.push(someClasses[i]);
    }
}

blocksValue.forEach(function (item, i, hearts) {
    for (let j = 0; j < valueClasses.length; j++) {
        if (item.classList.contains(valueClasses[j])) {
            valueDiv.push(item);
        }
    }
});

console.log(btnStart); //2 - 1
console.log(valueDiv); //2 - 2
console.log(dataDiv); //2 - 3
console.log(btnAcceptOne); //2 - 4 (Утвердить)
console.log(btnAcceptTwo); //2 - 4 (Утвердить)
console.log(calculate); //2 - 4 (Расчитать)
console.log(Optionalexpenses); //2 - 5
console.log(income); //2 - 6
console.log(savings); //2 - 6
console.log(sum); //2 - 6
console.log(percent); //2 - 6
console.log(yearValue); //2 - 6
console.log(monthValue); //2 - 6
console.log(dayValue); //2 - 6

