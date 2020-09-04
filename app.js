const express = require("express");
const app = express();
app.engine("html", require("ejs").renderFile);

//routes
app.get("/", function (req, res) {
  res.render("index.html");
});

app.listen("8080", "127.0.0.1", function () {
  console.log("express works");
});
