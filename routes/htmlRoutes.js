var db = require("../models");


// Everything is commented out because we need to create our own database and figure out what routes we are using...
// the commented out stuff is the basic set up we need but it will be easier once we get the database named and set up
const routes = (app) => {
  //   // Load index page
  app.get("/", function(req, res) {
        res.render("index");
   });
    // });

  //   // Load example page and pass in an example by id
  //   app.get("/example/:id", function(req, res) {
  //     db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //       res.render("example", {
  //         example: dbExample
  //       });
  //     });
  //   });

  //   // Render 404 page for any unmatched routes
  //   app.get("*", function(req, res) {
  //     res.render("404");
  //   });

};

module.exports = routes;


