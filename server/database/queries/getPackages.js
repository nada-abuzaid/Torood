const { pool } = require('../config/connection');

const getPackages = () => {
  return pool.query({
    text:'SELECT * FROM packages;',
    values:[]
  });
};

module.exports = {getPackages};
