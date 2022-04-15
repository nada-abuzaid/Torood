const { addCustomer } = require('../database/queries/postCustomer');

const addCustomerHandler = (req, res) => {
  const { name, phone, address } = req.body;
  addCustomer(name, phone, address).then(() => res.redirect('/main'));
};

module.exports = { addCustomerHandler };
