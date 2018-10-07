const db = require('../models');

const routes = (app, passport) => {
    app.get('/', (req, res) => {
        console.log(req.user)
        res.render('index');
    });

    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect("/");
    });

    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    app.get('/auth/google/callback', passport.authenticate('google'), function (req, res) {
        res.redirect('http://localhost:3000/');
    });

    // Simple route middleware to ensure user is authenticated.
    function ensureAuthenticated (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/404');
    }
    app.get('/', ensureAuthenticated, (req, res) => {
        res.render('/');
    });
}

module.exports = routes;