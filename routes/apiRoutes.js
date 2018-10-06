var db = require("../models");
const podSearch = require("podcast-search");

// Everything is commented out because we need to create our own database and figure out what routes we are using...
// the commented out stuff is the basic set up we need but it will be easier once we get the database named and set up
const routes = app => {
  app.get("/", (req, res) => {
    res.render("index");
  });

  app.post("/search/term", (req, res) => {
    let searches = req.body.term;

    let dataArray = [];
    podSearch.search(searches).then(data => {
      data.forEach(pods => {
        dataArray.push({
          title: pods.title,
          descript: pods.description,
          url: pods.url,
          logo: pods.logo_url,
          website: pods.website
        });
      });

      res.send(dataArray);
      
    });
  });
};

//getting data back in the console... this is just URL links to the podcast but we can also pull down title, image, logo, descriptions
//and whatever else we need just gotta render it to handlebars
// const getPod = (searchTerm) => {
//   let dataArray = []
// podSearch.search(searchTerm)
//     .then(data => {
//       data.forEach(pods => {
//         dataArray.push({
//           title: pods.title,
//           descript: pods.description,
//           url: pods.url,
//           logo: pods.logo_url,
//           website: pods.website
//         });
//       })

//       return dataArray;
//       console.log(newArray);
//     })

// };

module.exports = routes;

