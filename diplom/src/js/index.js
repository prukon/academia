//require('es6-promise').polyfill();
require('formdata-polyfill');

import slider from "./parts/slider";
// import calc from "./parts/calc";
// import tabs from "./parts/tabs";
// import timer from "./parts/timer";
// import modal from "./parts/modal";
// import form from "./parts/form";



window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    // let calc = require('./parts/calc'),
    //     tabs = require('./parts/tabs'),
    //     timer = require('./parts/timer'),
    //     modal = require('./parts/modal'),
    //     form = require('./parts/form'),
    //     slider = require('./parts/slider');

    slider();
    // calc();
    // form();
    // tabs();
    // timer();
    // modal();


});

if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }