const db = require("../models");

const routes = (app) => {
  // Load index page
  app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/reviews", (req, res) => {
    res.render("reviews");
  });


};

module.exports = routes;