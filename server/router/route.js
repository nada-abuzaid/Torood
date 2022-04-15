const express = require('express');
const { getPackagesHandler } = require('../controllers/getPackages');
const { postStoreHandler } = require('../controllers/addStore');
const { getCustomersHandler } = require('../controllers/getCustomers');
const { addPackageHandler } = require('../controllers/addPackges');
const { addCustomerHandler } = require('../controllers/addCustomer');
const { getStoresHandler } = require('../controllers/getStores');
const { deletePackagesHandler } = require('../controllers/deletePackage');
const { handleMain } = require('../controllers/handleMain');
const { clientError } = require('../controllers/errors/404');
const { ServerError } = require('../controllers/errors/500');

const router = express.Router();

router.get('/main', handleMain);

router.get('/get-packages', getPackagesHandler);

router.post('/add-package', addPackageHandler);

router.get('/get-stores', getStoresHandler);

router.post('/add-store', postStoreHandler);

router.post('/add-customer', addCustomerHandler);

router.get('/get-customers', getCustomersHandler);

router.delete('/delete/:id', deletePackagesHandler);

router.use(clientError);
router.use(ServerError);

module.exports = router;
