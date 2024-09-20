const express = require("express");
const app = express();

app.get("/aaa", (req, res) => {
  res.send("shamim rana it's work fine");
});
app.get("/", (req, res) => {
  res.send("shamim rana it's work fine");
});

app.use((req, res, next) => {
  const error = new Error("router not found ");
  error.statusCode = 404;
  next(error);
});

app.use((err, req, res, next) => {
  console.log(err.statusCode);

  res.send(`server is error status code is and message is ${err.message} `);
});

module.exports = app;
