import {lab1} from './lab1/lab1.js';
import {lab2} from './lab2/lab2.js';
import {lab2_addition} from './lab2/lab2_addition.js';

lab1();

$(document).ready(function() {
    $('.lab2 .description button').on('click', lab2);
});

lab2_addition();