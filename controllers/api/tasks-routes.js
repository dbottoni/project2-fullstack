const router = require('express').Router();
const { Tasks, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Tasks.findAll({
    attributes: [ 'id', 'user_id', 'task_title', 'task_text', 'task_due'],
    include: [
      {
        model:User,
        attributes: ['username']
      }
    ]
  }) 
  .then(dbTasksdata => res.json(dbTasksdata))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  Tasks.create({
    user_id: req.session.user_id,
    task_title: req.body.task_title,
    task_text: req.body.task_text,
    task_due: req.body.task_due
  })
  .then(dbTasksdata => res.json(dbTasksdata))
  .catch(err => {
    res.status(400).json(err);
  });
});

router.delete('/:id', (req, res) => {
  Tasks.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbTasksdata => {
    if(!dbTasksdata) {
      res.status(404).json({ message: 'No task found with this id!' });
      return;
    }
    res.json(dbTasksdata);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

});


module.exports = router;

