const router = require('express').Router();
const { Project, User, Tasks } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', (req, res) => {
  Project.findAll({
    attributes: [ 'id', 'title', 'user_id'],
    include: [
      {
        model: Tasks,
        attributes: ['id', 'comment_text', 'user_id', 'project_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
      model: User,
      attributes: ['username']
      }
    ]
  })
  .then(dbProjectData => res.json(dbProjectData))
  .catch(err => {
    console.log(500);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  Project.findOne({
    where: {
      id: req.params.id
    },
      attributes: [ 'id', 'title', 'user_id' ],
      include: [
        {
          model: Tasks,
          attributes: ['id', 'comment_text', 'user_id', 'project_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
        model: User,
        attributes: ['username']
        }
      ]
    })
    .then(dbProjectData => {
      if(!dbProjectData){
        res.status(404).json( { message: 'No project found with this ID'} );
        return;
      }
      res.json(dbProjectData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  if (req.session) {
    Project.create({
      title: req.body.title,
      user_id: req.session.user_id
    })
    .then(dbProjectData => res.json(dbProjectData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  }
});

router.put('/:id', (req, res) => {
  Project.update(
    {
      title: req.body.title
    },
    {
      where: { 
        id:req.params.id
      }
    }
  )
  .then(dbProjectData => {
    if(!dbProjectData) {
      res.status(404).json({ message: 'No project found with this ID '});
      return;
    }
    res.json(dbProjectData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  Project.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbProjectData => {
    if(!dbProjectData){
      res.status(404).json({ message: 'No project found with this ID '});
      return;
    }
    res.json(dbProjectData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


module.exports = router;

