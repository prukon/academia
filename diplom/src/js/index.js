//require('es6-promise').polyfill();
require('formdata-polyfill');
import slider from "./parts/slider";
import modal from "./parts/modal";
import form from "./parts/form";
import addMore from "./parts/addMore";
import calc from "./parts/calc";
import filter from "./parts/filter";
import pictures from "./parts/pictures";
import gorizontalSlider from "./parts/gorizontalSlider.js";
import dropmenu from "./parts/dropmenu.js";
import mainform from "./parts/mainform.js";
import detailForm from "./parts/detailForm.js";
import popupConsultation from "./parts/popupConsultation.js";
import scrollmodal from "./parts/scrollmodal.js";




// import tabs from "./parts/tabs";
// import timer from "./parts/timer";
window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  // let calc = require('./parts/calc'),
  //     tabs = require('./parts/tabs'),
  //     timer = require('./parts/timer'),
  //     modal = require('./parts/modal'),
  //     form = require('./parts/form'),
  //     slider = require('./parts/slider');
  slider();
  modal();
  form();
  addMore();
  calc();
  filter();
  pictures();
  gorizontalSlider();
  dropmenu();
  mainform();
  detailForm();
  popupConsultation();
  scrollmodal();
  // timer();
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