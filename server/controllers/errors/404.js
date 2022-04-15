const path = require('path');

const clientError = (request, response) => {
  response.status(404).sendFile(path.join(__dirname, '..', '..', '..','client', 'errors', '404.html'));
};

module.exports = {clientError};