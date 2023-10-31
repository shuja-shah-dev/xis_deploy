const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const { mongodb } = require("./config/db");
const bodyParser = require("body-parser");
const path = require("path");

const authRoutes = require("./routes/authRoutes");

app.use(cors());

app.use("/media", express.static(path.join(__dirname, "media")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use("/api/auth", authRoutes);

mongoose
  .connect(mongodb.uri)
  .then(() => {
    app.listen("5000", () => {
      console.log("Listening on 5000");
    });
  })
  .catch((err) => console.log(err));
