const express = require('express');
const axios = require('axios');
const router = express.Router();

const USER_SERVICE_URL = process.env.USER_SERVICE_URL;

// Route to create a user
router.post('/create', async (req, res) => {
  try {
    const apiReq = `${USER_SERVICE_URL}/api/users/create`;
    console.log("API Request - Users Service Path:", apiReq);

    const response = await axios.post(apiReq, req.body);
    console.log("API Response - From users service:", response);

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error communicating with user service', error: error.message });
  }
});

router.post('/edit', async (req, res) => {
  try {
    // Forward the request to the User Service
    const apiReq = `${USER_SERVICE_URL}/api/users/edit`;
    console.log("API Request - Users Service Path:", apiReq);
    const response = await axios.post(apiReq, req.body);
    console.log("API Response - From users service:", response);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error communicating with Users Service', error: error.message });
  }
});

router.post('/delete', async (req, res) => {
  try {
    // Forward the request to the User Service
    const apiReq = `${USER_SERVICE_URL}/api/users/delete`;
    console.log("API Request - Users Service Path:", apiReq);
    const response = await axios.post(apiReq, req.body);
    console.log("API Response - From Users service:", response);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error communicating with Users Service', error: error.message });
  }
});

module.exports = router;
