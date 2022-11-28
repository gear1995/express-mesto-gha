const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const { PORT = 3000 } = process.env;
const app = express();
const routes = require("./routes/users.js");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/mestodb");

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);

app.use((req, res, next) => {
  req.user = {
    _id: "637e319e55ee246cfc0c827c",
  };

  next();
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
