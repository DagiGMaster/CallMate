const appointmentService = require("../services/appointmentService");
const Appointment = require("../models/Appointment");

exports.createAppointment = async (req, res) => {
  const {
    clientName,
    phoneNumber,
    appointmentDate,
    service,
    isDeleted,
    isPayed,
  } = req.body;
  try {
    const newAppointment = await appointmentService.createAppointment(
      clientName,
      phoneNumber,
      appointmentDate,
      service,
      isDeleted,
      isPayed
    );
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const appointments = await appointmentService.getAppointments(req);
    if (!appointments || appointments.length === 0) {
      res.status(400).json("No Data");
    } else {
      res.status(200).json(appointments);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.findAppointment = async (req, res) => {
  const { phoneNumber, appointmentDate } = req.query;
  try {
    const appointment = await appointmentService.findAppointmentByPhoneAndDate(
      phoneNumber,
      appointmentDate
    );
    if (!appointment) {
      res.status(404).json({
        message: "No appointment found for this phone number and date",
      });
    } else {
      res.status(200).json(appointment);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAppointment = async (req, res) => {
  console.log("Delete appointment HIT!!");

  const { appointmentID } = req.body; // Changed from req.query to req.body
  try {
    const appointment = await Appointment.findOneAndDelete({
      appointmentID,
    });
    console.log("appointment: ", appointment);
    if (!appointment) {
      res.status(404).json({
        message: "No appointment found for this appointment ID",
      });
    } else {
      res
        .status(200)
        .json({ message: "Appointment deleted successfully", appointment });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
