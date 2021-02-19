
let state = {
    posts: [
        // {id: 1, message: 'Hi, how are you?'},
    ]
};

export async function connectToServer() {
    let response = await fetch('php/lab2.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(state)
      });

    let result = await response.json();
    state = result;
}

export {state};
