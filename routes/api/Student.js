var express = require('express'),
  router = express.Router(),
  API = require('../includes/config').URL().API,
  functions = require('../includes/modules'),
  app = express();

  /** Module d'enregistrement d'etudiant */

  
  router.post('/save', (req, res) => {
    var url = `${API}/api/students/save`,
      
      datas = {
        name: req.body.name,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: gender,
        phone: req.body.phone,
        promotion: req.body.promotion,
        academicYear: req.body.academicYear,
  
      };

    if (functions.NoEmpty(datas)) {
      datas.residence = resi;
      functions.axiosPostRequest(url, datas, (statusCode, state, response) => {
        if (state) {
          var { result } = response;
          res.status(statusCode).send(response);
        } else {
          res.status(statusCode).send(response);
        }
      })
    } else {
      res.send({
        state: false,
        message: "Veuillez tous les champs important"
      })
    }
  
  })


  module.exports = router;