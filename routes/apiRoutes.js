const db = require("../models");
const podSearch = require('podcast-search');

const routes = (app) => {
  app.get('/', (req, res) => {
    res.render('index')
  })

  app.post('/search/term', (req, res) => {
    let searches = req.body.term
    console.log(searches);
    getPod(searches)
  })

};

//getting data back in the console... this is just URL links to the podcast but we can also pull down title, image, logo, descriptions 
//and whatever else we need just gotta render it to handlebars
const getPod = (searchTerm) => {
  let dataArray = []
  podSearch.search(searchTerm)
    .then(data => {
      data.forEach(descript => {
        dataArray.push({ data: descript.url });
      })
      console.log(dataArray)
      return dataArray;
    })
}

module.exports = routes;