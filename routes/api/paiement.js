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

router.get('/list', (req, res) => {
    var url = `${API}/payments/list/by/student`;
    headers = {
      'auth-token' : req.session.user.token
    }; 
    functions.axiosGetRequest(url, (statusCode, state, data) => {
        state ? res.status(statusCode).send(data)
        : res.status(500).send(data)
    }, headers)

});

module.exports = router;