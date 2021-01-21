const { response } = require('express');

var express = require('express'),
    router = express.Router(),
    API = require('../includes/config').URL().API,
    functions = require('../includes/modules'),
    app = express();

/** Module de paiement */ 
router.post('/', (req, res) => {
    var url = `${API}/payments/save`,
    datas = {
        student: req.body.student,
        amount: parseFloat(req.body.amount),
        tranche: req.body.tranche
    },
    headers = {
        'auth-token' : req.session.user.token
      };
    if(functions.NoEmpty(datas)) {
        functions.axiosPostRequest(url, datas, (statusCode, state, response) => {
            res.status(statusCode).send(response);
        }, headers)
    }else {
        res.send({
            status : false,
            message : "Veuillez remplir tous les champs important"
        })
    }
})

module.exports = router;