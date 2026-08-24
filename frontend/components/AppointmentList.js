import { useEffect, useState } from "react";

export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  return (
    <div>
      <h3>Upcoming Appointments</h3>
      <ul>
        {appointments.map((appt, i) => (
          <li key={i}>
            {appt.date} {appt.time} - {appt.patientName} with {appt.doctorName}
          </li>
        ))}
      </ul>
    </div>
  );
}
