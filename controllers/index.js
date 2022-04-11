const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

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