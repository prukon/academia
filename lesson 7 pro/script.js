let date = new Date('Marth 10, 2018 23:15:30');
let timerLd = setInterval(sayHello, 1000);
function sayHello() {
    date = new Date();
    let hours = date.getHours(); //часы
    if (hours < 10) {
        hours = "0" + hours;
    }
    let minutes = date.getMinutes(); //минуты
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    let seconds = date.getSeconds(); //секунды
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    let setHours = document.querySelector('#hours');
    setMinutes = document.querySelector('#minutes');
    setSeconds = document.querySelector('#seconds');
    setHours.textContent = hours + ":";
    setMinutes.textContent = minutes + ":";;
    setSeconds.textContent = seconds;
}

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.wrapper');

// function myAnimation() {
//     let pos = 0;
//     let id = setInterval(frame, 10);

//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';
          
//         }
//     }
// }
// btn.addEventListener('click', myAnimation);



//__

btn.onclick = function() {
  animate(function(timePassed) {
    wrapper.style.top  = timePassed / 5 + 'px';
  }, 1000);
};

function animate(draw, duration) {
  let start = performance.now();
  requestAnimationFrame(function animate(time) {
    let timePassed = time - start;
    draw(timePassed);
    if (timePassed < duration) {
      requestAnimationFrame(animate);
    }
  });
}

