import { useState } from "react";

export default function AppointmentForm() {
  const [form, setForm] = useState({
    patientName: "",
    doctorName: "",
    date: "",
    time: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/appointments/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(data.message || "Appointment booked successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="patientName" placeholder="Patient Name" onChange={handleChange} />
      <input name="doctorName" placeholder="Doctor Name" onChange={handleChange} />
      <input type="date" name="date" onChange={handleChange} />
      <input type="time" name="time" onChange={handleChange} />
      <button type="submit">Book Appointment</button>
    </form>
  );
}
