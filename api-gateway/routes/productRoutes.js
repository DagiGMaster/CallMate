const express = require('express');
const axios = require('axios');
const router = express.Router();

const PRODUCT_SERVICE_URL = process.env.PRODUCT_SERVICE_URL;

// Route to get all products
router.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${PRODUCT_SERVICE_URL}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error communicating with product service', error: error.message });
  }
});

// Route to create a product
router.post('/create', async (req, res) => {
  try {
    // Forward the request to the Product Service
    const apiReq = `${PRODUCT_SERVICE_URL}/api/products/create`;
    console.log("API Request - Product Service Path:", apiReq);
    const response = await axios.post(apiReq, req.body);
    console.log("API Response - From product service:", response);
    res.json(response.data); 
  } catch (error) {
    res.status(500).json({ message: 'Error communicating with Product Service', error: error.message });
  }
});

// Route to edit a product
router.post('/edit', async (req, res) => {
  try {
    // Forward the request to the Product Service
    const apiReq = `${PRODUCT_SERVICE_URL}/api/products/edit`;
    console.log("API Request - Product Service Path:", apiReq);
    const response = await axios.post(apiReq, req.body);
    console.log("API Response - From product service:", response);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error communicating with Product Service', error: error.message });
  }
});

router.post('/delete', async (req, res) => {
  try {
    // Forward the request to the Product Service
    const apiReq = `${PRODUCT_SERVICE_URL}/api/products/delete`;
    console.log("API Request - Product Service Path:", apiReq);
    const response = await axios.post(apiReq, req.body);
    console.log("API Response - From product service:", response);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error communicating with Product Service', error: error.message });
  }
});

module.exports = router;
