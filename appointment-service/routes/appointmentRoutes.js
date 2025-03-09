const express = require("express");
const {
  createAppointment,
  getAppointments,
  getAppointments_Next14Days,
  findAppointment,
  deleteAppointment,
} = require("../controllers/appointmentController");
const router = express.Router();

router.post("/create", createAppointment);
router.get("/get", getAppointments);
router.get("/getNext14Days", getAppointments_Next14Days);
router.get("/find", findAppointment);
router.delete("/delete", deleteAppointment);

module.exports = router;
