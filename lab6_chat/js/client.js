
window.onload = function(){
    // открываем веб-сокет-соединение
    let ws = new WebSocket('ws://localhost:3771');

    // когда соединение установлено
    ws.onopen = function() {
        console.log("Соединение установлено");
    }

    // когда от сервера поступает сообщение
    ws.onmessage = function(event) {
        let incomingMessage = event.data;
        processMessage(incomingMessage);
        console.log("Полученные данные: " + event.data);
    }

    // когда возникла ошибка на сервере
    ws.onerror = function(event) {
        console.log(event.data);
    }
    
    // отлавливаем событие клика
    // считываем нужные данные
    // и отправлем их на сервер
    document.querySelector(".chat button").onclick = function() {
        const textareaData = document.querySelector(".chat textarea").value;
        ws.send(textareaData);
    };
};

function processMessage(message) {
    let messageElem = document.createElement('div');
    messageElem.setAttribute("class", "item");

    let img = document.createElement('img');
    img.setAttribute("src", "img/avatar.png");

    let text = document.createTextNode(message);

    messageElem.append(img);
    messageElem.append(text);

    document.querySelector(".chat .messages").prepend(messageElem);
}


