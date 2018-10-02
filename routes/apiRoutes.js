var db = require("../models");

// Everything is commented out because we need to create our own database and figure out what routes we are using...
// the commented out stuff is the basic set up we need but it will be easier once we get the database named and set up
const routes = (app) => {
  app.get('/', (req, res) => {
    res.render('index')
  })

  app.post('/search/term', (req, res) => {
    let searches = req.body.term
    console.log(searches);
  })

};

module.exports = routes;