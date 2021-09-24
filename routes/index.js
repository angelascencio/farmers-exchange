const router = require('express').Router();

const listingsRoutes = require('./listings');
const userRoutes = require('./user');
const homeRoutes = require('./home-routes.js');


router.use('/', homeRoutes);
router.use('/user', userRoutes);
router.use('/listings', listingsRoutes);

module.exports = router;