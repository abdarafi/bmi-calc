//jshint esversion:6
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height) / 100;
  var result = weight / Math.pow(height, 2);
  var typeBody = "";
  if (result < 18.5) {
    typeBody = "Skinny";
  } else if (result > 18.5 && result < 24.9) {
    typeBody = "Normal";
  } else if (result >= 25) {
    typeBody = "Obese";
  } else {
    typeBody = "error";
  }
  res.render("result", { resultEjs: result, typeBodyEjs: typeBody });
});

app.listen("3000", function () {
  console.log("Status: Running on port 3000.");
});
