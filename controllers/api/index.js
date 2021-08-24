const router = require('express').Router();

const userRoutes = require('./user-routes');
const projectRoutes = require('./project-routes');
const tasksRoutes = require('./tasks-routes');

router.use('/users', userRoutes);
router.use('/project', projectRoutes);
router.use('/tasks', tasksRoutes);

module.exports = router;