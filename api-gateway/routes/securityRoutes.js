const express = require('express');
const axios = require('axios');
const router = express.Router();

const SECURITY_SERVICE_URL = process.env.SECURITY_SERVICE_URL;

// Route to get all security
router.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${SECURITY_SERVICE_URL}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error communicating with security service', error: error.message });
  }
});

// Route to create a security
router.post('/', async (req, res) => {
  try {
    const response = await axios.post(`${SECURITY_SERVICE_URL}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error communicating with security service', error: error.message });
  }
});

module.exports = router;
