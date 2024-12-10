// DoctorList.js
import React, { useEffect, useState } from 'react';
import './style/DoctorList.css';

const DoctorList = ({ onSelectDoctor }) => {
  const [doctors, setDoctors] = useState([]);

  // Fetch doctors from the backend API
  useEffect(() => {
    fetch('http://66.66.66.23:3005/api/v1/doctor/doctors')
      .then(response => response.json())
      .then(data => setDoctors(data.doctors))
      .catch(error => console.error('Error fetching doctor data:', error));
  }, []);

  return (
    <div className="doctor-list">
      <h3>Available Doctors</h3>
      {doctors.length > 0 ? (
        doctors.map(doctor => (
          <div
            key={doctor.doctor_id}
            className="doctor-card"
            onClick={() => onSelectDoctor(doctor.doctor_id, `${doctor.first_name} ${doctor.last_name}`)} // Send doctor_id when clicked
          >
            <div className="doctor-info">
              <h4>{doctor.first_name} {doctor.last_name}</h4> {/* Full Name */}
              <p>{doctor.specialization.specialization_name}</p> {/* Specialization */}
              <p>{doctor.description}</p> {/* Description */}
            </div>
          </div>
        ))
      ) : (
        <p>Loading doctors...</p>
      )}
    </div>
  );
};

export default DoctorList;