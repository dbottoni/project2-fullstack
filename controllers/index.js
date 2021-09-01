const router = require('express').Router();

const apiRoutes = require('./api');

const homeRoutes = require('./home-routes.js');
const taskRoutes = require('./task-routes.js');

router.use('/api', apiRoutes);

router.use('/', homeRoutes);


router.use('/task', taskRoutes);


module.exports = router;