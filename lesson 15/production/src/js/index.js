import calc from "./parts/calc";
import tabs from "./parts/tabs";
import timer from "./parts/timer";
import modal from "./parts/modal";
import form from "./parts/form";
import slider from "./parts/slider";


window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    // let calc = require('./parts/calc'),
    //     tabs = require('./parts/tabs'),
    //     timer = require('./parts/timer'),
    //     modal = require('./parts/modal'),
    //     form = require('./parts/form'),
    //     slider = require('./parts/slider');


    calc();
    form();
    slider();
    tabs();
    timer();
    modal();


});