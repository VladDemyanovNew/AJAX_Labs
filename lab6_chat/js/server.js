const WebSocket = require('ws');
// создаёт экземпляр сервера
const wss = new WebSocket.Server({ port: 3771 });

// транслирует данные всем клиентам
wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
        client.send(data);
    });
};

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {

    wss.clients.forEach(function each(client) {
        client.send(message);
    });
    console.log(wss.clients);
    console.log('received: %s', message);
  });
});