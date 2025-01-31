const express = require("express");
const {
  createAppointment,
  getAppointments,
  findAppointment,
  deleteAppointment,
} = require("../controllers/appointmentController");
const router = express.Router();

router.post("/create", createAppointment);
router.get("/get", getAppointments);
router.get("/find", findAppointment);
router.delete("/delete", deleteAppointment);

module.exports = router;
