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
    console.log("createAppointment - START!!");
    console.log("Request Body:", req.body);

    const newAppointment = new Appointment({  // Add 'new' keyword
      clientName,
      phoneNumber,
      appointmentDate,
      service,
      isDeleted,
      isPayed,
    });
    await newAppointment.save();
    console.log("New Appointment Created:", newAppointment);
    console.log("createAppointment - END!!");
    res.status(201).json(newAppointment);
  } catch (error) {
    console.error("Create appointment error:", error);
    res.status(500).json({ error: error.message });
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    if (!appointments || appointments.length === 0) {
      res.status(400).json("No Data");
    } else {
      res.status(200).json(appointments);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAppointments_Next14Days = async (req, res) => {
  try {
    console.log("getAppointments_Next14Days - START!!");

    const today = new Date();
    console.log("Today:", today);

    // Calculate the "next Friday" based on the current day
    const dayOfWeek = today.getDay(); // Sunday = 0, Monday = 1, ..., Friday = 5, Saturday = 6
    let nextFriday = new Date(today);

    if (dayOfWeek === 6) {
      // If today is Saturday, move to the next Sunday
      nextFriday.setDate(today.getDate() + 6); // Skip to next Friday
    } else if (dayOfWeek <= 5) {
      // If today is Sunday to Friday, find the upcoming Friday
      nextFriday.setDate(today.getDate() + (5 - dayOfWeek) + 7); // Move to the next Friday
    }

    console.log("Next Friday:", nextFriday);

    const appointments = await Appointment.find({
      appointmentDate: { $gte: today, $lte: nextFriday },
      isDeleted: { $ne: false },
    }).sort({ appointmentDate: 1 });

    console.log("getAppointments_Next14Days - Appointments: ", appointments);
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    console.log("getAppointments_Next14Days - END!!");
  }
};

exports.findAppointment = async (req, res) => {
  const { phoneNumber, appointmentDate } = req.query;
  try {
    const appointment = await Appointment.findOne({
      phoneNumber,
      appointmentDate,
    });
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
