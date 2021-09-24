const router = require('express').Router();

const listingsRoutes = require('./listings-routes');

router.use('/listings', listingsRoutes);

module.exports = router;
