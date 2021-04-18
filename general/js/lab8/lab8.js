const output_result = document.querySelector(".lab8 .output");

async function lab8() {
    const src = "data/lab8.json";

    let response = await fetch(src, {
        method: 'GET'
    });

    let obj = JSON.parse(await response.text());
    let result = obj.items.sort((a, b) => b.age > a.age ? 1 : -1);
    
    output_result.innerHTML = JSON.stringify(result);
}

export {lab8};