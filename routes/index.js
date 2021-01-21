var express = require('express');
var router = express.Router();
const middleware = require('../middlewares/Users');

/* GET home page. */
router.get('/', middleware.gess, (req, res, next) => {
  res.render('index', { title: 'Etudiant' });
});

router.get('/logout', (req, res) => {
  req.session = undefined;
  res.redirect(301, '/');
})

module.exports = router;
