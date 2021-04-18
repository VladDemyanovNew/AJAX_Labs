

function lab9() {
    let arr = createArr(0, 10000, 10);
    let arrBin = arr.map(item => item.toString(2));
    let arrDec = arrBin.map(item => parseInt(item, 2));

    console.log(`Исходный массив: ${arr}`);
    console.log(`Массив в 2-м формате: ${arrBin}`);
    console.log(`Массив в 10-м формате: ${arrDec}`);
}

function createArr(min, max, length) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(randomInteger(min, max));
    }
    return arr;
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

export {lab9};