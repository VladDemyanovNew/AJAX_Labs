import {lab1} from './lab1/lab1.js';
import {lab2_v1, lab2_v2} from './lab2/lab2.js';
import {lab2_addition} from './lab2/lab2_addition.js';

let files;
lab1();

$(document).ready(function() {
    $('.lab2 .description_item2 input[type=file]').on('change', function(){
        files = this.files;
    });
    $('.lab2 .description_item2 .upload_files').on('click', lab2_v2);
    $('.lab2 .description_item1 button').on('click', lab2_v1);
    $('.lab2 .addition button').on('click', lab2_addition);
});

export {files};