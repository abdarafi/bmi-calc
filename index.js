//jshint esversion:6
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

  var berat = Number(req.body.berat);
  var tinggi = Math.pow(Number(req.body.tinggi), 2);
  var hasil = berat / tinggi;
  if (hasil < 18.5) {
    res.send("Hasil BMI Anda adalah : " + hasil + "<br>Status berat badan Anda : <strong>Kurus.</strong>");
  } else if (hasil > 18.5 && hasil < 24.9) {
    res.send("Hasil BMI Anda adalah : " + hasil + "<br>Status berat badan Anda : <strong>Normal.</strong>");
  } else {
    res.send("Hasil BMI Anda adalah : " + hasil + "<br>Status berat badan Anda : <strong>Kegemukan.</strong>");
  }


});

app.listen("3000", function() {
  console.log("Status: Berjalan pada port 3000.");
});
