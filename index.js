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
  var berat = Number(req.body.berat);
  var tinggi = Number(req.body.tinggi) / 100;
  var hasil = berat / Math.pow(tinggi, 2);
  var typeBody = "";
  if (hasil < 18.5) {
    typeBody = "Skinny";
  } else if (hasil > 18.5 && hasil < 24.9) {
    typeBody = "Normal";
  } else if (hasil >= 25) {
    typeBody = "Obese";
  } else {
    typeBody = "error";
  }
  res.render("result", { hasilEjs: hasil, typeBodyEjs: typeBody });
});

app.listen("3000", function () {
  console.log("Status: Running on port 3000.");
});
