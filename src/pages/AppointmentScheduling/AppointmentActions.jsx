// AppointmentActions.js
import React from 'react';
import './style/AppointmentActions.css';

const AppointmentActions = ({ onNewAppointment, onViewAppointments, onNotifications }) => {
  return (
    <div className="appointment-actions">
      <button onClick={onViewAppointments}>View All Appointments</button>
      <button onClick={onNotifications}>Notifications</button>
    </div>
  );
};

export default AppointmentActions;
