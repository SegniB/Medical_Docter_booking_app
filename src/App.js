import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing_Page from './Components/Landing_Page/Landing_Page.js';
import Login from './Components/Login/Login.js'
import Sign_up from './Components/Sign_Up/Sign_Up.js'

import Navbar from './Components/Navbar/Navbar';
function App() {

  return (
    <>
        <BrowserRouter>
          <Navbar/>
              <Routes>
              <Route path="/" element={<Landing_Page />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/sign_up" element={<Sign_up />}/>
              </Routes>
            
        </BrowserRouter>
       
    </>
  );
}

export default App;