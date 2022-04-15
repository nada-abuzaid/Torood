const { pool } = require('../config/connection');

const addCustomer = (name, mobile, address) => {
  return pool.query({
    text: 'insert into customers (name , mobile , address) values ($1 , $2 , $3) returning *;',
    values: [name, mobile, address],
  });
};

module.exports = { addCustomer };
