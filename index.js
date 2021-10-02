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
  var weight = Number(req.body.berat);
  var height = Number(req.body.tinggi) / 100;
  var result = weight / Math.pow(height, 2);
  var bodyType = "";
  if (result < 18.5) {
    bodyType = "Skinny";
  } else if (result > 18.5 && result < 24.9) {
    bodyType = "Normal";
  } else if (result >= 25) {
    bodyType = "Plus";
  } else {
    bodyType = "error. result is not a number";
  }
  res.render("result", { hasilEjs: result, typeBodyEjs: bodyType });
});

app.listen("3000", function () {
  console.log("Status: Running on port 3000.");
});
