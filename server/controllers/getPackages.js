const { getPackages } = require('../database/queries/getPackages');

const getPackagesHandler = (req, res) => {
  getPackages().then((data) => res.json(data.rows));
};

module.exports = { getPackagesHandler };
