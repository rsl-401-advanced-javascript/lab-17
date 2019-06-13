'use strict';

const net = require('net');
const client = new net.Socket;

const PORT = process.env.PORT || 3001;

client.connect(PORT, 'localhost', () => console.log(`Connected to port ${PORT}!`));

const logger = (type, message) => {
  switch (type) {
    case 'save':
      console.log(message);
    case 'error':
      console.error(message);
    default:
      console.log(message);
  }
};

client.on('save', logger);
client.on('error', logger);
module.exports = logger;