const express = require("express");
const axios = require("axios");
const router = express.Router();

const APPOINTMENT_SERVICE_URL = process.env.APPOINTMENT_SERVICE_URL;

// Route to get all appointments
router.get("/get", async (req, res) => {
  try {
    const response = await axios.get(
      `${APPOINTMENT_SERVICE_URL}/api/appointments/get` // Fixed typo
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Error communicating with appointments service", // Fixed typo
      error: error.message,
    });
  }
});

router.get("/getNext14Days", async (req, res) => {
  console.log("getNext14Days - HIT");

  try {
    let url = `${APPOINTMENT_SERVICE_URL}/api/appointments/getNext14Days`;
    console.log("url", url);
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Error communicating with appointment service",
      error: error.message,
    });
  }
});

router.get("/find", async (req, res) => {
  try {
    const response = await axios.get(
      `${APPOINTMENT_SERVICE_URL}/api/appointments/find` // Fixed typo
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Error communicating with appointments service", // Fixed typo
      error: error.message,
    });
  }
});

// Route to create an appointment
router.post("/create", async (req, res) => {
  try {
    const apiReq = `${APPOINTMENT_SERVICE_URL}/api/appointments/create`;
    console.log("API Request - Appointments Service Path:", apiReq);

    const response = await axios.post(apiReq, req.body);
    console.log("API Response - From Appointments service:", response.data); // Log only data

    res.json(response.data);
  } catch (error) {
    console.error("Create appointment error:", error.response?.data || error.message); // Better error logging
    res.status(500).json({
      message: "Error communicating with Appointments service",
      error: error.message,
    });
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const apiReq = `${APPOINTMENT_SERVICE_URL}/api/appointments/delete`; // Fixed typo
    console.log("API Request - Appointments Service Path:", apiReq);

    const response = await axios.delete(apiReq, { data: req.body }); // Fixed: axios.delete needs data in config object
    console.log("API Response - From Appointments service:", response.data);

    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Error communicating with Appointments service",
      error: error.message,
    });
  }
});

module.exports = router;