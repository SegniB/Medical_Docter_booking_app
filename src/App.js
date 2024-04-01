import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './Components/Landing_Page/Landing_Page.js';
import Login from './Components/Login/Login.js'
import SignUp from './Components/Sign_Up/Sign_Up.js'
//import Notification from './Components/Notification/Notification.js'
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation.js'

import Navbar from './Components/Navbar/Navbar';
function App() {

  return (
    <>
        <BrowserRouter>
        
              <Navbar/>
              <Routes>
              <Route path="/" element={<LandingPage />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/signup" element={<SignUp />}/>
             
              <Route path="/instant-consultation" element={<InstantConsultation />} />
              </Routes>
        
        </BrowserRouter>
       
    </>
  );
}

export default App;