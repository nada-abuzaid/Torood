const path = require('path');

const handleMain = (request, response) => {
  response
    .status(200)
    .set('Content-Type', 'text/html')
    .sendFile(path.join(__dirname, '..', '..', 'client', 'main.html'));
};

module.exports = { handleMain };
