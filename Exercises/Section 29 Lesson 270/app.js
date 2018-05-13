var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost/restful_blog_app");

// App configuration
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// Create schema
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now}
});
// MONGOOSE model configuration
var Blog = mongoose.model("Blog", blogSchema)

// Routing


// Run the server
app.listen(3002, function() {
  console.log('server is running', 3002);
})
