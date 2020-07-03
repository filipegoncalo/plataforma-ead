const messages = require('../config/message.json');

const getMessage = (path) => {
  return messages[path] || null;
};

module.exports = { getMessage }