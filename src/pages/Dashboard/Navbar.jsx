import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: Import custom CSS for styling
import NavigationArrows from '../../layouts/MainLayout/NavigationArrows';

const Navbar = () => {
  const color = "bg-[#096AB0]";
  return (
    <nav className={`navbar ${color}`}>
      <ul className="navbar-list">
      <li>
          <Link to="/overview">Home</Link>
        </li>
        <li>
          <Link to="/ehr-patient">EMR Search</Link>
        </li>
        <li>
          <Link to="/summary">EMR Summarizer</Link>
        </li>
        <li>
          <Link to="/appointment">Book Appointment</Link>
        </li>
        <li>
          <Link to="/chat-doc">Doctor</Link>
        </li>
        <li>
          <Link to="/chat-patient">Patient</Link>
        </li>
        <li>
          <Link to="/chat-assistant">Support</Link>
        </li>
        <li>
          <Link to="/crud-1">Knowledge Repository</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
