import React from 'react';
// import ServiceDomainCards from "../../Reusable/ServiceDomainCards";
import "./Service.css";
// import MarketPlaceCards from '../../Reusable/MarketPlaceCards';
// import AiIntegration from '../SubCategories/AiIntegration/AiIntegration';
// import EmbeddedSystem from '../SubCategories/EmbeddedSystem/EmbeddedSystem';
// import AiLearning from '../SubCategories/AiLearning/AiLearning';
// // import Ecommerce from '../SubCategories/Ecommerce/Ecommerce';
// import SearchOptimization from "../SubCategories/SearchOptimization/SearchOptimization";
import { useNavigate } from "react-router-dom";
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

  const handleClick=()=>{
    navigate("/contactUs");
  }
  return (
    <div className='services'>
      <div className='services-background'>
        <div className='left-services-background '>
          <h3> Our Solutions</h3>
          <p>We specialize in developing world-class solutions for Startups, SMEs, and 
            Large Enterprises, Our work speaks for itself!</p>
           <div className="Service-button">
           <button class="button-17" role="button" onClick={handleClick}> Book Free Consulation </button>
            </div> 

        </div>
        <div className='right-services-background'>
          <img src={services}/>
          </div>
      </div>

      {/* Software Applications */}
      <div className='subservices'>
        <h2> Software Applications</h2>
      </div>
      <DesktopApplications/>

      {/* Embedded System */}
      <div className='subservices'>
        <h2>Embedded System</h2>
      </div>
      <Embeddedsystem/>

      {/* E-commerce */}
      <div className='subservices'>
        <h2>E-commerce System</h2>
      </div>
      <Ecommerce/>


      {/* App Game Development */}
      <div className='subservices'>
        <h2>App & Game Development</h2>
      </div>
      <AppGameDevelopment/>

      {/* Game Development */}
      <div className='subservices'>
        <h2>Game Development</h2>
      </div>
      <GameDevelopment/>

      {/* ASO & Digital Marketing */}
      <div className='subservices'>
        <h2>ASO & Digital Marketing</h2>
      </div>
      <ASO/>

      {/* AI and Chatbots, Machine Learning, Gen AI, Business AI*/}
      <div className='subservices'>
        <h2>AI and Chatbots, Machine Learning, Gen AI, Business AI</h2>
      </div>
      <AIChatbot/>

      {/* Web Applications*/}
      <div className='subservices'>
        <h2>Web Applications</h2>
      </div>
      <WebApplications/>

      {/* Simulators & VR/AR*/}
      <div className='subservices'>
        <h2>Simulators & VR/AR</h2>
      </div>
      <Simulators/>

      {/* Business Automation*/}
      <div className='subservices'>
        <h2> Business Automation</h2>
      </div>
      <BusinessAutomation/>

      {/* Design Category*/}
      <div className='subservices'>
        <h2>Design Category</h2>
      </div>
      <Design/>

    {/* Market Place Cards */}
    {/* <section id='MarketPlaceCards'>
      <div className='main-body-content  '>
      <h1 class="Market-cards-heading ">All In One Solution By Pakistan's First Online Business Market Place</h1>
      <div>
      <MarketPlaceCards/>
      </div>
      </div>
    </section>
     */}

    
    {/* AI Integration
    <section id='Ai-Integration'>
      <div className='content'>
      <h1 class="Market-cards-heading">Streamlined Sub-Services for Effortless AI Integration: A Comprehensive Approach </h1>
      </div>
      <div className='mt-5'>
      <AiIntegration/>
      </div>
    </section> */}
    
    {/* Ai Learning */}
    {/* <section id='Ai-Learning'>
    <div className='content'>
      <h1 class="Market-cards-heading">Exploring the Depths: Subservices Unveiled in AI Learning</h1>
      </div>
      <div className='mt-5'>
      <AiLearning/>
      </div>
      </section> */}
   

    {/* Embedded System */}
    {/* <section id='Embedded-System'>
      <div className='content'>
      <h1 class="Market-cards-heading mb-5">Sub-Services in R&D and Embedded Systems: Driving Innovation and Efficiency</h1>
      </div>
      <EmbeddedSystem/>
    </section> */}

    {/* <section id='Ecomerce'>
    <div className='content'>
      <h1 class="Market-cards-heading">Comprehensive Ecommerce Solutions: Elevate Your Online Business</h1>
      </div>
      <div className='mt-5'>
      <Ecommerce/>
      </div>
      </section> */}

      {/* <section id='Search-Optimzation'>
    <div className='content'>
      <h1 class="Market-cards-heading">Optimize Your App Store Presence: Detailed ASO Subservices</h1>
      </div>
      <div className='mt-5'>
      <SearchOptimization/>
      </div>
      </section> */}

    {/* Domain cards */}
    {/* <section id='DomainCards'>
      <div className='content'>
      <h1 class="Market-cards-heading ">Exploring AI Frontiers: <br/>Diverse Domains, Ethical Considerations, and NLP Advancements</h1>
      <div className='DoaminCardGridContainer'>
      <ServiceDomainCards/>
      </div>
      </div> */}
    {/* </section> */}
      
    </div>
  )
}
