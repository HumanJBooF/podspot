const db = require("../models");

const routes = (app) => {
  // Load index page
  app.get("/", (req, res) => {
    res.render("index");
  });


};

module.exports = routes;