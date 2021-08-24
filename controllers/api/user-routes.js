const router = require('express').Router();
const { User, Project, Tasks } = require('../../models');

router.get('/', (req,res) => {
  User.findAll({
    attributes: { exclude: ['password']}
  })
  .then(dbUserData => res.json(dbUserData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req,res) => {
  User.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Project,
        attributes: ['id', 'title', 'user_id', 'created_at']
      },
      {
        model: Tasks,
        attributes: ['id', 'comment_text', 'user_id', 'project_id', 'created_at'],
        include: {
          model: Project,
          attributes: ['title']
        }
      }
    ]
  })
  .then(dbUserData => {
    if (!dbUserData){
      res.status(404).json({ message: 'No user found with this id'});
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});



module.exports = router;

