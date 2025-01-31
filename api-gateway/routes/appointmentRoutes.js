const express = require("express");
const axios = require("axios");
const router = express.Router();

const APPOINTMENT_SERVICE_URL = process.env.APPOINTMENT_SERVICE_URL;

// Route to get all appiotments
router.get("/get", async (req, res) => {
  try {
    const response = await axios.get(
      `${APPOINTMENT_SERVICE_URL}/api/appiontments/get`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Error communicating with appiotments service",
      error: error.message,
    });
  }
});

router.get("/find", async (req, res) => {
  try {
    const response = await axios.get(
      `${APPOINTMENT_SERVICE_URL}/api/appiontments/find`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Error communicating with appiotments service",
      error: error.message,
    });
  }
});

// Route to create a appiotments
router.post("/create", async (req, res) => {
  try {
    const apiReq = `${APPOINTMENT_SERVICE_URL}/api/appiontments/create`;
    console.log("API Request - Appointments Service Path:", apiReq);

    const response = await axios.post(apiReq, req.body);
    console.log("API Response - From Appointments service:", response);

    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Error communicating with Appointments service",
      error: error.message,
    });
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const apiReq = `${APPOINTMENT_SERVICE_URL}/api/appiontments/delete`;
    console.log("API Request - Appointments Service Path:", apiReq);

    const response = await axios.delete(apiReq, req.body);
    console.log("API Response - From Appointments service:", response);

    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Error communicating with Appointments service",
      error: error.message,
    });
  }
});

module.exports = router;
