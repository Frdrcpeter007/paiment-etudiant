/**
 * Renvoi l'url de la page
 * @return {String}
 */
export function getUrl() {
    return window.location.pathname;
}

/**
 * Permet de lancer des fonctions et des instructions par rapport aux urls
 * @param {String} url L'url courant
 * @param {Function} callback La fonction callback à appeler
 */
export function router(url, callback) {
    if (getUrl() === url) {
        callback();
    }
}

/**
 * Router par regex
 * @param {String} url L'url
 * @param {Function} callback
 * @returns {void}
 */
export function routerRegex (url, callback) {
    let regex = new RegExp("^"+url, "i");

    if (regex.test(getUrl())) {
        callback();
    }
}

/**
 * Vérifie si l'objet passé en paramètre n'est pas vide
 * @param {Object} object L'object à vérifier
 * @return {Boolean}
 */
export function objectNotEmpty(object) {
    return object ? Object.keys(object).length > 0 : false;
}

/**
 * Permet de faire une redirection vers un autre url
 * @param {String} url L'url à rédiriger
 * @return {void}
 */
export function redirect(url) {
    window.location.pathname = url;
    
}

/**
 * Renvoi le Host du site
 * @return {String}
 */
export function getHost() {
    return window.location.origin;
}

/**
 * Permet de valider les inputs d'un formulaire
 * @param {Array} fields Les champs du formulaire à valider
 * @param {Object} errors Les erreurs renvoyées lors du lancement de la requête
 * @return {void}
 */
export function validateInputForm(fields = [], errors = {}) {
    if (fields.length > 0) {
        fields.forEach((value, index, tab) => {
            const field = $('#'+value);
            const helper = $('#helper-'+value);
            
            if (errors.hasOwnProperty(value)) {

                $(field).addClass('has-error');
                $(helper).html(errors[value]);

                if ($('#append-'+value)) {
                    $('#append-'+value).css({
                        borderColor: '#ff0000'
                    })
                }

                if ($(helper).hasClass('helper-has-success')) {
                    $(helper).removeClass('helper-has-success');
                }

                if ($(field).hasClass('has-success')) {
                    $(field).removeClass('has-success');
                }

                $(helper).addClass('helper-has-error');
            }else {
                $(field).addClass('has-success');
                $(helper).html('');
                if ($('#append-'+value)) {
                    $('#append-'+value).css({
                        borderColor: '#00e554'
                    })
                }
            }
        });
    }
}

/**
* Permet de cacher et afficher le mot de passe
* @param {Element} passwordElement
* @param {Element} eyeElement
*/
export function manipuleEyePassword(passwordElement, eyeElement) {
   var type = passwordElement.type == 'text' ? passwordElement.type = 'password' : passwordElement.type = 'text';

   if (type == 'text') {
       eyeElement.classList.remove('fa-eye');
       eyeElement.classList.add('fa-eye-slash');
   }else {
       eyeElement.classList.remove('fa-eye-slash');
       eyeElement.classList.add('fa-eye');
   }
}

/**
 * Permet de créer l'interface à afficher l'image à uploader
 * @param {Files} file L'objet file du fichier uploader
 * @param {Element} prev L'élément à afficher l'image
 * @param {String} listClassNames Les classes qu'il faut ajouter à l'image
 */
export function createThumbnail(file, prev, listClassNames) {
    var reader = new FileReader();
    
    reader.onload = function () {
        
        var imgElement = document.createElement('img');
            imgElement.style.maxWidth = '100%';
            imgElement.style.maxHeight = '100%';
            imgElement.src = this.result;
            prev.innerHTML = '';
            imgElement.className = listClassNames;
            prev.appendChild(imgElement);

    }

    reader.readAsDataURL(file);
}

/**
 * Permet de véifier si le type (extension) du fichier passé est image
 * @param {String} imgType Le type de l'image
 */
export function isImgFile(imgType) {
    var allowedTypes = ['png', 'jpg', 'jpeg', 'gif', 'ico'];

    if (~allowedTypes.indexOf(imgType)) {
         return true;
    }else{
        return false;
    }
}

/**
 * Permet d'afficher directement une image quand on l'upload
 * @param {Element} file Fichier à uploader
 * @param {Element} elementPrevious L'élément où à afficher
 * @param {String} listClassNames Les classes qu'il faut ajouter à l'images
 * @return {void}
 */
export function printImgOnUpload(file, elementPrevious, listClassNames = '') {
    let imgType;

    imgType = file.name.split('.');
    imgType = imgType[imgType.length - 1].toLowerCase();

    if (isImgFile(imgType)) {
        
        createThumbnail(file, elementPrevious, listClassNames);

        return true;
    }else{
        alert("Extension image non valide");
        return false;
    }
}

// export function uploadImageFIle(elementFile, elementPrevious, callback) {
//     $(elementFile).on('change', (e) => {
//         let $this = e.currentTarget;
//         let files = $this.files;
//     })
// }

/**
 * Permet de générer un mot de passe
 * @returns {String} password
 */
export function generatePassword() {
    let char = "AZERTYUIOPQSDFGHJKLMWXCVBN1234567890azertyuiopqsdfghjklmwxcvbn1234567890&$#)(!?@/*";
    let charArray = char.split('');
    let password = '';
    let max = charArray.length;

    for (let i = 0; i <= 9; i++) {
        password += charArray[rand(i, max)];
    }
    
    return password;
}

/**
 * Renvoi les données d'un formulaire soumis
 * @param {Element} form Le formualire soumis
 * @returns {Object} data
 */
export function getFormData (form) {
    var inputs = form.elements,
        data = {};

    for (let index = 0; index < inputs.length; index++) {
        var name = form.elements[index].name;
        if (/input/i.test(form.elements[index].localName)) {
            data[name] = inputs[index].value;
        }
        if (/select/i.test(form.elements[index].localName)) {
            data[name] = inputs[index].options[inputs[index].selectedIndex].value;
        }
    }

    return data;
}

/**
 * Vérifier s'y a pas de fields empty
 * @param {Object} data Les données à vérifier
 * @param {Array} fields Les cahmps à ne pas être vide
 * @returns {Boolean}
 */
export function noEmpty (data, fields) {
    let flag = true;

    for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        
        if (!data[field]) {
            flag = false;

            let input = $('input[name="'+field+'"]');
            let form_group = input.parents('.form-group')
                                  .addClass('has-danger');
            let input_group_text = form_group.children('.input-group')
                                             .children('.input-group-prepend')
                                             .children('.input-group-text');

            $(input).on('keyup', (e) => {
                input_group_text.addClass('text-muted');
            })
        }
    }

    return flag;
}

/**
 * On vérifie si l'utilisateur est connecté ou pas
 * @param {Function} callback
 */
export function getAuthentificate(callback) {
    $.ajax({
        type: "GET",
        url: "/api/users/authentificate",
        dataType: "json",
        success: function (response) {
            callback(response);
        },
        error: function (error) {
            callback(null);
        }
    });
}