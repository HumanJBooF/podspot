var db = require("../models");
const podSearch = require("podcast-search");

// Everything is commented out because we need to create our own database and figure out what routes we are using...
// the commented out stuff is the basic set up we need but it will be easier once we get the database named and set up
const routes = app => {
  app.get("/", (req, res) => {
    res.render("index");
  });

  app.post("/", (req, res) => {
    let searches = req.body.term;
    let dataArray = [];
    podSearch.search(searches).then(data => {
      data.forEach(pods => {
        dataArray.push({
          title: pods.title,
          descript: pods.description,
          url: pods.mygpo_link,
          logo: pods.logo_url,
          website: pods.website
        });
      });


      res.json(dataArray);

    });

  });

  app.post('/', (req, res) => {
    db.User.findOne({
      where: {
        id: req.user.id
      }
    }, data => {
      console.log(data, 'datatatata')
      res.render('index', { user: data })
    })
  })



};

module.exports = routes;

