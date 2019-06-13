'use strict';

const upper = (buffer, client) => {
  try {
    return buffer.toString().toUpperCase();
  } catch (err) {
    client.write(JSON.stringify({
      type: 'error',
      message: err
    }));
  }
};

module.exports = upper;