import React from 'react';
import "./Contact.css";
import ContactUsCard from "../../Reusable/ContactUsCard";
import ScheduleMetting from '../../components/ScheduleMeeting/ScheduleMetting';
import ScheduleMeeting from '../Home/ScheduleMeeting.gif';

export default function Contact() {
  return (
    <>
    {/* Contact Us Cards */}
    <div className='content'>
      <div classroom="ContactUsFlipCards">
      <h2 className='highlight ContactUsFlipCardsText'>3 Reasons You Should Book A Call Today</h2>
      <div className='contact-container at-container'>
        <ContactUsCard/>
      </div>
      </div>
    </div>
    
    {/* Schedule a Metting */}
    <section id='scheduleMeeting'>
      <div className='schedule-meeting-container content'>
        <div className='scheduleMeeting-left-column'>
          <h2 className='Schedulemeeting-heading'> Let’s Discuss Your Project
          </h2>
          <p className='scheduleMeeting-description'>Unleash the power of IT with our team of dedicated experts! <br/>
          Our IT experts tailor solutions to your business goals. 
          <br/>Contact us today!
          </p>
          <div style={{display:"flex", justifyContent:"center"}}>
              <img src={ScheduleMeeting} style={{height:'320px', width:'320px'}}/>
          </div>    
        </div>
        <div className='scheduleMeeting-right-column'>
        
        <ScheduleMetting/>
        </div>
      </div>
    </section>
    </>
  )
}
