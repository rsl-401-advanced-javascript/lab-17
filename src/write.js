'use strict';

const fs = require('fs');
const {
  promisify
} = require('util');
const fsWriteFile = promisify(fs.writeFile);

const write = async (file, buffer, client) => {
  try {
    await fsWriteFile(file, buffer);
    client.write(`${file} uppered!`);
  } catch (err) {
    client.write(`Problem with ${file}!`);
  }
};

module.exports = write;