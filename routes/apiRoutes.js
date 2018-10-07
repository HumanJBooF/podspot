var db = require("../models");
const podSearch = require("podcast-search");

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

  app.post('/reviews/post', (req, res, _cb) => {
    let title = req.body.title
    let logo = req.body.logo
    let descript = req.body.descript

    let reviewObj = {
      title: title,
      logo: logo,
      descript: descript
    }
    console.log(reviewObj, 'HELLLLOOOO')
    res.json(reviewObj);
  })

};

module.exports = routes;

