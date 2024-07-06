import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { useState } from 'react';
import './Home.css';
import videoUrl from './video.mp4';
import ScheduleMeeting from './ScheduleMeeting.gif';
import ServicesCard from '../../Reusable/ServicesCard';
import ScheduleMetting from '../../components/ScheduleMeeting/ScheduleMetting';
import ChooseUsCards from '../../Reusable/ChooseUsCards';
import ProjectCard from '../../Reusable/ProjectCard';
import Review from '../../Reusable/Review';
import Slider from '../../Reusable/FeaturesCarousel';
import RoadMapCards from '../../Reusable/RoadMapCards';
import ProjectsCards from '../../Reusable/ProjectsCards';
import background from "../../assets/background.png";
export default function Home() {
  const items = [
    { id: 1, title: 'Slide 1' },
    { id: 2, title: 'Slide 2' },
    { id: 3, title: 'Slide 3' },
    { id: 4, title: 'Slide 4' },
    { id: 5, title: 'Slide 5' },
  ];
  const textRef = useRef(null);
  const [currentItem, setCurrentItem] = useState(1); // State to track current item

  const handleItemClick = (itemId) => {
    setCurrentItem(itemId); // Update current item when an image is clicked
  };
  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: [
        'Empower Your Online Venture: AI, E-Commerce, Apps and Beyond!',
        'Innovate, Create, Succeed – Your Ultimate Online Business Hub',
        'Where Opportunities Meet Expertise: Your Growth, Our Mission',
      ],
      typeSpeed: 50,
      startDelay: 1000,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

 

  return (
    <>
    <div className="home-container">
      <video autoPlay loop muted className="background-video">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-container" ref={textRef}></div>
      <a href="#" className="learn-more">
        Learn about Cafevist@
        <i className="fa fa-angle-right" style={{ marginLeft: '5px', verticalAlign: 'text-bottom' }} aria-hidden="true"></i>
      </a>
      
    </div>
    
    
    <div className='content '>
      <section>
        {/*   About US */}
        <div className='about-us-container'>
          <div className='about-us-text'>
            <h4 className='aboutus-section-heading'>About Us</h4>
            <h1 className=" about-us-header">
              We Help Our Clients <span className="highlight">To Grow Their Business</span></h1>
              <p className="about-us-description-text">
                At the forefront of technological innovation, we provide a spectrum of services designed to elevate your business in the digital era. From robust e-commerce platforms and dynamic app development to advanced embedded systems and IoT solutions, we empower your vision with expertise and precision.
              </p>
          </div>
          <div className="about-us-cards">
            <input type="radio" name="slider" id="item-1" checked={currentItem === 1} onChange={() => handleItemClick(1)} />
            <input type="radio" name="slider" id="item-2" checked={currentItem === 2} onChange={() => handleItemClick(2)} />
            <input type="radio" name="slider" id="item-3" checked={currentItem === 3} onChange={() => handleItemClick(3)} />
            <div className="cards">
              <label className="card" htmlFor="item-1" id="song-1">
                <img className="aboutus-Image" src={background} alt="song" />
                <div className="card-text-container">
                  <h2 className="card-heading">Story</h2>
                  <p className="card-description">Imagine a café, not just any café, but one where every visitor is greeted by a team of AI superheroes – our very own AI Avengers. This is the story of CafeVistaAI, a unique fusion of a cozy, personalized space and a high-tech hero hub.
                                  Here, we began our quest to combine the warmth of a café setting with the power of AI, offering a sanctuary where businesses can relax and watch their challenges being tackled by our heroic AI experts.
                                  </p>
                                  
                </div>
              </label>
              <label className="card" htmlFor="item-2" id="song-2">
                <img src={background} alt="song" />
                <div className="card-text-container">
                  <h2 className="card-heading">Mission</h2>
                  <p className="card-description">
                    At CafeVistaAI, our mission is twofold: to offer the comfort and customization of a café and the heroic, transformative solutions of the AI Avengers. We pledge to provide a space where businesses can unwind, confident that their AI needs are being met with superheroic precision and care.
                    From tailored AI recipes to heroic business rescues, we blend the best of both worlds – comfort and innovation, personalization and power.
                  </p>
                </div>
              </label>
              <label className="card" htmlFor="item-3" id="song-3">
                <img src={background} alt="song" />
                <div className="card-text-container">
                  <h2 className="card-heading">Value</h2>
                  <p className="card-description">Envision a future where stepping into the realm of AI is as easy as walking into your favorite café, and where your business needs are met by a team of AI superheroes. At CafeVistaAI, our vision is to create this harmonious blend – a world where AI solutions are both comforting and empowering.
                                We see a future where businesses globally come to our café to relax, and leave with the power of the AI Avengers at their side, ready to tackle any challenge and seize every opportunity.</p>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="border rounded p-4 ">
                <div className="row g-4">
                    <div className="col-lg-4 ">
                        <div className="h-100">
                            <div className="d-flex">
                                <div className='icon'>
                                    <i className="fa fa-times text-white"></i>
                                </div>
                                <div className="ps-3">
                                    <h4>No Hidden Cost</h4>
                                    <span>Enjoy transparent pricing with our AI-powered solutions – no surprises, just value.</span>
                                </div>
                                <div className="border-end d-none d-lg-block"></div>
                            </div>
                            <div className="border-bottom mt-4 d-block d-lg-none"></div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="h-100">
                            <div className="d-flex">
                                <div className='icon'>
                                    <i className="fa fa-users text-white"></i>
                                </div>
                                <div className="ps-3">
                                    <h4>Dedicated Team</h4>
                                    <span>Our team of AI experts works around the clock to bring your tech dreams to life</span>
                                </div>
                                <div className="border-end d-none d-lg-block"></div>
                            </div>
                            <div className="border-bottom mt-4 d-block d-lg-none"></div>
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div className="h-100">
                            <div className="d-flex">
                                <div className='icon'>
                                    <i className="fa fa-phone text-white"></i>
                                </div>
                                <div className="ps-3">
                                    <h4>24/7 Available</h4>
                                    <span>Reliable AI assistance at your fingertips, any time of day or night.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>

      {/* {Services}

      <section id='services' className='mt-5'>
        <div className='services'>
        <h5 className='section-heading' >Our Solutions</h5>
            <h1 className='highlight services-text' style={{display:"flex", justifyContent:"center", fontWeight:"700"}}>Discover Your Path to Online Success</h1>
        </div>
        <div className="services-grid-container">
          <ServicesCard/>
        </div>
      </section> */}
    </div>


    {/* RoadMap */}
    <section id='Roadmap'>
      <div className='Roadmap content'>
      <div className="RoadMap-grid-container">
      <RoadMapCards/>
        </div>
      </div>
    </section>
    {/* Accomplishments */}
    <section id='accomplishments'>
    <div class="container-fluid facts my-5">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-sm-6 col-lg-3 text-center ">
                    <i class="fa fa-users fa-3x text-white mb-3"></i>
                    <h1 class="display-4 text-white" data-toggle="counter-up">79</h1>
                    <span class="fs-5 text-white">Happy Clients</span>
                    <hr class="bg-white w-25 mx-auto mb-0"/>
                </div>
                <div class="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s" style={{visibility: "visible", animationDelay:  "0.3s", animationName: "fadeIn"}}>
                    <i class="fa fa-check fa-3x text-white mb-3"></i>
                    <h1 class="display-4 text-white" data-toggle="counter-up">120</h1>
                    <span class="fs-5 text-white">Projects Completed</span>
                    <hr class="bg-white w-25 mx-auto mb-0"/>
                </div>
                <div class="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s" style={{visibility: "visible", animationDelay:  "0.3s", animationName: "fadeIn"}}>
                    <i class="fa fa-users-cog fa-3x text-white mb-3"></i>
                    <h1 class="display-4 text-white" data-toggle="counter-up">14</h1>
                    <span class="fs-5 text-white">Dedicated Staff</span>
                    <hr class="bg-white w-25 mx-auto mb-0"/>
                </div>
                <div class="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s" style={{visibility: "visible", animationDelay:  "0.3s", animationName: "fadeIn"}}>
                    <i class="fa fa-award fa-3x text-white mb-3"></i>
                    <h1 class="display-4 text-white" data-toggle="counter-up">3</h1>
                    <span class="fs-5 text-white">Awards Achieved</span>
                    <hr class="bg-white w-25 mx-auto mb-0"/>
                </div>
            </div>
        </div>
    </div>
    </section>

    {/* Choose Us */}
    <section id='choose-us'>
    <div class=" content choose-us">
        <div className='choose-us-text'>
                    <h1 class="choose-us-header">Few Reasons Why <span class="highlight">People Choosing Us!</span></h1>
                    <p class="mb-4">We see a future where businesses globally come to our Café of <b>AI</b> and <b>INNOVATION</b> to relax, and leave with the power of the AI Avengers at their side, ready to tackle any challenge and seize every opportunity
                    </p>
        </div>
        <div className='choose-us-cards'>
        <ChooseUsCards />
        </div>
        {/* <div className='choose-us-button'>
        <button class="btn  py-3 my-2 Choose-us-submitbtm" type="submit" id="submitlink">Explore More</button>
        </div> */}
                    
     </div>
    </section>
    

    {/* Features */}
    <section id='Features'>
      <div >
      <div class="text-center mx-auto " style={{maxWidth: "600px", marginTop:"2%"}}>
                <p class="section-heading">Our Solutions</p>
                <h1 class="display-5 mb-2 feature-heading">From <span class="highlight">Scratch</span> to <span class="highlight">Success</span> We got You</h1>
            </div>
      <Slider/>
      </div>
    </section>





    {/* Projects */}
    <section id='Projects'>
      <div className='content Projects'>
      <div class="text-center mx-auto " >
                <p class="section-heading">Our Projects</p>
                <h1 class="display-5 mb-2 highlight Project-heading ">We Have Completed Latest Projects</h1>
            </div>
            <ProjectsCards/>
      </div>
    </section>
    
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

    {/* <ProjectsCards/> */}

    {/* Reviews */}
    <section id='review'>
      <div className='review-container'>
      
      <Review/>
      </div>
    </section>
    
    
    </>
  );
}