// import React, { useState, useEffect } from 'react';
// import CalendarComponent from './CalendarComponent';
// import './style/AppointmentScheduler.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const AppointmentScheduler = ({ doctorId, doctorName }) => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [availableSlots, setAvailableSlots] = useState([]); // Store appointment_time and doctor_availability_id
//   const [bookedSlots, setBookedSlots] = useState([]);
//   const [selectedSlot, setSelectedSlot] = useState(null); // Store selected appointment_time
//   const [selectedDoctorAvailabilityId, setSelectedDoctorAvailabilityId] = useState(null); // Store corresponding doctor_availability_id
//   const [description, setDescription] = useState('');
//   const [appointments, setAppointments] = useState(JSON.parse(localStorage.getItem('appointments')) || []);
//   const [notificationMethod, setNotificationMethod] = useState('');

//   // Function to format date as YYYY-MM-DD
//   const formatDate = (date) => {
//     const d = new Date(date);
//     let month = '' + (d.getMonth() + 1);
//     let day = '' + d.getDate();
//     const year = d.getFullYear();

//     if (month.length < 2) month = '0' + month;
//     if (day.length < 2) day = '0' + day;

//     return [year, month, day].join('-');
//   };
//   // Function to fetch available slots from the API
//   const fetchAvailableSlots = async (doctorId, date) => {
//     try {
//       const formattedDate = formatDate(date);
//       const response = await fetch('http://localhost:8001/api/v1/doctor/availability', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           doctor_id: doctorId,
//           date: formattedDate,
//         }),
//       });

//       const data = await response.json();
//       console.log(data)
//       if (response.ok && data.available_slots && Array.isArray(data.available_slots.appointment_slots)) {
//         setAvailableSlots(data.available_slots.appointment_slots);
//         console.log(availableSlots)
//         setBookedSlots([]); // Reset booked slots if needed
//       } else {
//         setAvailableSlots([]);
//       }
//     } catch (error) {
//       console.error('Error fetching available slots:', error);
//       toast.error('Failed to fetch available slots. Please try again later.');
//     }
//   };

//   // Fetch available slots whenever a new date or doctor is selected
//   useEffect(() => {
//     if (selectedDate && doctorId) {
//       fetchAvailableSlots(doctorId, selectedDate);
//     }
//   }, [selectedDate, doctorId]);

//   const handleSlotSelect = (slot, doctorAvailabilityId) => {
//     if (!bookedSlots.includes(slot)) {
//       setSelectedSlot(slot);
//       setSelectedDoctorAvailabilityId(doctorAvailabilityId); // Store corresponding doctor_availability_id
//     }
//   };

//   const handleCreateAppointment = async () => {
//     if (!selectedSlot || !doctorId || !selectedDoctorAvailabilityId) {
//       toast.error('Please select a doctor, a time slot, and an availability ID.', {
//         position: 'top-center',
//         autoClose: 3000,
//       });
//       return;
//     }

//     if (bookedSlots.includes(selectedSlot)) {
//       toast.error('This slot is already booked. Please select another slot.', {
//         position: 'top-center',
//         autoClose: 3000,
//       });
//       return;
//     }

//     const appointment = {
//       doctor_availability_id: selectedDoctorAvailabilityId, // Use the selected doctor_availability_id
//       patient_id: 1, // Replace with actual patient ID, can be fetched from logged-in user details
//       doctor_id: doctorId,
//       description,
//       notification_type: notificationMethod || 'SMS', // Defaulting to SMS if no method selected
//     };

//     try {
//       const response = await fetch('http://localhost:8001/api/v1/appointment/book', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(appointment),
//       });

//       if (response.ok) {
//         const responseData = await response.json();

//         // Successfully booked appointment, update local state and UI
//         const newAppointments = [...appointments, { ...appointment, slot: selectedSlot }];
//         setAppointments(newAppointments);
//         localStorage.setItem('appointments', JSON.stringify(newAppointments));

//         const newBookedSlots = [...bookedSlots, selectedSlot];
//         setBookedSlots(newBookedSlots);
//         localStorage.setItem('bookedSlots', JSON.stringify(newBookedSlots));

//         setSelectedSlot(null);
//         setSelectedDoctorAvailabilityId(null);
//         setAvailableSlots([]);
//         setDescription('');
//         setNotificationMethod(''); // Reset the notification method after appointment is created

