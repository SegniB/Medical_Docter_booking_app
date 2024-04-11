import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './Components/Landing_Page/Landing_Page.js';
import Login from './Components/Login/Login.js'
import SignUp from './Components/Sign_Up/Sign_Up.js'
import ReviewForm from './Components/ReviewForm/ReviewForm.js'
import Notification from './Components/Notification/Notification.js'
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation.js'

import Navbar from './Components/Navbar/Navbar';
function App() {

  return (
    <>
        <BrowserRouter>
           <Notification>
              <Navbar/>
              <Routes>
              <Route path="/" element={<LandingPage />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/signup" element={<SignUp />}/>
              <Route path="/notification" element={<Notification />}/>
              <Route path="/review" element={<ReviewForm />}/>
             
              <Route path="/instant-consultation" element={<InstantConsultation />} />
              </Routes>
            </Notification>
        </BrowserRouter>
       
    </>
  );
}

export default App;