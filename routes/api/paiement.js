const { response } = require('express');

var express = require('express'),
    router = express.Router(),
    API = require('../includes/config').URL().API,
    functions = require('../includes/modules'),
    app = express();

/** Module de paiement */ 
router.post('/paiement', (req, res) => {
    var url = `${API}/api/payments/save`,
    datas = {
        student: req.body.student,
        amount: req.body.amount,
        tranche: req.body.tranche
    };
    if(functions.NoEmpty(datas)) {
        functions.axiosGetRequest(url, datas, (statuaCode, state, response) => {
            if(state) {
                var { resultat } = response;
                res.status(statusCode).send(response);
            }else{
                res.status(statusCode).send(response);
            }
        })
    }else {
        res.send({
            status : false,
            message : "Veuillez remplir tous les champs important"
        })
    }
})

module.exports = router;