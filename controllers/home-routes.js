const router = require('express').Router();
const { User } = require('../models');
const userAuth = require('../utils/auth');

//----- User login route -----//
router.get('/signin', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }
  res.render('signin');
});

//----- Direct user to signup page when clicking signup link -----//
router.get('/signup', (req, res) => {
  res.render('signup');
});


module.exports = router;
