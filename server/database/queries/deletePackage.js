const { pool } = require('../config/connection');

const deletePackage = (id) => {
  return pool.query({
    text: 'DELETE FROM packages WHERE id = $1 returning *',
    values: [id],
  });
};

module.exports = { deletePackage };
