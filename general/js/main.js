import {lab1} from './lab1/lab1.js';
import {lab2_v1, lab2_v2} from './lab2/lab2.js';
import {lab2_addition} from './lab2/lab2_addition.js';
import {lab4} from './lab4/lab4.js';
import {lab6} from './lab6/lab6.js';
import {lab7} from './lab7/lab7.js';
import {lab8} from './lab8/lab8.js';
import {lab9} from './lab9/lab9.js';
import { lab10 } from './lab10/lab10.js';

let files;

$(document).ready(function() {
    lab1();
    $('.lab2 .description_item2 input[type=file]').on('change', function(){
        files = this.files;
    });
    $('.lab2 .description_item2 .upload_files').on('click', lab2_v2);
    $('.lab2 .description_item1 button').on('click', lab2_v1);
    $('.lab2 .addition button').on('click', lab2_addition);
    $('.lab4 .description button').on('click', lab4);
    lab6();
    $('.lab7 .description button').on('click', lab7);
    $('.lab8 .description button').on('click', lab8);
    lab9();
    lab10();
});

export {files};