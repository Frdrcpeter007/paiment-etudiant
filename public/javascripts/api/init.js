/**
 * Gere toutes les requetes post d'un formulaire vers l'api
 * @param {*} form le formulaire qui est envoyé 
 * @param {*} button le bouton submit du formulaire, nous sert a y mettre le loader
 * @param {*} route la route a laquelle envoyée les datas
 * @param {*} callback la fonctions callback
 */
function postForm(form, button, url, block, color, callback) {
    var form = $('#' + form),
        inputs,
        obj = {},
        name,
        btnSubmit,
        btnText;
    form.submit((e) => {
        e.preventDefault();
        inputs = e.target.elements;
        btnSubmit = $("#" + button);
        btnText = btnSubmit.html();
        //Recuperation des inputs text et autres
        for (let index = 0; index < inputs.length; index++) {
            name = inputs[index].name;
            if (/input|textarea/i.test(e.target.elements[index].localName)) {
                obj[name] = inputs[index].value;
            }
            if (/select/i.test(e.target.elements[index].localName)) {
                obj[name] = inputs[index].options[inputs[index].selectedIndex].value;
            }
        }
        //Envoi de la requete avec ajax
        $.ajax({
            type: 'POST',
            url: `${url}`,
            dataType: "json",
            data: obj,
            beforeSend: function() {
                btnSubmit.html(`Chargement...`);
            },
            success: function(data) {
                btnSubmit.html(btnText);
                if (data.state) {
                    callback(true, data);
                } else {
                    callback(false, data);
                }
            },
            error: function(err) {
                btnSubmit.html(btnText);
                callback(false, err);
            }
        });
    })
}

/**
 * Post un formulaire
 * @param {String} form L'ID du formulaire
 * @param {Element} button Le boutton de validation
 * @param {String} url L'url de la requête
 * @param {String} block L'ID du block pour le loader
 * @param {String} color La couleur du loader
 * @param {Function} callback Fonction callback à appeler
 */
function postFormulaire(form, button, url, block, color, callback) {
    var form = $('#' + form),
        inputs,
        obj = {},
        name,
        btnSubmit,
        btnText;
    form.submit((e) => {
        e.preventDefault();
        inputs = e.target.elements;
        btnSubmit = $("#" + button);
        btnText = btnSubmit.html();
        //Recuperation des inputs text et autres
        for (let index = 0; index < inputs.length; index++) {
            name = inputs[index].name;
            if (/input|textarea/i.test(e.target.elements[index].localName)) {
                obj[name] = inputs[index].value;
            }
            if (/select/i.test(e.target.elements[index].localName)) {
                obj[name] = inputs[index].options[inputs[index].selectedIndex].value;
            }
        }
        //Envoi de la requete avec ajax
        $.ajax({
            type: 'POST',
            url: `${url}`,
            dataType: "json",
            data: obj,
            beforeSend: function() {
            },
            success: function(data) {
                callback(data);
            },
            error: function(err) {
                console.log(err);
                callback({
                    flag: false,
                    message: "Une erreur est survenue, réessayez",
                    result: null
                });
            }
        });
    })
}

export { postForm, postFormulaire }