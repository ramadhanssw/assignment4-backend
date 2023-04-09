const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.get("/ping", (req, res) => {
  res.send("Pong ");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
