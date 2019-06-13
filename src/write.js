'use strict';

const fs = require('fs');
const {
  promisify
} = require('util');
const fsWriteFile = promisify(fs.writeFile);

const write = async (file, buffer) => {
  await fsWriteFile(file, buffer);
  console.log(`${file} uppered!`);
};

module.exports = write;