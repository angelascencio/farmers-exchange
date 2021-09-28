const router = require('express').Router();

const userRoutes = require('./user-routes');
const listingsRoutes = require('./listings-routes');

router.use('/listings', listingsRoutes);

router.use('/users', userRoutes);

module.exports = router;
