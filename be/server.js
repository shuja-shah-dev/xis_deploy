const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const { mongodb } = require("./config/db");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression"); 
const authRoutes = require("./routes/authRoutes");
const postcontact = require("./routes/postcontact");
const founderRoute = require("./routes/founderRoutes");
const blogRoutes = require("./routes/blogRoutes")
const jobRoutes = require("./routes/jobRoutes");

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(compression());
app.use("/media", express.static(path.join(__dirname, "media")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.post("/contact", postcontact);
app.post("/founder", founderRoute);
app.use("/", blogRoutes);
app.use("/", jobRoutes);

mongoose
  .connect(mongodb.uri)
  .then(() => {
    app.listen("5000", () => {
      console.log("Listening on 5000");
    });
  })
  .catch((err) => console.log(err));
