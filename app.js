'use strict';

const net = require('net');
const client = new net.Socket;
const PORT = process.env.PORT || 3001;

client.connect(PORT, 'localhost', () => console.log(`Connected to port ${PORT}!`))

const read = require('./src/read');
const upper = require('./src/upper');
const write = require('./src/write');

const alterFile = async file => {
  const data = await read(file, client);
  let text = upper(data, client);
  if (text) await write(file, Buffer.from(text), client);
};

let file = process.argv.slice(2).shift();
alterFile(file);