const express = require("express");
const router = express.Router();
const { bookAppointment, getAppointments } = require("../controllers/appointmentController");

// Book a new appointment
router.post("/book", bookAppointment);

// Get all appointments
router.get("/", getAppointments);

module.exports = router;
