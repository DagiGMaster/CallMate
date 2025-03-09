const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const appointmentRoutes = require("./routes/appointmentRoutes");
// Middlewares
app.use(bodyParser.json());

// API Routes
app.use("/api/appointments", appointmentRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected on:", process.env.MONGO_URI))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
