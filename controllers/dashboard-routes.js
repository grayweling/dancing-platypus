const router = require('express').Router();
const { User } = require('../models');
const userAuth = require('../utils/auth');

router.get('/', userAuth, (req, res) => {
  console.log(req.session);
});


module.exports = router;
