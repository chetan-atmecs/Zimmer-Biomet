// AppointmentPage.js
import React, { useState, useEffect } from 'react';
import DoctorList from './DoctorList';
import CurrentDoctorInfo from './CurrentDoctorInfo';
import AppointmentScheduler from './AppointmentScheduler';
import './style/AppointmentPage.css';
import './style/AppointmentActions.css';
import NavigationArrows from '../../layouts/MainLayout/NavigationArrows';
import AppointmentsAndNotifications from './AppointmentsAndNotifications';
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toast CSS

const AppointmentPage = () => {
  const [selectedDoctor, setSelectedDoctor] = useState({ id: null, name: '' });
  const [viewType, setViewType] = useState(null); // To track which view is active
  const [data, setData] = useState([]); // To store the fetched data
  const [loading, setLoading] = useState(false); // To show a loading state

  // Function to handle when a doctor is selected
  const handleSelectDoctor = (id, name) => {
    setSelectedDoctor({ id, name });
  };

  // Fetch data based on the selected type (appointments or notifications)
  useEffect(() => {
    if (viewType) {
      setLoading(true);
      fetchData(viewType)
        .then((fetchedData) => setData(fetchedData))
        .finally(() => setLoading(false));
    }
  }, [viewType]);

  const fetchData = async (type) => {
    console.log("in calling api future appointment or notification");
    const endpoint =
      type === 'appointments'
        ? 'http://66.66.66.23:3005/api/v1/appointment/future/1'
        : 'http://66.66.66.23:3005/api/v1/appointment/future/1';
    try {
      const response = await fetch(endpoint);
      if (!response.ok) throw new Error('Failed to fetch data');
      const jsonData = await response.json();

      // Ensure correct structure
      if (type === 'appointments') {
        return { future_appointments: jsonData.future_appointments || [] };
      }

      // For notifications
      return { future_appointments: jsonData.future_appointments || [] };
    } catch (error) {
      console.error(error);

      // Fallback to safe structure
      return type === 'appointments' ? { future_appointments: [] } : [];
    }
  };

  const handleRefresh = () => {
    if (viewType) {
      setLoading(true);
      fetchData(viewType)
        .then((fetchedData) => setData(fetchedData))
        .finally(() => setLoading(false));
    }
  };

  // Function to send reminder notifications
  const sendReminder = async () => {
    try {
      const response = await fetch('http://66.66.66.23:3005/api/v1/appointment/reminder/1', {
        method: 'POST',
      });
      const result = await response.json();
      if (response.ok) {
        toast.success(result.message); // Show success message in toast
      } else {
        toast.error(result.message || 'Failed to send reminders'); // Show error message in toast
      }
    } catch (error) {
      console.error('Error sending reminders:', error);
      toast.error('An error occurred while sending reminders'); // Show error message in toast
    }
  };

  return (
    <>
      <NavigationArrows title={'Book Appointment'} />
      <div className="appointment-page">
        <div className="left-sidebar">
          <DoctorList onSelectDoctor={handleSelectDoctor} />
        </div>

        <div className="middle-section">
          <CurrentDoctorInfo doctorId={selectedDoctor.id} />
          <AppointmentScheduler doctorId={selectedDoctor.id} doctorName={selectedDoctor.name} />
        </div>

        <div>
          <div className="appointment-actions">
            <button onClick={() => setViewType('appointments')} >View All Appointments</button>
            <button onClick={() => setViewType('notifications')}>Notifications</button>
            <button onClick={sendReminder} >
              Get Reminder
            </button> {/* Added Get Reminder button */}
          </div>

          {viewType && (
            <div>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <AppointmentsAndNotifications
                  data={data}
                  type={viewType}
                  onRefresh={handleRefresh} // Pass the refresh function
                />
              )}
            </div>
          )}
        </div>
      </div>
      {/* Toast Container for displaying toast messages */}
      <ToastContainer />
    </>
  );
};

export default AppointmentPage;