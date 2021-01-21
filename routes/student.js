var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('student', { title: 'Express', data: req.session.user.infos, isAdminBudget : req.session.user.infos.forBudget });
});

module.exports = router;
