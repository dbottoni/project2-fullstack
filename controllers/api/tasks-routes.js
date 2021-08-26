const router = require('express').Router();
const { Tasks, User, Project } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Tasks.findAll({
    attributes: [ 'id', 'comment_text', 'user_id', 'project_id']
  }) 
  .then(dbTasksdata => res.json(dbTasksdata))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  Tasks.create({
    comment_text: req.body.comment_text,
    user_id: req.session.user_id,
    project_id: req.body.project_id
  })
  .then(dbTasksdata => res.json(dbTasksdata))
  .catch(err => {
    res.status(400).jsom(err);
  });
});



module.exports = router;

