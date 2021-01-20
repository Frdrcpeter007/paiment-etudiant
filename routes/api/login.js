const { route } = require('..');
const { response } = require('express');

var express = require('express'),
    router = express.Router(),
    API = require('../includes/config').URL().API,
    functions = require('../includes/modules'),
    app = express();


/** Module de connexion */
router.post('/login', (req, res) => {
    var url = `${API}/api/login`,
    datas = {
        name: req.body.login,
        password: req.body.password
    };
    
    if(functions.NoEmpty(datas)) {
        functions.axiosPostRequest(url, datas, (statusCode, state, response) => {
            if(state) {
              var { result } = response;
              res.status(statusCode).send(response);
            }else {
              res.status(statusCode).send(response);
            }
        })
    }else{
        res.send({
          state: false,
          message: "Veuillez remplir tous les champs "
        })
    }

})

module.exports = router;