//         toast.success('Appointment successfully booked!', {
//           position: 'top-center',
//           autoClose: 3000,
//         });
//       } else {
//         toast.error('Failed to book appointment. Please try again later.', {
//           position: 'top-center',
//           autoClose: 3000,
//         });
//       }
//     } catch (error) {
//       console.error('Error booking appointment:', error);
//       toast.error('An error occurred. Please try again later.', {
//         position: 'top-center',
//         autoClose: 3000,
//       });
//     }
//   };

//   return (
//     <div className="appointment-scheduler">
//       <h3>Set Availability</h3>
//       <CalendarComponent onDateChange={(date) => setSelectedDate(date)} size="small" />

//       {availableSlots.length > 0 && (
//         <div className="available-slots">
//           <label>Available Slots for {selectedDate}</label>
//           <div className="slot-options">
//             {availableSlots.map((slotData, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleSlotSelect(slotData.appointment_time, slotData.doctor_availability_id)}
//                 className={bookedSlots.includes(slotData.appointment_time) ? 'booked' : 'available'}
//                 disabled={bookedSlots.includes(slotData.appointment_time)}
//               >
//                 {slotData.appointment_time}
//               </button>
//             ))}
//           </div>
//           {selectedSlot && (
//             <p className="slot-selection-message">
//               You have selected the slot: {selectedSlot}.
//             </p>
//           )}
//         </div>
//       )}

//       <div className="notification-method">
//         <label>Notification Method</label>
//         <div>
//           <input
//             type="radio"
//             id="sms"
//             name="notification"
//             value="SMS"
//             onChange={(e) => setNotificationMethod(e.target.value)}
//             checked={notificationMethod === 'SMS'}
//           />
//           <label htmlFor="sms" className="bold-label">SMS</label>
//         </div>
//         <div>
//           <input
//             type="radio"
//             id="email"
//             name="notification"
//             value="Email"
//             onChange={(e) => setNotificationMethod(e.target.value)}
//             checked={notificationMethod === 'Email'}
//           />
//           <label htmlFor="email" className="bold-label">Email</label>
//         </div>
//       </div>

//       <label>Description</label>
//       <textarea
//         rows="4"
//         placeholder="Add a description..."
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       ></textarea>

//       <button className="create-appointment" onClick={handleCreateAppointment}>Create Appointment</button>

//       <ToastContainer />
//     </div>
//   );
// };

// export default AppointmentScheduler;




