
let user = {
    name: 'John',
    surname: 'Smith'
  };

const output = document.querySelector(".lab2 .output .result");

async function lab2() {
    let url = "data/data.txt";
    const test = "Hello World!";
    let response = await fetch(url, {
        method: 'GET'
        // headers: {
        //     'Content-Type': 'application/json;charset=utf-8'
        //   },
        //body: JSON.stringify(user)
    });

    let text = await response.text();
    output.innerHTML = text;
};

export {lab2};