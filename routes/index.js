var express = require("express");
var router = express.Router();

//import database
var connection = require("../library/database");

/* GET home page. */
router.get("/", function (req, res, next) {
  //   res.render('index', { title: 'Express' });
  // Cek koneksi ke database
  connection.connect(function (err) {
    if (err) {
      // Jika terjadi error saat koneksi, kirimkan status gagal
      res.render("index", {
        title: "Express",
        dbStatus: "Koneksi ke database gagal: " + err.message,
      });
    } else {
      // Jika berhasil terkoneksi ke database
      res.render("index", {
        title: "Express",
        dbStatus: "Koneksi ke database berhasil",
      });
    }
  });
});

module.exports = router;
