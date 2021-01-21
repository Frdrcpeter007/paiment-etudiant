module.exports = {
    /**
     * Middleware d'authentification de l'utilisateur
     * @param {Express.Request} req Les données envoyées par le client
     * @param {Express.Response} res La réponse à envoyer
     * @param {Function} next 
     */
    auth(req, res, next) {
        if (!req.session.user) {
            res.redirect('/');
        } else {
            next();
        }
    },

    /**
     * Permet de checker si l'utilisateur est connecté et essaie d'accéder à une route qu'il n'est pas sensé entrée
     * @param {Express.Request} req Les données envoyées par le client
     * @param {Express.Response} res La réponse à envoyer
     * @param {Function} next 
     */
    gess(req, res, next) {
        if (req.session.user) {
            res.redirect('/student');
        } else {
            next();
        }
    }
}