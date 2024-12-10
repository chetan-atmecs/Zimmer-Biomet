// CurrentDoctorInfo.js
import React, { useEffect, useState } from 'react';
import './style/CurrentDoctorInfo.css';

const CurrentDoctorInfo = ({ doctorId }) => {
  const [doctor, setDoctor] = useState(null);

  // Fetch doctor information when a doctor is selected
  useEffect(() => {
    if (doctorId) {
      fetch(`http://66.66.66.23:3005/api/v1/doctor/info?doctor_id=${doctorId}`)
        .then(response => response.json())
        .then(data => setDoctor(data.doctor))
        .catch(error => console.error('Error fetching doctor info:', error));
    }
  }, [doctorId]);

  return (
    <div className="current-doctor-info">
      <h3>Doctor Information</h3>
      {doctor ? (
        <>
          <h4>{doctor.first_name} {doctor.last_name}</h4> {/* Full Name */}
          <p>Specialization: {doctor.specialization.specialization_name}</p> {/* Specialization */}
          <p>{doctor.description}</p> {/* Description */}
        </>
      ) : (
        <p>Select a doctor to view details</p>
      )}
    </div>
  );
};

export default CurrentDoctorInfo;