const { deletePackage } = require('../database/queries/deletePackage');

const deletePackagesHandler = (req, res) => {
    deletePackage(req.params.id);
};

module.exports = { deletePackagesHandler };