import {lab1} from './lab1/lab1.js';
import {lab2} from './lab2/lab2.js';

lab1();

$(document).ready(function() {
    $('.lab2 button').on('click', lab2);
});