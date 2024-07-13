import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./Service.css";
import services from "../../assets/c2.jpeg";
import DesktopApplications from "../SubCategories/DesktopApplications";
import Embeddedsystem from "../SubCategories/EmbedddedSystem";
import Ecommerce from '../SubCategories/Ecommerce';
import AppGameDevelopment from "../SubCategories/AppGameDevelopment";
import GameDevelopment from "../SubCategories/GameDevelopment";
import ASO from "../SubCategories/ASODigitalMarketing";
import AIChatbot from '../SubCategories/AIChatbot';
import WebApplications from '../SubCategories/WebApplications';
import Simulators from '../SubCategories/Simulators';
import BusinessAutomation from '../SubCategories/BusinessAutomation';
import Design from "../SubCategories/Design";

export default function Service() {
  const navigate = useNavigate();
  const location = useLocation();

  // Handle navigation to contact us
  const handleClick = () => {
    navigate("/contactUs");
  }

  // Scroll to the element when the location changes
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        // Scroll into view with smooth behavior
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className='services'>
      <div className='services-background'>
        <div className='left-services-background'>
          <h3> Our Solutions</h3>
          <p>We specialize in developing world-class solutions for Startups, SMEs, and 
            Large Enterprises. Our work speaks for itself!</p>
          <div className="Service-button">
            <button className="button-17" role="button" onClick={handleClick}>
              Book Free Consultation
            </button>
          </div>
        </div>
        <div className='right-services-background'>
          <img src={services} alt="Services"/>
        </div>
      </div>

      {/* Software Applications */}
      <section id='softwareservices'>
      <div className='subservices' >
        <h2>Software Applications</h2>
      </div>
      <DesktopApplications />
      </section>

      {/* Embedded System */}
      <div className='subservices' id='embeddedservices'>
        <h2>Embedded System</h2>
      </div>
      <Embeddedsystem />

      {/* E-commerce */}
      <div className='subservices' id='ecommerceservices'>
        <h2>E-commerce System</h2>
      </div>
      <Ecommerce />

      {/* App Game Development */}
      <div className='subservices' id='appgamedevelopment'>
        <h2>App & Game Development</h2>
      </div>
      <AppGameDevelopment />

      {/* Game Development */}
      <div className='subservices' id='gamedevelopment'>
        <h2>Game Development</h2>
      </div>
      <GameDevelopment />

      {/* ASO & Digital Marketing */}
      <div className='subservices' id='asodigitalmarketing'>
        <h2>ASO & Digital Marketing</h2>
      </div>
      <ASO />

      {/* AI and Chatbots, Machine Learning, Gen AI, Business AI */}
      <div className='subservices' id='aichatbots'>
        <h2>AI and Chatbots, Machine Learning, Gen AI, Business AI</h2>
      </div>
      <AIChatbot />

      {/* Web Applications */}
      <div className='subservices' id='webapplications'>
        <h2>Web Applications</h2>
      </div>
      <WebApplications />

      {/* Simulators & VR/AR */}
      <div className='subservices' id='simulators'>
        <h2>Simulators & VR/AR</h2>
      </div>
      <Simulators />

      {/* Business Automation */}
      <div className='subservices' id='businessautomation'>
        <h2>Business Automation</h2>
      </div>
      <BusinessAutomation />

      {/* Design Category */}
      <div className='subservices' id='designcategory'>
        <h2>Design Category</h2>
      </div>
      <Design />
    </div>
  );
}
