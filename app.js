const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const { PORT = 3000 } = process.env;
const app = express();
const routes = require("./routes/users.js");
const userRouter = require("./routes/users");
const cardRouter = require("./routes/cards");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/mestodb");

app.use(express.static(path.join(__dirname, "public")));

//app.use("/", routes);
app.use("/users", userRouter);
app.use("/cards", cardRouter);
app.use(bodyParser.json()); // для собирания JSON-формата
app.use(bodyParser.urlencoded({ extended: true })); // для приёма веб-страниц внутри POST-запроса

app.use((req, res, next) => {
  req.user = {
    _id: "637e319e55ee246cfc0c827c",
  };

  next();
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
