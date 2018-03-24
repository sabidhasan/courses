var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/results", function(req, res) {
  //do the API call
  request("http://omdbapi.com/?s=california&apikey=thewdb", function(err, resp, body) {
    if (!err && resp.statusCode == 200) {
      //body is good
      const data = JSON.parse(body);
      // res.send(data)
      res.render("results", { data });
    }
  });

});

app.listen(3000, function() {
  console.log('Server started. Listening on 3000...')
})
