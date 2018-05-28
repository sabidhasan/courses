var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    methodOverride  = require("method-override"),
    expressSanitizer= require("express-sanitizer");

mongoose.connect("mongodb://localhost/restful_blog_app");

// App configuration
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
// For using PUT and DELETE requests on HTML forms
app.use(methodOverride("_method"));

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
app.get("/", function(req, res) {
  res.redirect("/blogs");
})

app.get("/blogs", function(req, res) {
  Blog.find({}, function(err, blogs) {
    if (err) {
      console.log('error occured in fetching data for all blogs');
    } else {
      res.render("index", {blogs: blogs});
    }
  });
});

app.post("/blogs", function(req, res) {
  //Create blog
  req.body.blog.body = req.sanitize(req.body.blog.body)
  Blog.create(req.body.blog, function(err, newBlog) {
    if (err) {
      res.render("new");
    } else {
      res.redirect("/blogs");
    }
  });
});

//New route
app.get("/blogs/new", function(req, res) {
  res.render("new");
});


app.get("/blogs/:id", function(req, res) {
  Blog.findById(req.params.id, function (err, foundBlog) {
    if (err) {
      res.redirect("/blogs")
    } else {
      res.render("show", {blog: foundBlog})
    }
  });
});

app.put("/blogs/:id", function(req, res) {
  req.body.blog.body = req.sanitize(req.body.blog.body)
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog) {
      if (err) {
        res.redirect("/blogs")
      } else {
        res.redirect("/blogs/" + req.params.id)
      }
  });
});

app.get("/blogs/:id/edit", function(req, res) {
  Blog.findById(req.params.id, function (err, foundBlog) {
    if (err) {
      res.redirect("/blogs")
    } else {
      res.render("edit", {blog: foundBlog});
    }
  });
});

app.delete("/blogs/:id", function(req, res) {
  Blog.findByIdAndDelete(req.params.id, function(err) {
    if (err) {
      res.redirect("/blogs")
    } else {
      res.redirect("/blogs")
    }
  })
});

// Run the server
app.listen(3002, function() {
  console.log('server is running', 3002);
})
