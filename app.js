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
  res.render('login',{loginHead:'login',btn_switch:'SignUp',btn_value:'signup'});
});
app.post('/login',(req,res)=>{
  const userEmail = req.body.email;
  const userPass = req.body.pass;
  res.send(`this login post route Email:${userEmail} and Pass:${userPass}`);
})

app.get('/signup',(req,res)=>{
  res.render('login',{loginHead:'signup',btn_switch:'Login',btn_value:''});
});

app.post('/signup',(req,res)=>{
  const userEmail = req.body.email;
  const userPass = req.body.pass;
  res.send(`this signup route with Email:${userEmail} and Pass:${userPass}`);
})

app.listen(process.env.PORT, function () {
  console.log(`Server is running on Port:${process.env.PORT}`);
});
