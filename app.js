const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Server is active");
});

app.listen(8080, function () {
  console.log("Server is running on Port:3000");
});
