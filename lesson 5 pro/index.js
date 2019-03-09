let date = new Date('Marth 10, 2018 23:15:30'),
    // date = new Date(),
    dayWeek = date.getDay(), //день недели (числом)
    day = date.getDate(), //день
    year = date.getFullYear(), //год
    month = date.getMonth(), //месяц
    Hours = date.getHours(), //часы
    Minutes = date.getMinutes(), //минуты
    Seconds = date.getSeconds(), //секунды
    from = document.querySelector('#from'),
    to = document.querySelector('#to'),
    result = document.querySelector('#result'),
    dateFrom,
    dateTo,
    resultDate = [];
formatDate()
weekDay()





from.addEventListener('change', function () {
    let yearValue = new Date(Date.parse(from.value)).getFullYear();
    let monthValue = new Date(Date.parse(from.value)).getMonth();
    let dayValue = new Date(Date.parse(from.value)).getDate();
    resultDate[0] = new Date(yearValue, monthValue, dayValue);

    if (resultDate[0] && resultDate[1]) {
        resultDate[2] = resultDate[1] - resultDate[0];
        resultDate[2] = resultDate[2]/1000/60/60/24;
        resultDate[2] = Math.abs(resultDate[2]);
        result.value = "Разница " + resultDate[2] + " дн.";

    }

});
to.addEventListener('change', function () {
    let yearValue = new Date(Date.parse(to.value)).getFullYear();
    let monthValue = new Date(Date.parse(to.value)).getMonth();
    let dayValue = new Date(Date.parse(to.value)).getDate();
    resultDate[1] = new Date(yearValue, monthValue, dayValue);


    if (resultDate[0] && resultDate[1]) {
        resultDate[2] = resultDate[1] - resultDate[0];
         resultDate[2] = resultDate[2]/1000/60/60/24;
         resultDate[2] = Math.abs(resultDate[2]);
        result.value = "Разница " + resultDate[2] + " дн.";
    }

});


function formatDate() {
    if (Hours < 10) {
        Hours = "0" + Hours;
    }
    if (Minutes < 10) {
        Minutes = "0" + Minutes;
    }
    if (Seconds < 10) {
        Seconds = "0" + Seconds;
    }
    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }
    console.log(Hours + ":" + Minutes + ":" + Seconds + " " + day + "." + month + "." + year);

}

function weekDay() {
    switch (dayWeek) {
        case 0:
            console.log("Понедельник")
            break;
        case 1:
            console.log("Вторник")
            break;
        case 2:
            console.log("Среда")
            break;
        case 3:
            console.log("Чеверг")
            break;
        case 4:
            console.log("Пятница")
            break;
        case 5:
            console.log("Суббота")
            break;
        case 6:
            console.log("Воскресенье")
            break;
    }
}