const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
const appointmentRoutes = require("./src/routes/appointments");
app.use("/api/appointments", appointmentRoutes);

app.get("/", (req, res) => {
  res.send("Healthcare Appointment Manager backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
