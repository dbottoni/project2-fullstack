const router = require('express').Router();
const sequelize = require('../config/connection');





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



module.exports = router;