window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let calc = require('./parts/calc'),
        tabs = require('./parts/tabs'),
        timer = require('./parts/timer'),
        modal = require('./parts/modal'),
        form = require('./parts/form'),
        slider = require('./parts/slider');


    calc();
    form();
    slider();
    tabs();
    timer();
    modal();


});