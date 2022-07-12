const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

//Middlewares
app.use(express.json());

//Import routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

//Router Middlewares
app.use("/api/users", authRoute);
app.use("/api/posts", postRoute);

app.listen(3000, () => {
  console.log("Listening");
});

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("DB connected");
});
