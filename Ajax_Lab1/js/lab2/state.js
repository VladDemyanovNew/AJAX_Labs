
let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?'},
        {id: 2, message: 'It\'s my first post'}
    ]
};

async function conectToServer() {
    let response = await fetch('php/lab2.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(state)
      });
}

conectToServer();



export {state};
