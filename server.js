'use strict';

const net = require('net');
const uuid = require('uuid');

const port = process.env.PORT || 3001;
const server = net.createServer();

server.listen(port, () => console.log(`Server up on ${port}`));

let socketPool = {};

server.on('connection', (socket) => {
  const id = `Socket-${uuid()}`;
  socketPool[id] = socket;
  console.log(id);
  socket.on('error', console.error);
  socket.on('data', dispatchEvent);
  socket.on('close', () => {
    delete socketPool[id];
  });
});

let dispatchEvent = (buffer) => {
  let data = buffer.toString().trim();
  for (let socket in socketPool) {
    socketPool[socket].write(`${data}\r\n`);
  }
};