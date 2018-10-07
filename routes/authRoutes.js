const db = require('../models');

const routes = (app, passport) => {
    app.get('/', (req, res) => {
        console.log(req.user)
        res.render('index');
    });

    app.get('/', ensureAuthenticated, (req, res) => {
        console.log(req.user, 'WHERE IS THIS')
        res.render('/');
    });

    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect("/");
    });

    app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

    app.get('/auth/google/callback',
        passport.authenticate('google',
            {
                failureRedirect: '/404',
                successRedirect: '/'
            }));

    // Simple route middleware to ensure user is authenticated.
    function ensureAuthenticated (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/404');
    }
}
module.exports = routes;