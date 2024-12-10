// CalendarComponent.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './style/CalendarComponent.css';

const CalendarComponent = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);       // Update local state
    if (onDateChange) {
      onDateChange(date);        // Trigger parent component callback
    }
  };

  return (
    <div className="calendar-container">
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}      // Ensure selected date is bound to calendar
        minDate={new Date()}
        selectRange={false}       // Ensure single date selection mode
      />
    </div>
  );
};

export default CalendarComponent;
