const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const paymentRoutes = require('./routes/paymentRoutes');

app.use(cors());
app.use(bodyParser.json());

app.use('/api/payments', paymentRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected on:', process.env.MONGO_URI))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5803;
app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});
