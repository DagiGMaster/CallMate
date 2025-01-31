const Appointment = require("../models/Appointment");

exports.createAppointment = async (
  clientName,
  phoneNumber,
  appointmentDate,
  service
) => {
  const newAppointment = new Appointment({
    clientName,
    phoneNumber,
    appointmentDate,
    service,
  });
  return await newAppointment.save();
};

exports.getAppointments = async (req) => {
  return await Appointment.find();
};

exports.findAppointmentByPhoneAndDate = async (
  phoneNumber,
  appointmentDate
) => {
  return await Appointment.findOne({ phoneNumber, appointmentDate });
};

exports.deleteAppointment = async (appointmentID) => {
  return await Appointment.findOneAndDelete({ appointmentID });
};
