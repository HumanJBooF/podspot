const db = require("../models");

const routes = (app) => {
  // Load index page
  app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/search", (req, res) => {
    res.render("search");
  });

  app.get('/login', (req, res) => {
    res.render('login');
  });

};

module.exports = routes;