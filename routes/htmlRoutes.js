var db = require("../models");


// Everything is commented out because we need to create our own database and figure out what routes we are using...
// the commented out stuff is the basic set up we need but it will be easier once we get the database named and set up
const routes = (app) => {
  //   // Load index page
  app.get("/", function (req, res) {
    res.render("index");
  });
  // });

  // GET /auth/google
  //   Use passport.authenticate() as route middleware to authenticate the
  //   request. 
  // app.get('/auth/google',
  //   passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

  // // GET /auth/google/callback
  // //   Use passport.authenticate() as route middleware to authenticate the
  // //   request.  If authentication fails, the user will be redirected back to the
  // //   login page.
  // app.get('/auth/google/callback',
  //   passport.authenticate('google', { failureRedirect: '/404' }),
  //   function (req, res) {
  //     res.redirect('/');
  //   });

};

module.exports = routes;


