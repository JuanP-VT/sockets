const express = require("express");
const app = express();
const cors = require("cors");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
console.log("running");
app.listen(3000);
