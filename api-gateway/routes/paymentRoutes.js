const express = require('express');
const axios = require('axios');
const router = express.Router();

const PAYMENT_SERVICE_URL = process.env.PAYMENT_SERVICE_URL;

// Route to get all payment
router.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${PAYMENT_SERVICE_URL}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error communicating with payment service', error: error.message });
  }
});

// Route to create a payment
router.post('/create', async (req, res) => {
  try {
    const apiReq = `${PAYMENT_SERVICE_URL}/api/payments/create`;
    console.log("API Request - Payments Service Path:", apiReq);

    const response = await axios.post(apiReq, req.body);
    console.log("API Response - From payments service:", response);

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error communicating with payment service', error: error.message });
  }
});

router.post('/edit', async (req, res) => {
  try {
    // Forward the request to the Payments Service
    const apiReq = `${PAYMENT_SERVICE_URL}/api/payments/edit`;
    console.log("API Request - Payments Service Path:", apiReq);
    const response = await axios.post(apiReq, req.body);
    console.log("API Response - From payments service:", response);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error communicating with Payments Service', error: error.message });
  }
});

router.post('/delete', async (req, res) => {
  try {
    // Forward the request to the Product Service
    const apiReq = `${PAYMENT_SERVICE_URL}/api/payments/delete`;
    console.log("API Request - Payments Service Path:", apiReq);
    const response = await axios.post(apiReq, req.body);
    console.log("API Response - From Payments service:", response);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error communicating with Payments Service', error: error.message });
  }
});


module.exports = router;
