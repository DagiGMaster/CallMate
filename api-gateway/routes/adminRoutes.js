const express = require('express');
const axios = require('axios');
const router = express.Router();

const ADMIN_SERVICE_URL = process.env.ADMIN_SERVICE_URL;

// Route to get all admin
router.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${ADMIN_SERVICE_URL}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error communicating with admin service', error: error.message });
  }
});

// Route to create a admin
router.post('/', async (req, res) => {
  try {
    const response = await axios.post(`${ADMIN_SERVICE_URL}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error communicating with admin service', error: error.message });
  }
});

module.exports = router;
