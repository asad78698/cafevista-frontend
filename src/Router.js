import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../src/views/Home/Home";
import About from "../src/views/About/About";
import Service from './views/Services/Service';
import Contact from './views/Contact/Contact';
import Terms from "./views/TermsConditions/TermsCondition";
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import RegisterUser from './views/Registration/RegisterUser';
import RegisterCompany from './views/Registration/RegisterCompany';
export default function Router() {
  return (
    <div>
        <NavigationBar/>
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/terms" element={<Terms/>}/>
            <Route path='/registeruser' element={<RegisterUser/>}/>
            <Route path='/registercompany' element={<RegisterCompany/>}/>
        </Routes>
        <Footer/>
   </div>
  )
}
