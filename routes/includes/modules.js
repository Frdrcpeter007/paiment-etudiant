const axios = require('axios').default;
module.exports = {
  /**
   * Permet de lancer des requetes get vers axios
   * @param {*} url url a laquelle envoyé la requette
   * @param {*} callback la fonction de retour
   */
  axiosGetRequest(url, callback, headers = null) {
    axios.get(url, {headers})
      .then(response => {
        callback(response.status, true, response.data);
      })
      .catch(err => {
        callback(500, false, err);
      })
  },
  /**
   * Permet de faire les requetes post vers axios
   * @param {*} url l'url a la quelle envoyée la demande
   * @param {*} datas les donnees a enregistrer
   * @param {*} callback la fonction de retour
   */
  axiosPostRequest(url, datas, callback, headers = null) {
    axios.post(url, datas, {headers})
      .then(response => {

        if (response.data.state) {
          callback(response.status, true, response.data);
        } else {
          callback(response.status, false, response.data);
        }
      })
      .catch(err => {
        callback(500, false, err);
      })
  },

  /**
   * Permet de faire les requetes PUT vers axios
   * @param {*} url l'url a la quelle envoyée la demande
   * @param {*} datas les donnees a enregistrer
   * @param {*} callback la fonction de retour
   */
  axiosPutRequest(url, datas = null, callback) {
    axios.put(url, datas)
      .then(response => {

        if (response.data.state) {
          callback(response.status, true, response.data);
        } else {
          callback(response.status, false, response.data);
        }
      })
      .catch(err => {
        callback(500, false, err);
      })
  },

  /**
   * Permet de verifier si un objet n'est pas vide
   * @param {*} object L'objet a parcourir
   */
  NoEmpty(object) {

    let flag = false;
    for (const value in object) {
      if (object[value] != "" && object.hasOwnProperty(value)) {
        flag = true;
      } else {
        flag = false;
        break;
      }
    }

    return flag;
  }
}