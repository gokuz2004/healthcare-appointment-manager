# API Endpoints

## Appointment Routes
- **POST /api/appointments/book**
  - Request: `{ patientName, doctorName, date, time }`
  - Response: `201 Created` with appointment object
  - Errors: `400 Bad Request` if double-booking conflict

- **GET /api/appointments/**
  - Response: List of all appointments

## Future Extensions
- **PUT /api/appointments/:id** → Update appointment
- **DELETE /api/appointments/:id** → Cancel appointment
