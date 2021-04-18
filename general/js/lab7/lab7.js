const output_result = document.querySelector(".lab7 .output");

async function lab7() {
    const src = "data/lab7.json";

    let response = await fetch(src, {
        method: 'GET'
    });

    let obj = JSON.parse(await response.text());
    let result = obj.items
        .filter((item, index) => index === 4 || index === 5 || index == 6)
        .map(item => item.title);
    output_result.innerHTML = result;
};

export {lab7};