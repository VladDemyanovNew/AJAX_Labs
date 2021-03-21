
const output_result = document.querySelector(".lab6 .result span");
const output_json = document.querySelector(".lab6 .json span");

function lab6() {
    let json = '{ "title": "Lab6", "numbers": [-2,9,8,6,-10,-20,-3] }';
    let obj = JSON.parse(json);
    let result = obj.numbers.reduce((previousValue, item) => item <= previousValue ? item : previousValue);
    output_result.innerHTML = result;
    output_json.innerHTML = json;
}

export {lab6};