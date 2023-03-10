require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

// Express app
const app = express();
const cors = require("cors");

// Middleware

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  // console.log(req.path, req.method);
  // console.log(process.env.MONGODB_URI);
  next();
});

// Routes
app.use("/api/workouts", workoutRoutes);

// Connect to DB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    // Listen for requests
    app.listen(process.env.PORT, () => {
      console.log(
        `Connected to MongoDB & listening on port ${process.env.PORT} OK`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
