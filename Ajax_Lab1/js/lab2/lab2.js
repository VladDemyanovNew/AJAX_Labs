import {files} from './../main.js';

const output = document.querySelector(".lab2 .output .result");

async function lab2_v1() {
    let url = "data/data.txt";
    // const test = "Hello World!";
    let response = await fetch(url, {
        method: 'GET'
    });

    let text = await response.text();
    output.innerHTML = text;
};

async function lab2_v2() {

    let data = new FormData();
    $.each( files, function( key, value ){
        data.append( key, value );
    });

    let response = await fetch('php/lab2_v2.php?uploadfiles', {
        method: 'POST',
        body: data
      });

    let result = await response.text();
    output.innerHTML = result;
};

export {lab2_v1, lab2_v2};