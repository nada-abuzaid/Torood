const { pool } = require('../config/connection');

const getStores = () => {
  return pool.query({
    text: 'SELECT id, name FROM stores;',
    values: [],
  });
};

module.exports = { getStores };
