const { pool } = require('../config/connection');

const addStore = (name , mobile , account_link) => {
  return pool.query({
    text:'insert into stores (name , mobile , account_link) values ($1 , $2 , $3);',
    values:[name , mobile , account_link]
  });
};

module.exports = {addStore};