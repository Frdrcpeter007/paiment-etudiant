function InitFunctions() {
    inputNumber();
}

function inputNumber() {
    $('.input-number').on('keyup', (e) => {
        const $this = e.currentTarget;
        const value =  parseInt($this.value);

        if (isNaN(value) && value.length == 1) {
            $($this).val('');
        }
    })
}

/**
 * Permet de mettre la prémière lettre d'un texte en majuscule
 * @param {String} text Le text à traiter
 * @return {String}
 */
function ucFirst(text) {
    return text[0].toUpperCase() + text.substring(1);
}

/**
 * Permet de renvoyer un nombre aléatoire entre le min et le max
 * @param {Number} min Le nombre minimum
 * @param {Number} max Le nombre maximum
 * @param {Boolean} integer Demande si le nombre doit être entier ou pas
 */
function rand (min, max, integer = true) {
    if(!integer) {
        return Math.random() * (max - min) + min;
    }else {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

/**
 * $.unserialize
 *
 * Takes a string in format "param1=value1&param2=value2" and returns an object { param1: 'value1', param2: 'value2' }. If the "param1" ends with "[]" the param is treated as an array.
 *
 * Example:
 *
 * Input:  param1=value1&param2=value2
 * Return: { param1 : value1, param2: value2 }
 *
 * Input:  param1[]=value1&param1[]=value2
 * Return: { param1: [ value1, value2 ] }
 *
 * @todo Support params like "param1[name]=value1" (should return { param1: { name: value1 } })
 */
$.unserialize = function(serializedString){
    var str = decodeURI(serializedString);
    var pairs = str.split('&');
    var obj = {}, p, idx, val;
    for (var i=0, n=pairs.length; i < n; i++) {
        p = pairs[i].split('=');
        idx = p[0];

        if (idx.indexOf("[]") == (idx.length - 2)) {
            // Eh um vetor
            var ind = idx.substring(0, idx.length-2)
            if (obj[ind] === undefined) {
                obj[ind] = [];
            }
            obj[ind].push(p[1]);
        }
        else {
            obj[idx] = p[1];
        }
    }
    return obj;
};

/**
 * Renvoi une date en seconds
 * @param {String} date_string La chaine de date
 */
function getDateInSecondsByDateString(date_string) {
    return new Date(date_string) / 1000 | 0;
}

/**
 * Permet de formater la date
 * @param {String} date_string chainde de la date à formater
 * @returns {String} date_formated
 */
function formatDate(date_string) {
    let date = new Date(date_string);
    let day = date.getDate() < 10 ? 0+''+date.getDate() : date.getDate();
    let month = date.getMonth() + 1;
    month = month == 13 ? 1 : month;
    month = month < 10 ? 0+''+month : month;
    let year = date.getFullYear();

    return day+'/'+month+'/'+year;
}

/**
 * Permet de renvoyer le mois actuel
 * @returns {String} date_formated
 */
function getMonth() {
    let date = new Date;
    let month = date.getMonth() + 1;
    month = month == 13 ? 1 : month;
    month = month < 10 ? 0+''+month : month;

    return month;
}

/**
 * Permet de renvoyer le mois en entier
 * @returns {String} date_formated
 */
function getIntMonth(date_string = null) {
    let date = date_string ? new Date(date_string) : new Date;
    let month = date.getMonth() + 1;
    month = month == 13 ? 1 : month;

    return month;
}

/**
 * Permet de formater la date
 * @param {String} date_string chainde de la date à formater
 * @returns {String} date_formated
 */
function getYear(date_string = null) {
    return date_string ? new Date(date_string).getFullYear() : new Date().getFullYear();
}

/**
 * Permet de formater la date
 * @param {String} date_string chainde de la date à formater
 * @returns {String} date_formated
 */
function formatDate2(date_string = null) {
    let date = date_string ? new Date(date_string) : new Date();
    let day = date.getDate() < 10 ? 0+''+date.getDate() : date.getDate();
    let month = date.getMonth() + 1;
    month = month == 13 ? 1 : month;
    month = month < 10 ? 0+''+month : month;
    let year = date.getFullYear();

    return year+'-'+month+'-'+day;
}

/**
 * Renvoi le nombre de sécondes en minutes
 * @param {Number} seconds Le nombre de sécondes en minutes
 * @return {Number} minutes
 */
function getSeconds2Minutes(seconds) {
    seconds = parseInt(seconds);

    return seconds / 60;
}

/**
 * Renvoi le nombre de jours en sécondes
 * @param {Number} days Le nombre de jours
 * @return {Number} minutes
 */
function getDays2Seconds(days) {
    return 86400 * days;
}

/**
 * Vérifier s'y a pas de fields empty
 * @param {Object} data Les données à vérifier
 * @returns {Boolean}
 */
function notEmpty (data) {
    let flag = true;

    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            if (data[key] == "" || data[key] == "0") {
                return false
            }
        }
    }

    return true;
}

