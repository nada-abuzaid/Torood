const { pool } = require('../config/connection');

const addPackage = (name, customerId, store, image, package_date, price) => {
  return pool.query({
    text: 'insert into packages (name,customer_id,store_id, image, Package_date, price) values ($1 , $2, $3, $4, $5, $6) returning *;',
    values: [name, customerId, store, image, package_date, price],
  });
};

module.exports = { addPackage };
