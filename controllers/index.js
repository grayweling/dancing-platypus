const router = require('express').Router();
const apiRoutes = require('./api');
// const homeRoutes = require('./home-routes');
// const dashRoutes = require('./dashboard-routes');

// router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/dashboard', dashRoutes);


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

  router.get('/leaderboard', (req, res) => {
    res.render('leaderboard');
  });

  router.use((req, res) => {
    res.status(404).end();
});

  
module.exports = router;