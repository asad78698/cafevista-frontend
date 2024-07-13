import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import logo from "../../../src/assets/Final-2.png";

export default function NavigationBar() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to section if hash is present in the URL
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  useEffect(() => {
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    
    dropdownMenus.forEach(menu => {
      // Show dropdown menu on hover
      menu.parentElement.addEventListener('mouseenter', () => {
        menu.style.display = 'block';
      });
      // Hide dropdown menu on mouse leave
      menu.parentElement.addEventListener('mouseleave', () => {
        menu.style.display = 'none';
      });
    });

    return () => {
      // Clean up event listeners
      dropdownMenus.forEach(menu => {
        menu.parentElement.removeEventListener('mouseenter', () => {});
        menu.parentElement.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.querySelector('.nav-class');
      if (window.scrollY > 5) {
        navBar.classList.add('scrolled');
      } else {
        navBar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
      <div className="top-bar row gx-0 align-items-center d-none d-lg-flex header-class">
        <div className="col-lg-6 px-5 text-start">
          <small className='mininavtext'><i style={{color:"white"}} className="fa fa-map-marker-alt me-2"></i>1st Floor, Al Harmain Plaza Near Sultana Foundation, Lethrar Road</small>
          <small  className="ms-4 mininavtext"><i style={{color:"white"}} className="fa fa-clock me-2"></i>24/7</small>
        </div>
        <div className="col-lg-6 px-5 text-end">
          <small className='mininavtext'><i style={{color:"white"}} className="fa fa-envelope me-2"></i>cafevistaai@gmail.com</small>
          <small className="ms-4 mininavtext"><i style={{color:"white"}} className="fa fa-phone-alt me-2"></i>+921375948528</small>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn nav-class" data-wow-delay="0.1s">
        <Link to="/home" className="navbar-brand ms-4 ms-lg-0">
          <img className='logo' src={logo} alt='Cafevist@'/>
        </Link>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto me-auto p-4 p-lg-0">
            <Link className="nav-item nav-link navtext custom-hover" to="/home">Home</Link>
            <Link className="nav-item nav-link navtext custom-hover" to="/about">About</Link>
            <div className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle navtext custom-hover" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Solutions
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li className="dropdown-submenu">
                  <Link className="dropdown-item text-dark" to="/service#softwareservices">Software Applications</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item text-dark" to="/contactus">Desktop Applications</Link></li>
                    <li><Link className="dropdown-item text-dark" to="/contactus">Mobile Applications</Link></li>
                    <li><Link className="dropdown-item text-dark" to="/contactus">Web Applications</Link></li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <Link className="dropdown-item text-dark" to="/service#embeddedservices">Embedded Systems</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item text-dark" to="/contactus">Microcontroller Programming</Link></li>
                    <li><Link className="dropdown-item text-dark" to="/contactus">Embedded Software Development</Link></li>
                    <li><Link className="dropdown-item text-dark" to="/contactus">IoT Applications</Link></li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <Link className="dropdown-item text-dark" to="/service#ecommerceservices">E-commerce</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item text-dark" to="/contactus">Platform Development</Link></li>
                    <li><Link className="dropdown-item text-dark" to="/contactus">Dropshipping Solutions</Link></li>
                    <li><Link className="dropdown-item text-dark" to="/contactus">E-commerce Strategy</Link></li>
                    <li><Link className="dropdown-item text-dark" to="/contactus">Marketing and SEO</Link></li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <Link className="dropdown-item text-dark" to="/service#appgamedevelopment">Apps & Game Development</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item text-dark" to="/contactus">Mobile App Development</Link></li>
                    <li><Link className="dropdown-item text-dark" to="/contactus">Game Development</Link></li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <Link className="dropdown-item text-dark" to="/service#gamedevelopment">Game Development</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item text-dark" to="/contactus">Game Design & Development</Link></li>
                    <li><Link className="dropdown-item text-dark" to="/contactus">Game Engines</Link></li>
                    <li><Link className="dropdown-item text-dark" to="/contactus">Simulation Solutions</Link></li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <Link className="dropdown-item text-dark" to="/service#asodigitalmarketing">ASO & Digital Marketing</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item text-dark" to="/contactus">App Store Optimization (ASO)</Link></li>
                    <li><Link className="dropdown-item text-dark" to="/contactus">Digital Marketing</Link></li>
                    <li><Link className="dropdown-item text-dark" to="/contactus">Artificial Intelligence</Link></li>
                    <li><Link className="dropdown-item text-dark" to="/contactus">Chatbots</Link></li>
                    <li><Link className="dropdown-item text-dark" to="/contactus">Business AI</Link></li>
                    <li><Link className="dropdown-item text-dark" to="/contactus">Generative AI</Link></li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <Link className="dropdown-item text-dark" to="/service#webapplications">Website Development</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item text-dark" to="/contactus">Front-end Development</Link></li>
                    <li><Link className="dropdown-item text-dark" to="/contactus">Back-end Development</Link></li>
                    <li><Link className="dropdown-item text-dark" to="/contactus">Full-stack Development</Link></li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <Link className="dropdown-item text-dark" to="/service#simulators">Simulators & VR/AR</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item text-dark" to="/contactus">Simulation Software</Link></li>
                    <li><Link className="dropdown-item text-dark" to="/contactus">Virtual Reality (VR)</Link></li>
                    <li><Link className="dropdown-item text-dark" to="/contactus">Augmented Reality (AR)</Link></li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <Link className="dropdown-item text-dark" to="/service#businessautomation">Business Automation</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item text-dark" to="/contactus">Workflow Automation</Link></li>
                    <li><Link className="dropdown-item text-dark" to="/contactus">Robotic Process Automation (RPA)</Link></li>
                    <li><Link className="dropdown-item text-dark" to="/contactus">Customer Relationship Management (CRM)</Link></li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <Link className="dropdown-item text-dark" to="/service#designcategory">Design</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item text-dark" to="/contactus">UI/UX Design</Link></li>
                    <li><Link className="dropdown-item text-dark" to="/contactus">Product Design</Link></li>
                    <li><Link className="dropdown-item text-dark" to="/contactus">Graphic Design</Link></li>
                    <li><Link className="dropdown-item text-dark" to="/contactus">Motion & Animation Design</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <Link className="nav-item nav-link navtext custom-hover" to="/contactus">Contact Us</Link>
          </div>
          <div className="d-none d-lg-flex ms-2 social-icons">
            <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="https://www.facebook.com">
              <small style={{color:"#04387c"}} className="fab fa-facebook-f"></small>
            </a>
            <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="https://www.twitter.com">
              <small style={{color:"#04387c"}} className="fab fa-twitter"></small>
            </a>
            <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="https://www.linkedin.com">
              <small style={{color:"#04387c"}} className="fab fa-linkedin-in"></small>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
