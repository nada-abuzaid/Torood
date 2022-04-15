const { getCustomers } = require('../database/queries/getCustomers');

const getCustomersHandler = (req, res) => {
  getCustomers().then((data) => res.json(data.rows));
}

module.exports = { getCustomersHandler };