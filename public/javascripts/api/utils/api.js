/**
 * Permet de lancer une requête ajax de type Get
 * @param {String} url L'url de la requête
 * @param {Function} callback Fonction callback à appeler
 * @returns {void}
 */
export function ajaxGet(url, callback) {
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        success: (result) => {
            callback(result);
        },
        error: (error) => {
            console.log(error);
            if (error) {
                callback({
                    state: false,
                    message: "Une erreur est survenue coté serveur"
                });
            }
        }
    })
}

 /**
  * Renvoi toutes les villes
  * @param {String} region L'id de la province de la ville
  * @param {Function} callback Fonction callback à appeler
  */
 export function getTowns(region, callback) {
    ajaxGet("/api/towns/"+region, callback);
}

/**
  * Renvoi toutes les communes
  * @param {String} commune L'id de la province de la commune
  * @param {Function} callback Fonction callback à appeler
  */
 export function getCommunes(commune, callback) {
    ajaxGet("/api/communes/"+commune, callback);
}

/**
  * Renvoi les régions (provinces) d'un pays
  * @param {String} country L'id du pays
  * @param {Function} callback Fonction callback à appeler
  */
 export function getRegionsByCountry(country, callback) {
    ajaxGet("/api/regions/"+country, callback);
}

 /**
  * Renvoi toutes les pays
  * @param {Function} callback Fonction callback à appeler
  */
 export function getRoles(callback) {
    ajaxGet("/api/roles", callback);
}

 /**
  * Renvoi toutes les pays
  * @param {Function} callback Fonction callback à appeler
  */
 export function getCountries(callback) {
    ajaxGet("/api/countries", callback);
}

/**
  * Renvoi toutes les catégories
  * @param {Number} limit La limite de données à renvoyer
  * @param {Function} callback Fonction callback à appeler
  */
 export function getCategories(limit, callback) {
    ajaxGet("/api/categories/all/"+limit, callback);
}

/**
  * Renvoi les produits en vogues (top)
  * @param {Number} limit La limite de données à renvoyer
  * @param {Function} callback Fonction callback à appeler
  */
 export function getTopProducts(limit, callback) {
    ajaxGet("/api/products/top/"+limit, callback);
}

/**
  * Renvoi les produits d'une catégorie
  * @param {String} category L'id de la catégorie
  * @param {Number} limit La limite de données à renvoyer
  * @param {Function} callback Fonction callback à appeler
  */
 export function getProductsByCategory(category, limit, callback) {
    ajaxGet(`/api/products/category/${category}/${limit}`, callback);
}

/**
  * Renvoi les produits
  * @param {Number} limit La limite de données à renvoyer
  * @param {Function} callback Fonction callback à appeler
  */
 export function getProducts(limit, callback) {
    ajaxGet("/api/products/"+limit, callback);
}