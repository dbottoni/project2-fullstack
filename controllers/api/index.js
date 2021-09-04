const router = require('express').Router();

const userRoutes = require('./user-routes');
const projectRoutes = require('./project-routes');
const tasksRoutes = require('./tasks-routes');
const commentRoutes = require('./comment_routes');



router.use('/users', userRoutes);
router.use('/project', projectRoutes);
router.use('/tasks', tasksRoutes);
router.use('/comments', commentRoutes);



module.exports = router;