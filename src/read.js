'use strict';

const fs = require('fs');
const {
  promisify
} = require('util');
const fsReadFile = promisify(fs.readFile);

const read = async file => {
  return await fsReadFile(file);
};

module.exports = read;