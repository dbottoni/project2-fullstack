const router = require('express').Router();
const sequelize = require('../config/connection');
// const { User, Project, Tasks } = require('../../models');


router.get('/', (req, res) => {
      res.render('homepage');
});

// router.get('/login', (req, res) => {
//       res.render('loginpage');
// });




module.exports = router;