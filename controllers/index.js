// const homeRoutes = require('./home-routes.js');
const router = require('express').Router();

// router.use('/', homeRoutes);
router.get('/', (req, res) => {
    res.render('homepage');
  });

  router.get('/dashboard', (req, res) => {
    res.render('dashboard');
  });

  router.get('/signin', (req, res) => {
    res.render('signin');
  });
  
module.exports = router;