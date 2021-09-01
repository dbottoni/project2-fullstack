const router = require('express').Router();

const userRoutes = require('./user-routes');
//const projectRoutes = require('./project-routes'); **commented out since Project's screen will be part of "future improvements"
const tasksRoutes = require('./tasks-routes');

router.use('/users', userRoutes);
//router.use('/project', projectRoutes); **commented out since Project's screen will be part of "future improvements"
router.use('/tasks', tasksRoutes);

module.exports = router;