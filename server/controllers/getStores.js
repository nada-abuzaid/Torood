const { getStores } = require('../database/queries/getStores');

const getStoresHandler = (req, res) => {
  getStores().then((data) => res.json(data.rows));
};

module.exports = { getStoresHandler };
