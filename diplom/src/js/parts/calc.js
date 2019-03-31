"use strict";

//calcalate
function calc() {
  let size = document.querySelector('#size');
  let material = document.querySelector('#material');
  let options = document.querySelector('#options');
  let promocode = document.querySelector('.promocode');
  let totalValue = document.querySelector('.calc-price');
  let promocodeSum = 1;
  let sizeSum = 0;
  let materialSum = 0;
  let optionsSum = 1;
  let total;
  let price = 500;
  

  size.addEventListener('change', function () {
    if (size.value == "40x50") {
      sizeSum = 1;
    } else if (size.value == "50x70") {
      sizeSum = 2;
    } else if (size.value == "70x70") {
      sizeSum = 3;
    } else if (size.value == "70x100") {
      sizeSum = 3;
    } else {
      sizeSum = 0;
    }
    if (promocode.value == "IWANTPOPART") {
      promocodeSum = 0.7;
    }
    total = sizeSum * materialSum * optionsSum * promocodeSum * price;
    total = Math.floor(total);
    totalValue.innerHTML = total;
    if (totalValue.innerHTML == 0) {
      totalValue.innerHTML = "Для расчета нужно выбрать размер картины и материал картины";
    }
  });

  material.addEventListener('change', function () {
    if (material.value == "Холст из волокна") {
      materialSum = 1;
    } else if (material.value == "Льняной холст") {
      materialSum = 2;
    } else if (material.value == "Холст из натурального хлопка") {
      materialSum = 3;
    } else {
      materialSum = 0;
    }
    if (promocode.value == "IWANTPOPART") {
      promocodeSum = 0.7;
    }
    total = sizeSum * materialSum * optionsSum * promocodeSum * price;
    total = Math.floor(total);
    totalValue.innerHTML = total;
    if (totalValue.innerHTML == 0) {
      totalValue.innerHTML = "Для расчета нужно выбрать размер картины и материал картины";
    }
  });

  options.addEventListener('change', function () {
    if (options.value == "Покрытие арт-гелем") {
      optionsSum = 1.2;
    } else if (options.value == "Экспресс-изготовление") {
      optionsSum = 1.3;
    } else if (options.value == "Доставка готовых работ") {
      optionsSum = 1.4;
    } else {
      optionsSum = 1;
    }
    if (promocode.value == "IWANTPOPART") {
      promocodeSum = 0.7;
    }
    total = sizeSum * materialSum * optionsSum * promocodeSum * price;
    total = Math.floor(total);
    totalValue.innerHTML = total;
    if (totalValue.innerHTML == 0) {
      totalValue.innerHTML = "Для расчета нужно выбрать размер картины и материал картины";
    }
  });
  promocode.addEventListener('input', function () {
    if (promocode.value == "IWANTPOPART") {
      promocodeSum = 0.7;
    } else {
      promocodeSum = 1;
    }
    total = sizeSum * materialSum * optionsSum * promocodeSum * price;
    total = Math.floor(total);
    totalValue.innerHTML = total;
  });

  // if (totalValue.innerHTML == 0) {
  //   totalValue.innerHTML = "";
  // }

}

// module.exports = calc;
export default calc;