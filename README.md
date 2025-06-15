# WebSocket Server para Chat em Grupo

Este projeto é um servidor WebSocket simples para habilitar o chat em grupo em tempo real no site Ações Internacionais.

## Tecnologias
- Node.js
- WebSocket
- HTTP nativo

## Instalação

```bash
git clone https://github.com/acoessinternacionais/websocket-server.git
cd websocket-server
npm install ws
```

## Execução local

```bash
node server.js
```

## Deploy no Render
1. Crie um novo Web Service em https://render.com
2. Escolha este repositório
3. Configure:
   - **Environment:** Node
   - **Start command:** `node server.js`
   - **Port:** 8080 (Render detecta automaticamente)

## Uso
O servidor retransmite qualquer mensagem recebida para todos os outros clientes conectados via WebSocket.

## URL de Conexão (exemplo)
```js
const socket = new WebSocket('wss://websocket-server.onrender.com');
```

## Autor
Ações Internacionais
