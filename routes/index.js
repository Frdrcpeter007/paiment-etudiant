var express = require('express');
var router = express.Router();
const middleware = require('../middlewares/Users');

/* GET home page. */
router.get('/', middleware.gess, (req, res, next) => {
  res.render('index', { title: 'Etudiant' });
});

module.exports = router;
