const path = require('path');

const ServerError = (request, response) => {
  response.status(500).sendFile(path.join(__dirname, '..', '..','..', 'client', 'errors', '500.html'));
};

module.exports = {ServerError};