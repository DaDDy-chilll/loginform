require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const bdparser = require("body-parser");
const mongo = require("mongoose");


const app = express();

app.set("view engine", "ejs");
app.use(bdparser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render('login',{loginHead:'Login',btn:'Submit'});
});

app.listen(process.env.PORT, function () {
  console.log(`Server is running on Port:${process.env.PORT}`);
});
