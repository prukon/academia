function timer() {
    let deadline = '2019-03-18';

    let getTimeRemaining = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    let setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (hours.textContent.length == 1) {
                hours.textContent = `0 ${hours.textContent}`;
            }
            if (minutes.textContent.length == 1) {
                minutes.textContent = `0 ${minutes.textContent}`;
            }

            if (seconds.textContent.length == 1) {
                seconds.textContent = `0 ${seconds.textContent}`;
            }
            if (hours.textContent < 0) {
                hours.textContent = '00';
            }
            if (hours.textContent < 0) {
                hours.textContent = '00';
            }
            if (minutes.textContent < 0) {
                minutes.textContent = '00';
            }
            if (seconds.textContent < 0) {
                seconds.textContent = '00';
            }
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    };
    setClock('timer', deadline);
}
module.exports = timer;