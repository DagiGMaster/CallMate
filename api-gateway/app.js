// require("dotenv").config();
// const express = require("express");
// const morgan = require("morgan");
// const bodyParser = require("body-parser");
// global.usersPhoneNo = "";

// const app = express();

// // Middleware
// app.use(
//   cors({
//     origin: "http://localhost:3000", // Allow only frontend requests
//     methods: "GET, POST, PUT, DELETE",
//     allowedHeaders: "Content-Type, Authorization",
//   })
// );
// app.use(morgan("dev"));

// app.use(bodyParser.json());

// // Routes
// app.use("/api/products", require("./routes/productRoutes"));
// app.use("/api/users", require("./routes/userRoutes"));
// app.use("/api/appointments", require("./routes/appointmentRoutes"));
// app.use("/api/payments", require("./routes/paymentRoutes"));
// app.use("/api/admin", require("./routes/adminRoutes"));
// app.use("/api/security", require("./routes/securityRoutes"));

// // Default route
// app.use((req, res) => {
//   res.status(404).json({ message: "API Gateway: Route not found" });
// });

// // Start server
// const PORT = process.env.PORT || 5800;
// app.listen(PORT, () => {
//   console.log(`API Gateway running on port ${PORT}`);
// });

require("dotenv").config();
const express = require("express");
const cors = require("cors"); // Import CORS
const morgan = require("morgan");
const bodyParser = require("body-parser");

global.usersPhoneNo = "";

const app = express();

// ✅ **CORS Middleware (Allow Only Frontend at http://localhost:3000)**
app.use(
  cors({
    origin: "http://localhost:3000", // Allow only frontend requests
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Content-Type, Authorization",
  })
);

// ✅ **Alternative Manual CORS Configuration**
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Allow frontend
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight requests for CORS
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

// ✅ **Middleware for Logging and Parsing**
app.use(morgan("dev")); // Logs requests
app.use(bodyParser.json()); // Parse JSON request bodies

// ✅ **Routes for Microservices**
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/appointments", require("./routes/appointmentRoutes"));
app.use("/api/payments", require("./routes/paymentRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/security", require("./routes/securityRoutes"));

// ✅ **Default Route (Catch-All for Unmatched Routes)**
app.use((req, res) => {
  res.status(404).json({ message: "API Gateway: Route not found" });
});

// ✅ **Start Server**
const PORT = process.env.PORT || 5800;
app.listen(PORT, () => {
  console.log(`🚀 API Gateway running on port ${PORT}`);
});
