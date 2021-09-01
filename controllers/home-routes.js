const router = require('express').Router();
const sequelize = require('../config/connection');
// const { User, Project, Tasks } = require('../../models');


router.get('/', (req, res) => {
      res.render('homepage');
});

router.get('/login', (req, res) => {
      res.render('loginpage');
});

// router.get('/login', (req, res) => {
//       if (req.session.loggedIn) {
//         res.redirect('/');
//         return;
//       }
    
//       res.render('loginpage');
// });


module.exports = router;