const router = require('express').Router();
<<<<<<< HEAD

router.get('/', (req, res) => {
  res.render('homepage');
});

=======
const sequelize = require('../config/connection');
// const { User, Project, Tasks } = require('../../models');


router.get('/', (req, res) => {
      res.render('homepage');
});




>>>>>>> 196ba4896c9d1609e083d2d9c6bf582fa1cb7f3e
module.exports = router;