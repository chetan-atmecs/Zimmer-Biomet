import React, { useState } from 'react';
import { ToastContainer,toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import './style/AppointmentsAndNotifications.css';

// Initialize Toastify


const AppointmentsAndNotifications = ({ data = {}, type, onRefresh }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  // Determine the data to display based on the type
  const items = type === 'appointments' ? data.future_appointments || [] : data.future_appointments || [];

  const handleCancel = async (appointment) => {
    const { appointment_id } = appointment;

    try {
      const response = await fetch(`http://66.66.66.23:3005/api/v1/appointment/cancel/${appointment_id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        const responseData = await response.json(); // Parse the JSON response
        console.log('API Response:', responseData);
        const cancelledAppointment = responseData.cancelled_appointment;
        console.log("cancelled appointment : ", cancelledAppointment)
        toast.info(
          `Your appointment with Dr. ${cancelledAppointment.doctor_name} on ${cancelledAppointment.appointment_date} at ${cancelledAppointment.appointment_time} was cancelled successfully.`,
          { position: 'top-center', autoClose: 3000 }
        );
        setTimeout(() => {
          onRefresh(); // Execute onRefresh after 3 seconds
      }, 3000);// Refresh the data
      } else {
        toast.error('Failed to cancel the appointment. Please try again.', { position: 'top-center', autoClose: 2000 });
      }
    } catch (error) {
      console.error('Error canceling appointment:', error);
      toast.error('An error occurred. Please try again.', { position: 'top-center', autoClose: 2000 });
    }
  };

  const handleReschedule = async (appointment) => {
    const { appointment_id } = appointment;

    try {
      const response = await fetch(`http://66.66.66.23:3005/api/v1/appointment/reschedule/${appointment_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        const responseData = await response.json(); // Assuming the response contains updated details
        console.log('API Response:', responseData);
         // Properly declare rescheduled_appointment
        const rescheduled_appointment = responseData.rescheduled_appointment;
        console.log("reschedule app :",rescheduled_appointment);
        toast.info(
          `Your appointment with Dr. ${rescheduled_appointment.doctor_name} is automatically rescheduled to ${rescheduled_appointment.appointment_date} at ${rescheduled_appointment.appointment_time}.`,
          { position: 'top-center', autoClose: 3000 }
        );
        setTimeout(() => {
          onRefresh(); // Execute onRefresh after 3 seconds
      }, 3000);
        //onRefresh(); // Refresh the data
      } else {
        toast.error('Failed to reschedule the appointment. Please try again.', { position: 'top-center', autoClose: 2000 });
      }
    } catch (error) {
      console.error('Error rescheduling appointment:', error);
      toast.error('An error occurred. Please try again.', { position: 'top-center', autoClose: 2000 });
    }
  };

  return (
    <div className="appointments-notifications-container">
      <h4>{type === 'appointments' ? 'All Appointments' : 'Notifications'}</h4>
      <button onClick={onRefresh} className="appointments-notifications-refresh-button">
        Refresh
      </button>
      <ul className="appointments-notifications-scrollable-ul">
        {items.length === 0 ? (
          <p className="appointments-notifications-empty">
            No {type === 'appointments' ? 'appointments' : 'notifications'} available.
          </p>
        ) : (
          items.map((item, index) => (
            <li
              key={item.appointment_id || item.notification_id || index}
              className={`appointments-notifications-item ${
                hoveredItem === (item.appointment_id || item.notification_id) ? 'highlight' : ''
              }`}
              onMouseEnter={() => setHoveredItem(item.appointment_id || item.notification_id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {type === 'appointments' && (
                <>
                  <div className="appointments-notifications-item">
                    <div className="appointments-notifications-item-title">
                      <strong>Doctor:</strong> {item.doctor_name}
                    </div>
                    <div className="appointments-notifications-item-time">
                      <strong>Date:</strong> {item.appointment_date}
                    </div>
                    <div className="appointments-notifications-item-time">
                      <strong>Time:</strong> {item.appointment_time}
                    </div>
                    <div className="appointments-notifications-item-details">
                      <strong>Description:</strong> {item.description}
                    </div>
                    <div className="appointments-notifications-item-status">
                      <strong>Status:</strong> {item.appointment_status || 'Scheduled'}
                    </div>

                    <div className="appointments-cancel-reschedule">
                      Cancel
                    </div>

                    {hoveredItem === item.appointment_id && (
                      <div className="appointments-notifications-item-actions">
                        <button
                          className="appointments-notifications-cancel-button"
                          onClick={() => handleCancel(item)}
                        >
                          Cancel
                        </button>
                        {/* <button
                          className="appointments-notifications-reschedule-button"
                          onClick={() => handleReschedule(item)}
                        >
                          Reschedule
                        </button> */}
                      </div>
                    )}
                  </div>
                </>
              )}
              {type === 'notifications' && (
                <div className="notifications-item">
                  <div className="notifications-item-message">
                  {item.message || (
                   <>
                     Your appointment with <strong>Dr. {item.doctor_name}</strong> is on <strong>{item.appointment_date}</strong> at <strong>{item.appointment_time}</strong>.
                   </>
                   )}
                  </div>

                </div>
              )}
            </li>
          ))
        )}
      </ul>
      <ToastContainer />
    </div>
  );
};

export default AppointmentsAndNotifications;
