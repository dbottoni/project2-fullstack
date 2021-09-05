const router = require('express').Router();
const sequelize = require('../config/connection');
const { Tasks, User} = require('../models');
const withAuth = require('../utils/auth');





// router.get('/', (req, res) => {
//       res.render('loginpage');
// });





router.get('/', (req, res) => {
    if (req.session.loggedIn) {
      res.render('loginpage',{loggedIn: true});
      return;
    }
  
    res.render('loginpage');
});

router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Tasks.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'user_id',
      'task_title',
      'task_text',
      'task_due'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbTaskData => {
      console.log(dbTaskData)
      const tasks = dbTaskData.map(tasks => tasks.get({ plain: true }));
      console.log(tasks)
      //res.render('loginpage', { tasks, loggedIn: true });
      return(tasks);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/', (req, res) => {
 console.log("put")
  Tasks.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbTaskData => {
      if (!dbTaskData) {
        res.status(404).json({ message: 'Task with this id not found' });
        return;
      }
      res.json(dbTaskData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;