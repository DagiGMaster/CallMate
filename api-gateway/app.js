require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
global.usersPhoneNo = "";

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/appointments', require('./routes/appointmentRoutes'));
app.use('/api/payments', require('./routes/paymentRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/security', require('./routes/securityRoutes'));

// Default route
app.use((req, res) => {
  res.status(404).json({ message: 'API Gateway: Route not found' });
});

// Start server
const PORT = process.env.PORT || 5800;
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
