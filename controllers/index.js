// const homeRoutes = require('./home-routes.js');
const router = require('express').Router();

// router.use('/', homeRoutes);
router.get('/', (req, res) => {
    res.render('homepage');
  });
  
module.exports = router;