/**
 * Permet de metrre des espaces entre pour formater un notre
 * @param {Number} x Le nombre à mettre des space
 */
function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}

/**
 * Permet d'enlever des espaces entre pour formater un notre
 * @param {Number} x Le nombre à mettre des space
 */
function numberWithoutSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/ /g, "");
    return parts.join(".");
}

function inputNumberByTypeText() {
    $('.input-number').each(function() {
        var value = this.value;

        this.value = numberWithSpaces(value);
    })

    $('.input-number').on('change, keyup', function() {
        var currentInput = $(this).val();
        var fixedInput = currentInput.replace(/[A-Za-z!@#$%^&*()]/g, '');
        $(this).val(fixedInput);
    });

    $('.input-number').on('blur', function () {
        var value = $(this).val();
        $(this).val(numberWithSpaces(value));
    })
}

/**
 * Pertmet de lancer le popup de sweetalert
 * @param {Element} element_launcher L'élément du lancement du modal sweetalert de la suppression
 * @param {String} type Le type de message à affiche (c'est beaucoup plus pour l'icon)
 * @param {Function} callback La fonction callback à appeler
 */
function launcSweetAlert(element_launcher, type, callback) {
    $(element_launcher).on('click', function(e){
        if ($(this)[0].nodeName.toLowerCase() == 'a') {
            e.preventDefault();
        }
      
        var message = $(this).data('message');
        var title = $(this).attr('title');
        var $this = this;

        swal({
            title: title,
            text: message,
            icon: type,
            buttons: ["Annuler", "Valider"],
            dangerMode: true,
          })
          .then((is_confirmed) => {
              callback(is_confirmed, $this);
          });
      });
}

/**
 * Loader de block
 * @param {Element} blockElement Le block à placer le loader
 */
function loaderBlock(blockElement) {
    $(blockElement).addClass('position-relative');
    $(blockElement).append(`
        <div class="text-center pb-5 loader-block" style="position: absolue;top: 0;left:0;z-index: 99999;">
            <i class="fa fa-3x fa-spinner fa-pulse text-pink"></i>
        </div>
    `);
}

/**
 * Stop Loader de block
 * @param {Element} blockElement Le block à placer le loader
 */
function stopLoaderBlock(blockElement) {
    $(blockElement).children('.loader-block').remove();
}

/**
 * Permet de mettre le super loader
 * @param {Element} elementContainer L'élément container du loader
 * @param {String} color La couleur
 */
function makeSuperLoader (elementContainer, color = 'pink', text = null) {
    $(elementContainer).addClass('position-relative');
    $(elementContainer).children('.super-loader').remove();
    $(elementContainer).prepend(`
        <div class="super-loader">
            <div class="loader-content">
                <i class="fa fa-3x fa-spinner fa-pulse text-${color}"></i>
                ${text ? '<p>'+text+'</p>' : ''}
            </div>
        </div>
    `);
}

/**
 * Stop le super loader
 * @param {Element} elementContainer L'élément container du loader
 */
function stopSuperLoader(elementContainer) {
    $(elementContainer).children('.super-loader').remove();
}

/**
 * Renvoi les datas
 * @returns {Object} data
 */
function getDatas() {
    let data = $('body').attr('data-datas');
    return data ? JSON.parse(data) : {};
}

/**
 * Permet de faire une redirection
 * @param {String} url 
 */
function redirect(url) {
    window.location.pathname = url;
}