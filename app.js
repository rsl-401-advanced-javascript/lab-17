'use strict';

const read = require('./src/read');
const upper = require('./src/upper');
const write = require('./src/write');

const alterFile = async file => {
  const data = await read(file);
  let text = upper(data);
  await write(file, Buffer.from(text));
};

let file = process.argv.slice(2).shift();
alterFile(file);