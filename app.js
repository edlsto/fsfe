const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! How are you?");
});

app.get("/teapot", (req, res) => {
  res.status(418);
  res.set("X-MyHeader", "Yo");
  res.send("teapot");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
