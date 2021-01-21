const { head } = require('..');

var express = require('express'),
  router = express.Router(),
  API = require('../includes/config').URL().API,
  functions = require('../includes/modules'),
 app = express();

  /** Module d'enregistrement d'etudiant */

  
  router.post('/save', (req, res) => {
    var url = `${API}/students/save`,
    
      datas = {
        name: req.body.name,
        firstName: req.body.firstName,
        lastName: req.body.lastName,    
        gender: req.body.gender,
        phone: req.body.phone,
        promotion: req.body.promotion,
        academicYear: req.body.academicYear,
  
      },
      headers = {
        'auth-token' : req.session.user.token
      };

    if (functions.NoEmpty(datas)) {
      functions.axiosPostRequest(url, datas, (statusCode, state, response) => {
        if (state) {
          var { result } = response;
          res.status(statusCode).send(response);
        } else {
          res.status(statusCode).send(response);
        }
      }, headers)
    } else {
      res.send({
        state: false,
        message: "Veuillez tous les champs important"
      })
    }
  
  })
  
  /** Module de recupration de l'etudant */


  router.get('/get', (req, res) => {
      var url = `${API}/students/gets`;
      headers = {
        'auth-token' : req.session.user.token
      }; 
      functions.axiosGetRequest(url, (statusCode, state, data) => {
          state ? res.status(statusCode).send(data)
          : res.status(500).send(data)
      }, headers)

  });

  module.exports = router;