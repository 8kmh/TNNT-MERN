require("dotenv").config();

const express = require("express");
const app = express();

// Middleware
app.get("/", (req, res, next) => {
  console.log("toto");
  next();
});

// Routes
app.get("/", (req, res) => {
  res.json({ msg: "welcome to the app!" });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT} OK`);
});
