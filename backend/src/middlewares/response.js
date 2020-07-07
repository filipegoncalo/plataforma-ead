const { getMessage } = require('../helpers/messages');

const TYPE_JSON = 'application/json';
const STATUS_CODE_SUCCESS = 200;
const STATUS_CODE_BAD_REQUEST = 400;
const STATUS_CODE_UNAUTHORIZED = 401;
const STATUS_CODE_NOT_FOUND = 404;
const STATUS_CODE_SERVER_ERROR = 500;

const jsonSuccess = function(data, message, metadata) {
  const status = STATUS_CODE_SUCCESS
  message = (message) ? message : getMessage('response.json_success');
  metadata = (metadata) ? metadata : {};

  this.status(status);
  this.type(TYPE_JSON);
  return this.json({ message, data, metadata, status: status });
};

const jsonBadRequest = function(data, message, metadata) {
  const status = STATUS_CODE_BAD_REQUEST
  message = (message) ? message : getMessage('response.json_bad_request');
  metadata = (metadata) ? metadata : {};

  this.status(status);
  this.type(TYPE_JSON);
  return this.json({ message, data, metadata, status: status });
};

const jsonUnauthorized = function(data, message, metadata) {
  const status = STATUS_CODE_UNAUTHORIZED
  message = (message) ? message : getMessage('response.json_unauthorized');
  metadata = (metadata) ? metadata : {};

  this.status(status);
  this.type(TYPE_JSON);
  return this.json({ message, data, metadata, status: status });
};

const jsonNotFound = function(data, message, metadata) {
  const status = STATUS_CODE_NOT_FOUND
  message = (message) ? message : getMessage('response.json_not_found');
  metadata = (metadata) ? metadata : {};

  this.status(status);
  this.type(TYPE_JSON);
  return this.json({ message, data, metadata, status: status });
};

const jsonServerError = function(data, message, metadata) {
  const status = STATUS_CODE_SERVER_ERROR
  message = (message) ? message : getMessage('response.json_server_error');
  metadata = (metadata) ? metadata : {};

  this.status(status);
  this.type(TYPE_JSON);
  return this.json({ message, data, metadata, status: status });
};

const response = (request, response, next) => {
  response.jsonSuccess = jsonSuccess;
  response.jsonBadRequest = jsonBadRequest;
  response.jsonUnauthorized = jsonUnauthorized;
  response.jsonNotFound = jsonNotFound;
  response.jsonServerError = jsonServerError;

  next();
}

module.exports = response;