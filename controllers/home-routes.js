const router = require('express').Router();
const sequelize = require('../config/connection');
// const { User, Project, Tasks } = require('../../models');


router.get('/', (req, res) => {
      res.render('homepage');
});




module.exports = router;