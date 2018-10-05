// require("../config/auth");

const routes = (app, passport) => {
    app.get('/', (req, res) => {
        res.render('index')

    });

    app.get('/login', isLoggedIn, (req, res) => {
        res.render('login', {
            user: req.user
        });
    });

    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect("/");
    });

    app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

    app.get('/auth/google/callback', passport.authenticate('google', {
        successRedirect: '/login',
        failureRedirect: '/'
    }));


    // Simple route middleware to ensure user is authenticated.
    function isLoggedIn (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/login');
    }
}
module.exports = routes;