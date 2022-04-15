const { addPackage } = require('../database/queries/postPackages');
const { join } = require('path');

const addPackageHandler = (req, res) => {
  const { name, customer_name, store, image, date, price } = req.body;
  addPackage(name, customer_name, store, image, date, price).then(
    res.sendFile(join(__dirname, '..', '..', 'client', 'main.html'))
  );
};

module.exports = { addPackageHandler };



