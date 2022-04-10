const router = require('express').Router();
const { User } = require('../models');
const userAuth = require('../utils/auth');

// //----- GET the homepage -----//
// router.get('/', (req, res) => {
//   User.findAll({
//     attributes: ['id', 'title', 'content', 'created_at'],
//     order: [['created_at', 'DESC']],
//     include: [
//       {
//         model: User,
//         attributes: ['username'],
//       },
//       {
//         model: Comment,
//         attributes: ['content', 'created_at'],
//         include: {
//           model: User,
//           attributes: ['username'],
//         },
//       },
//     ],
//   })
//     .then((blogData) => {
//       const blogs = blogData.map((blog) => blog.get({ plain: true }));
//       res.render('homepage', {
//         blogs,
//         loggedIn: req.session.loggedIn,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

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
