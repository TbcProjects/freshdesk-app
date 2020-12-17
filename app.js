const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/post", (req, res) => {
  res.send("Hello from post");
});

app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));
