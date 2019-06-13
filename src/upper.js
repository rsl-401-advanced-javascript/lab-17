'use strict';

const upper = (buffer, client) => {
  try {
    return buffer.toString().toUpperCase();
  } catch (err) {
    client.write('Buffer undefined!');
  }
};

module.exports = upper;