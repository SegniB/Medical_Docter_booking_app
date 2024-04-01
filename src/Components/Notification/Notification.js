import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css';

const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [showNotification, setShowNotification] = useState(true); // State variable to toggle notification visibility

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }
  }, []);

  // Event handler for canceling appointment
  const handleCancelAppointment = () => {
    // Logic to cancel appointment
    // Assuming some function to cancel appointment and update localStorage
    localStorage.removeItem(doctorData.name); // Remove appointment data
    setShowNotification(false); // Hide notification after cancellation
  };

  return (
    <div>
      <Navbar />
      {children}
      {isLoggedIn && appointmentData && showNotification && ( // Check if notification should be displayed
        <>
          <div className="notification-container">
            <div className="notification-content">
              <h3 className="notification-title">Appointment Details</h3>
              <p className="notification-message">
                <strong>Doctor:</strong> {doctorData?.name}
              </p>
              <p className="notification-message">
                <strong>Patient:</strong> {username}
              </p>
              {/* Additional notification details like appointment time and date can be added here */}
              <button onClick={handleCancelAppointment}>Cancel Appointment</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Notification;