import React, { useState, useEffect } from 'react';
import CalendarComponent from './CalendarComponent';
import './style/AppointmentScheduler.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppointmentScheduler = ({ doctorId, doctorName }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]); // Appointment slots
  const [bookedSlots, setBookedSlots] = useState([]); // Booked slots
  const [selectedSlot, setSelectedSlot] = useState(null); // Selected slot
  const [selectedDoctorAvailabilityId, setSelectedDoctorAvailabilityId] = useState(null); // Availability ID
  const [description, setDescription] = useState('');
  const [appointments, setAppointments] = useState(JSON.parse(localStorage.getItem('appointments')) || []);
  const [notificationMethod, setNotificationMethod] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  // Function to format date as YYYY-MM-DD
  const formatDate = (date) => {
    if (!date) return '';
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Fetch available slots from the API
  const fetchAvailableSlots = async (doctorId, date) => {
    if (!doctorId || !date) return;
    try {
      const formattedDate = formatDate(date);
      console.log("Fetching slots for:", { doctorId, formattedDate });

      const response = await fetch('http://66.66.66.23:3005/api/v1/doctor/availability', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ doctor_id: doctorId, date: formattedDate }),
      });
      
      const data = await response.json();
      console.log("API Response:", data);
      
      
        if (response.ok && data.available_slots) {
          const availableSlots = data.available_slots;
      
          // Check if date_id is null or appointment_slots is empty
          if (availableSlots.date_id === null || availableSlots.appointment_slots.length === 0) {
            setAvailableSlots([]);  // Clear available slots
            toast.info("No available slots found for the selected date.", { position: 'top-center', autoClose: 3000 });
          } else {
            setAvailableSlots(availableSlots.appointment_slots);
            setBookedSlots([]); // Clear booked slots
            console.log("Available Slots:", availableSlots.appointment_slots);
          }
        } else {
          setAvailableSlots([]); // Clear available slots
          toast.info("No available slots found for the selected date.", { position: 'top-center', autoClose: 3000 });
        }
      } catch (error) {
        console.error('Error fetching available slots:', error);
        toast.error('Failed to fetch available slots. Please try again.', { position: 'top-center', autoClose: 3000 });
      }      
  };

  // Fetch available slots whenever the selected date changes
  useEffect(() => {
    if (selectedDate) {
      fetchAvailableSlots(doctorId, selectedDate);
    }
  }, [selectedDate, doctorId]);

  const handleSlotSelect = (slot, doctorAvailabilityId) => {
    if (!bookedSlots.includes(slot)) {
      setSelectedSlot(slot);
      setSelectedDoctorAvailabilityId(doctorAvailabilityId);
    } else {
      toast.error('This slot is already booked.', { position: 'top-center', autoClose: 3000 });
    }
  };

  const handleCreateAppointment = async () => {
    if (!selectedSlot || !selectedDoctorAvailabilityId) {
      toast.error('Please select a time slot.', { position: 'top-center', autoClose: 3000 });
      return;
    }

    const appointment = {
      doctor_availability_id: selectedDoctorAvailabilityId,
      patient_id: 1, // Example patient ID, replace with actual logic
      doctor_id: doctorId,
      description,
      notification_type: notificationMethod || 'SMS', // Default to SMS if no method selected
    };

    try {
      const response = await fetch('http://66.66.66.23:3005/api/v1/appointment/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointment),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Appointment Response:", responseData);

        // Update appointments and UI
        const newAppointments = [...appointments, { ...appointment, slot: selectedSlot }];
        setAppointments(newAppointments);
        localStorage.setItem('appointments', JSON.stringify(newAppointments));

        const newBookedSlots = [...bookedSlots, selectedSlot];
        setBookedSlots(newBookedSlots);
        localStorage.setItem('bookedSlots', JSON.stringify(newBookedSlots));

        // Reset form
        setSelectedSlot(null);
        setSelectedDoctorAvailabilityId(null);
        setAvailableSlots([]);
        setDescription('');
        setNotificationMethod('');

        toast.success('Appointment successfully booked!', { position: 'top-center', autoClose: 3000 });
      } else {
        toast.error('Failed to book appointment. Please try again.', { position: 'top-center', autoClose: 3000 });
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      toast.error('An error occurred. Please try again.', { position: 'top-center', autoClose: 3000 });
    }
  };

  return (
    <div className="appointment-scheduler">
      <h3>Set Availability for Dr. {doctorName}</h3>
      <CalendarComponent onDateChange={(date) => setSelectedDate(date)} size="small" />

      {availableSlots.length > 0 && (
        <div className="available-slots">
          <label>Available Slots for {formatDate(selectedDate)}</label>
          <div className="slot-options">
  {availableSlots.map((slotData, index) => (
    <button
      key={index}
      onClick={() => handleSlotSelect(slotData.appointment_time, slotData.doctor_availability_id)}
      className={`${
        selectedSlot === slotData.appointment_time 
          ? 'selected' 
          : bookedSlots.includes(slotData.appointment_time) 
          ? 'booked' 
          : 'available'
      }`}
      disabled={bookedSlots.includes(slotData.appointment_time)}
    >
      {slotData.appointment_time}
    </button>
  ))}
</div>

          {selectedSlot && (
            <p className="slot-selection-message">
              You have selected the slot: {selectedSlot}.
            </p>
          )}
        </div>
      )}

<div className="notification-method">
  <label>Notification</label>
  <div className="radio-group">
    <div>
      <input
        type="radio"
        id="sms"
        name="notification"
        value="SMS"
        onChange={(e) => setNotificationMethod(e.target.value)}
        checked={notificationMethod === 'SMS'}
      />
      <label htmlFor="sms" className="bold-label">SMS</label>
    </div>
    <div>
      <input
        type="radio"
        id="email"
        name="notification"
        value="Email"
        onChange={(e) => setNotificationMethod(e.target.value)}
        checked={notificationMethod === 'Email'}
      />
      <label htmlFor="email" className="bold-label">Email</label>
    </div>
  </div>
</div>



      <label>Description</label>
      <textarea
        rows="4"
        placeholder="Add a description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

<button
        className="create-appointment"
        onClick={handleCreateAppointment}
        disabled={loading} // Disable button when loading
      >
        {loading ? (
          <div className="spinner"></div> // Show spinner while loading
        ) : (
          'Create Appointment'
        )}
      </button>
      <ToastContainer />
    </div>
  );
};

export default AppointmentScheduler;
