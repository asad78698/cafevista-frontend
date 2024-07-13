import React, { useEffect } from 'react';
import "./Contact.css";
import ContactUsCard from "../../Reusable/ContactUsCard";
import ScheduleMetting from '../../components/ScheduleMeeting/ScheduleMetting';
import contactImage from "../../assets/contact.jpg";
import contact from "../../assets/Contactimage.png";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  // Function to scroll to the schedule meeting section
  const handleClick = () => {
    document.getElementById("scheduleMeetingSection").scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const project = urlParams.get('project');
    if (project) {
      document.getElementById("subject").value = project;
    }
  }, []);

  return (
    <>
      <div className='services-background'>
        <div className='left-services-background '>
          <h3>Trace Our Path</h3>
          <p>Follow our footsteps as we journey from our early days to the present. See how our dedication and vision have guided us along the way.</p>

          <div className="Service-button">
            <button className="button-17" role="button" onClick={handleClick}>Connect with Us</button>
          </div>
        </div>
        <div className='right-services-background'>
          <img src={contactImage} alt="Contact" />
        </div>
      </div>

      {/* Contact Us Cards */}
      <div className='content'>
        <div className="ContactUsFlipCards">
          <h2 className='highlight ContactUsFlipCardsText'>3 Reasons You Should Book A Call Today</h2>
          <div className='contact-container at-container'>
            <ContactUsCard />
          </div>
        </div>
      </div>

      {/* Schedule a Meeting Section with unique ID */}
      <section id='scheduleMeetingSection'>
        <div className='schedule-meeting-container content'>
          <div className='scheduleMeeting-left-column'>
            <h2 className='Schedulemeeting-heading'>Let’s Discuss Your Project</h2>
            <p className='scheduleMeeting-description'>Unleash the power of IT with our team of dedicated experts! <br />
              Our IT experts tailor solutions to your business goals. <br />
              Contact us today!</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={contact} alt="Schedule Meeting" style={{ height: '320px', width: '320px' }} />
            </div>
          </div>
          <div className='scheduleMeeting-right-column'>
            <ScheduleMetting />
          </div>
        </div>
      </section>
    </>
  );
}
