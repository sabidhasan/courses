var express = require("express");
var app = express();
const errPage = "/error";

app.get("/", function(req, res) {
//req is request object, res is response object
 res.send('Hi there, welcome to my assignment');
});

app.get("/speak/:animal", function(req, res) {
  const dict = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof"
  }
  if (req.params.animal in dict) {
    res.send(`The ${req.params.animal} says ${dict[req.params.animal]}`);
  }
  res.redirect(errPage);
});

app.get("/repeat/:text/:times", function(req, res) {
  //check for NaN for times, and redirect if needed.
  const parsedTimes = parseInt(req.params.times);
  if (parsedTimes != parsedTimes || parsedTimes < 0) res.redirect(errPage);
  //generate array
  var arr = (new Array(parsedTimes)).fill(req.params.text);
  res.send(arr.join(" "));
});

app.get(errPage, function(req, res) {
  res.send("Sorry page not found!")
});

app.get("/*", function(req, res) {
  app.redirect(errPage);
})

app.listen(3000, function() {
  //console.log something here, usually
  console.log("hey");
});
