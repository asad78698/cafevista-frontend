import React from 'react'
import { useRef, useState, useEffect } from 'react';
import Typed from 'typed.js';
import ServicesCard from '../../Reusable/ServicesCard';
import ChooseUsCards from '../../Reusable/ChooseUsCards';
import AboutUsFeatureCard from '../../Reusable/AboutUsFeatureCard';
import StrategyCard from "../../Reusable/StrategyCard";
import { useNavigate } from "react-router-dom";
import services from "../../assets/blog3.png";

import { Link } from 'react-router-dom';
import "./About.css";
import background from "../../assets/background.png";

export default function About() {
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

  const ContactUsFunction=()=>{
    
  }
  const navigate = useNavigate();

  const handleClick=()=>{
    navigate("/contactUs");
  }

 
  return (
    <>
    <div className=''>
    <div className='services-background'>
        <div className='left-services-background '>
          <h3> Discover Our Journey</h3>
          <p>Explore how our passion and vision have shaped the path we’ve taken from humble beginnings to where we stand today.</p>
           <div className="Service-button">
           <button class="button-17" role="button" onClick={handleClick}> Connect with Us </button>
            </div> 

        </div>
        <div className='right-services-background'>
          <img src={services}/>
          </div>
      </div>
      
      </div>
      
      

      <section className='content'>
        {/*   About US */}
        <div className='About-us-container '>
          <div className='About-us-text'>
            <h4 className='Aboutus-section-heading'>About Us</h4>
            <h1 className=" About-us-header">
              We Help Our Clients <span className="highlight">To Grow Their Business</span></h1>
              <p className="About-us-description-text">
                At the forefront of technological innovation, we provide a spectrum of services designed to elevate your business in the digital era. From robust e-commerce platforms and dynamic app development to advanced embedded systems and IoT solutions, we empower your vision with expertise and precision.
              </p>
          </div>
          <div className="About-us-cards">
            <input type="radio" name="slider" id="item-1" checked={currentItem === 1} onChange={() => handleItemClick(1)} />
            <input type="radio" name="slider" id="item-2" checked={currentItem === 2} onChange={() => handleItemClick(2)} />
            <input type="radio" name="slider" id="item-3" checked={currentItem === 3} onChange={() => handleItemClick(3)} />
            <div className="cards">
              <label className="card" htmlFor="item-1" id="song-1">
                <img src={background} alt="song" />
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
      {/* Video */}
      <div className='video'>
      <div class="container-fluid ">
    <div class="container py-3">
        <div class="row g-5 justify-content-center">
            <h1 className='Highlight text-center'>GIVING THE BEST SOLUTIONS</h1>
            
            <div class="Youtube-video">
                <iframe width="100%" height="550" src="https://www.youtube.com/embed/xHtvBTrGGjw?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0" title="Introduction To CafeVista AI | The power of AI | How AI used to solve the real world problems" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
            </div>
        
        </div>
    </div>
</div>
      </div>
       {/* {Services}
       <div className='content'>
       <section id='services' className='mt-5'>
        <div className='Services'>
        <h5 className='Section-heading' >Our Solutions</h5>
            <h1 className='Highlight Services-text' style={{display:"flex", justifyContent:"center", fontWeight:"700"}}>Discover Your Path to Online Success</h1>
        </div>
        <div className="Services-grid-container">
          <ServicesCard/>
        </div>
      </section>
      </div> */}
      {/* Strategy */}
      <section id='Strategy'>
      <div className=' content'>
        <div className='Strategy'>
        <h1 class="Highlight mb-2 d-flex justify-content-center" >OUR STRATEGY</h1>
        <p className='strategy-content mb-3 '>We develop exceptional products by starting from scratch,
         fueled by thorough market research to understand genuine customer needs. Our process 
         encompasses meticulous design, prototyping, testing, and refinement, ensuring high-quality,
          user-centric solutions that consistently exceed expectations.
</p>
</div>
        <div className="Strategy-grid-container mt-2">
           <StrategyCard/>
           </div>
           </div>
        </section>
      
    {/* Accomplishments */}
    <div >
    <section id='accomplishments'>
    <div class="container-fluid Facts my-5 ">
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
    </div>
    {/* Choose Us */}
    <section id='choose-us'>
    <div class=" content Choose-us">
        <div className='Choose-us-text'>
                    <h1 class="Choose-us-header">Few Reasons Why <span class="Highlight">People Choosing Us!</span></h1>
                    <p class="mb-4">We see a future where businesses globally come to our Café of <b>AI</b> and <b>INNOVATION</b> to relax, and leave with the power of the AI Avengers at their side, ready to tackle any challenge and seize every opportunity
                    </p>
        </div>
        <div className='Choose-us-cards'>
        <ChooseUsCards />
        </div>
        <div className='Choose-us-button'>
        <button class="btn  py-3 my-2 choose-us-submitbtm" type="submit" id="submitlink">Explore More</button>
        </div>
                    
     </div>
    </section>
    
      {/* About us Features */}
      
        <section id='About-us-features'>
        <div className='About-us-features  content'>
          <div className='AboutUsContent'>
          <h1 class=" text-center about-us-feature-heading Highlight">Unveiling the Reasons Behind Our Growing Clientele</h1>
          </div>
          <div className='About-us-feature-container  mt-4 mb-3'>
      <AboutUsFeatureCard/>
      </div>
      
       </div>
       
      </section>
      <div className='Note_container'>
      <div className='Note content mt-0'>
        
      <p className='text-center'>Join the ranks of businesses that have already chosen CaféVist@AI as their ally in the realm
                            of AI and innovation. Experience the transformative power of AI Avengers and let us guide
                            you towards a future brimming with possibilities.</p>
                            
       <span className='text-center'>For a more in-depth understanding of how our AI solutions can benefit your business, 
       <Link to="/contactus" className="btn btn-link  ms-3">
                        Contact Us</Link>
                    .</span>
       </div>
       </div>
    </>
  )
}
