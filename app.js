const express = require("express");
const path = require("path");

const app = express();

const api = require("./server/api");
const db = require("./server/db");

//Configure .env
require("dotenv").config();

//Set port as process.env.PORT if it is present otherwise set it to 4000
const port = process.env.PORT || 4000;

//Initiate connection with database
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
}).then(() => {
  app.use("/api", api);

  app.use(express.static(path.join(__dirname, "build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });

  app.listen(port, () => {
    console.log(`Server listening at port: ${port}`);
  });
});
