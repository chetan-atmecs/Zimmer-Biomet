// AppointmentDashboard.js
import React, { useState } from 'react';
import AppointmentsAndNotifications from './AppointmentsAndNotifications';
import './AppointmentDashboard.css';

const AppointmentDashboard = () => {
  const [viewType, setViewType] = useState(null); // 'appointments' or 'notifications'

  // Dummy data for appointments and notifications
  const appointmentsData = [
    { title: 'Appointment with Dr. Smith', details: 'Orthopedic consultation', time: '10:30 AM, Jan 10' },
    { title: 'Follow-up with Dr. Lee', details: 'Routine check-up', time: '2:00 PM, Jan 12' },
    { title: 'Consultation with Dr. Brown', details: 'Dermatology consultation', time: '11:00 AM, Jan 14' },
    { title: 'Dentist Appointment with Dr. Green', details: 'Dental cleaning', time: '3:00 PM, Jan 15' },
    { title: 'Cardiology Appointment with Dr. White', details: 'Heart check-up', time: '9:30 AM, Jan 17' },
    { title: 'Eye Examination with Dr. Black', details: 'Routine eye exam', time: '1:00 PM, Jan 18' },
    { title: 'Physical Therapy with Dr. Stone', details: 'Back pain therapy session', time: '4:00 PM, Jan 20' },
    { title: 'Follow-up with Dr. Lee', details: 'General health check-up', time: '10:30 AM, Jan 21' },
    { title: 'Annual Physical with Dr. Walker', details: 'Comprehensive health exam', time: '11:30 AM, Jan 23' },
    { title: 'Skin Consultation with Dr. White', details: 'Mole assessment', time: '2:30 PM, Jan 24' },
    { title: 'Follow-up with Dr. Jones', details: 'Blood pressure monitoring', time: '9:00 AM, Jan 25' },
    { title: 'Orthopedic Review with Dr. Smith', details: 'Joint pain consultation', time: '8:00 AM, Jan 27' }
  ];
  

  const notificationsData = [
    { title: 'New Appointment Request', details: 'John Doe has requested an appointment', time: '5 mins ago' },
    { title: 'Reminder: Appointment Tomorrow', details: 'Check your schedule for updates', time: '1 hour ago' },
    { title: 'Appointment Confirmed', details: 'Your appointment with Dr. Smith is confirmed', time: '2 hours ago' },
    { title: 'Follow-up Reminder', details: 'Reminder to follow up with Dr. Lee', time: '6 hours ago' },
    { title: 'Appointment Cancellation', details: 'Patient Jane Doe canceled the appointment', time: '1 day ago' },
    { title: 'New Patient Review', details: 'Mark Johnson left a review for his recent visit', time: '2 days ago' },
    { title: 'Prescription Reminder', details: 'Check prescription renewals', time: '2 days ago' },
    { title: 'Billing Notification', details: 'Pending bill for last appointment', time: '3 days ago' },
    { title: 'Health Tips', details: 'Stay hydrated and exercise daily!', time: '4 days ago' },
    { title: 'System Update', details: 'Appointment booking system will undergo maintenance', time: '5 days ago' },
    { title: 'Annual Physical Reminder', details: 'Your annual physical is due next month', time: '1 week ago' },
    { title: 'Upcoming Holiday Notice', details: 'Clinic closed on national holiday', time: '1 week ago' }
  ];
  

  return (
    <div className="appointment-dashboard">
      <div className="appointment-actions">
        <button onClick={() => setViewType('appointments')}>View All Appointments</button>
        <button onClick={() => setViewType('notifications')}>Notifications</button>
      </div>

      {viewType && (
        <AppointmentsAndNotifications
          data={viewType === 'appointments' ? appointmentsData : notificationsData}
          type={viewType}
        />
      )}
    </div>
  );
};

export default AppointmentDashboard;
