// Dummy in-memory storage
let appointments = [];

const bookAppointment = (req, res) => {
  const { patientName, doctorName, date, time } = req.body;

  // Simple double-booking prevention
  const conflict = appointments.find(
    (appt) => appt.doctorName === doctorName && appt.date === date && appt.time === time
  );

  if (conflict) {
    return res.status(400).json({ message: "Doctor already booked at this time." });
  }

  const newAppointment = { patientName, doctorName, date, time };
  appointments.push(newAppointment);
  res.status(201).json(newAppointment);
};

const getAppointments = (req, res) => {
  res.json(appointments);
};

module.exports = { bookAppointment, getAppointments };
