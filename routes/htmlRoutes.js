const db = require("../models");


// Everything is commented out because we need to create our own database and figure out what routes we are using...
// the commented out stuff is the basic set up we need but it will be easier once we get the database named and set up
const routes = (app) => {
  //   // Load index page
  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/search", function (req, res) {
    res.render("search");
  });


};

module.exports = routes;