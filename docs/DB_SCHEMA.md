# Database Schema

## Appointment Table
- id (Primary Key)
- patientName (String)
- doctorName (String)
- date (Date)
- time (Time)

## Doctor Table
- id (Primary Key)
- name (String)
- specialization (String)
- availability (JSON)

## Patient Table
- id (Primary Key)
- name (String)
- contactInfo (String)
