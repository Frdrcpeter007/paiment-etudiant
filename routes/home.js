var express = require('express');
var router = express.Router();

/**  GET home page  . **/

router.get('/home', function(req, res, next) {
  res.render('dashboard/home', { title: 'Express', isAdminBudget : req.session.user.infos.forBudget });
});


module.exports = router;