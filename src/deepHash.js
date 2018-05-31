'use strict';

const crypto = require('crypto');

const deepHash = function (value, secret = '') {
  if (typeof value === 'object' && value !== null) {
    if (Array.isArray(value)) {
      return value.map(element => deepHash(element, secret));
    }

    const result = {};

    for (const [ key, val ] of Object.entries(value)) {
      result[key] = deepHash(val, secret);
    }

    return result;
  }

  const hash = crypto.createHash('sha256');

  hash.update(`${secret}${String(value)}`);

  const result = hash.digest('hex');

  return result;
};

module.exports = deepHash;
