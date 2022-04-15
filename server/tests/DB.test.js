const { dbBuild } = require('../database/config/build');
const { pool } = require('../database/config/connection');
const { addCustomer } = require('../database/queries/postCustomer');
const { getCustomers } = require('../database/queries/getCustomers');
const { addPackage } = require('../database/queries/postPackages');
const { deletePackage } = require('../database/queries/deletePackage');
const { getPackages } = require('../database/queries/getPackages');

beforeEach(() => {
  return dbBuild();
});

describe('Test Customer Functions', () => {
  test('Test add Customer', () => {
    return addCustomer('Mona', '0597092748', 'Gaza').then((data) => {
      expect(data.rows[0].name).toBe('Mona');
    });
  });

  test('Test get Customers', () => {
    return getCustomers().then((data) => {
      expect(data.rowCount).toBe(2);
    });
  });
});

describe('Test Packages Functions', () => {
  test('TEST add Packages', () => {
    const name = 'Dress';
    const customer_id = 1;
    const store_id = 1;
    const image = 'https://torood.co/assets/images/logo.svg';
    const Package_date = '2022-04-24';
    const price = 500;
    return addPackage(
      name,
      customer_id,
      store_id,
      image,
      Package_date,
      price
    ).then((data) => {
      expect(data.rows[0].price).toBe(500);
    });
  });

  test('TEST get Packages', () => {
    return getPackages().then((data) => {
      expect(data.rowCount).toBe(1);
    });
  });

  test('TEST delete Packages', () => {
    return deletePackage(1).then((data) => {
      expect(data.rowCount).toBe(1);
    });
  });
});

afterAll(() => {
  return pool.end();
});
