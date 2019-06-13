'use strict';

const fs = require('fs');
const {
  promisify
} = require('util');
const fsWriteFile = promisify(fs.writeFile);

const write = async (file, buffer, client) => {
  try {
    await fsWriteFile(file, buffer);
    const data = JSON.stringify({
      type: 'save',
      message: `${file} saved!`
    });
    client.write(data);
  } catch (err) {
    client.write(JSON.stringify({
      type: 'error',
      message: err
    }));
  }
};

module.exports = write;