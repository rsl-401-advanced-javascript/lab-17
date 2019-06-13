'use strict';

const fs = require('fs');
const {
  promisify
} = require('util');
const fsReadFile = promisify(fs.readFile);

const read = async (file, client) => {
  try {
    return await fsReadFile(file);
  } catch (err) {
    client.write(JSON.stringify({
      type: 'error',
      message: err
    }));
  }
};

module.exports = read;