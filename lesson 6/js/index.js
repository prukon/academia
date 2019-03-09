let btnStart = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    blocksValue = document.querySelectorAll('.result-table div'),
    expensesItem = document.querySelectorAll('.expenses-item'),
    btnAcceptOne = document.getElementsByTagName('button')[0],
    btnAcceptTwo = document.getElementsByTagName('button')[1],
    calculate = document.getElementsByTagName('button')[2],
    optionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
    income = document.querySelector('#income'),
    savings = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    money,
    time,
    start = 0;

btnAcceptOne.disabled = true;
btnAcceptTwo.disabled = true;
calculate.disabled = true;


//Начать расчет
btnStart.addEventListener('click', function () {


    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
    start = 1;
    calculate.disabled = false;
    testExpensesItem()
    testOptionalExpenses()

})


//проверки "Введите обязательные расходы"
expensesItem[0].addEventListener('input', function () {
    testExpensesItem();
});
expensesItem[1].addEventListener('input', function () {
    testExpensesItem();
});
expensesItem[2].addEventListener('input', function () {
    testExpensesItem();
});
expensesItem[3].addEventListener('input', function () {
    testExpensesItem();
});

//проверка "Введите необязательные расходы"
optionalExpenses[0].addEventListener('input', function () {
    testOptionalExpenses()
})
optionalExpenses[1].addEventListener('input', function () {
    testOptionalExpenses()
})
optionalExpenses[2].addEventListener('input', function () {
    testOptionalExpenses()
})


//Утвердить 1
btnAcceptOne.addEventListener('click', function () {

    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if (typeof (a) === "string" && typeof (a) != null &&
            typeof (b) === "string" && typeof (b) != null &&
            a != "" && b != "" && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;

})
//Утвердить 2
btnAcceptTwo.addEventListener('click', function () {

    for (let i = 0; i < optionalExpenses.length; i++) {
        let opt = optionalExpenses[i].value;
        appData.optionalExpenses[i] = opt;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + "";
    }

});

//Рассчитать
calculate.addEventListener('click', function () {


    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - +expensesItem[1].value - +expensesItem[3].value) / 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Передана какая-то кабала";
        }
    } else {
        daybudgetValue.textContent = "Произошла ошибка";
    }

});


//Введите статьи возможного дохода через запятую
income.addEventListener('input', function () {
    for (let i = 0; i < 1; i++) {
        let items = income.value;
        if (typeof (items) === "string" && typeof (items) != null && items != "") {
            appData.income = items.split(', ');
        } else {
            i--;
        }
        incomeValue.textContent = appData.income;
    }
})


//накопления (чек бокс)
savings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
    //Ввод суммы
    sumValue.addEventListener('input', function () {
        if (appData.savings == true) {
            let sum = +sumValue.value,
                percent = +percentValue.value;

            appData.monthIncome = sum / 100 / 12 * percent;
            appData.yearIncome = sum / 100 * percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });
    //Ввод процентов
    percentValue.addEventListener('input', function () {
        if (appData.savings == true) {
            let sum = +sumValue.value,
                percent = +percentValue.value;

            appData.monthIncome = sum / 100 / 12 * percent;
            appData.yearIncome = sum / 100 * percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    })
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


function testExpensesItem() {
    if ((expensesItem[0].value && expensesItem[1].value && expensesItem[2].value && expensesItem[3].value) && start) {
        btnAcceptOne.disabled = false;
    } else {
        btnAcceptOne.disabled = true;
    }
}

function testOptionalExpenses() {
    if ((optionalExpenses[0].value || optionalExpenses[1].value || optionalExpenses[2].value) && start) {
        btnAcceptTwo.disabled = false;
    } else {
        btnAcceptTwo.disabled = true;
    }
}