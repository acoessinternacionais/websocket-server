const WebSocket = require('ws');
const http = require('http');

const server = http.createServer();
const wss = new WebSocket.Server({ server });

let usuarios = [];

wss.on('connection', (ws) => {
  console.log('Novo usuário conectado');
  usuarios.push(ws);

  ws.on('message', (mensagem) => {
    console.log('Mensagem recebida:', mensagem);
    usuarios.forEach((user) => {
      if (user.readyState === WebSocket.OPEN) {
        user.send(mensagem);
      }
    });
  });

  ws.on('close', () => {
    usuarios = usuarios.filter((user) => user !== ws);
    console.log('Usuário desconectado');
  });
});

const PORTA = process.env.PORT || 8080;
server.listen(PORTA, () => {
  console.log(`Servidor WebSocket rodando na porta ${PORTA}`);
});
