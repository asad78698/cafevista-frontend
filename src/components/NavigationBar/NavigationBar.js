import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from "../../../src/assets/CafevistaWhite.png";

export default function NavigationBar() {
  useEffect(() => {
    const handleMouseLeave = (event) => {
      const dropdownMenus = document.querySelectorAll('.dropdown-menu');
      dropdownMenus.forEach(menu => {
        menu.addEventListener('mouseleave', () => {
          menu.style.display = 'none';
        });
      });
    };

    document.addEventListener('DOMContentLoaded', handleMouseLeave);

    return () => {
      document.removeEventListener('DOMContentLoaded', handleMouseLeave);
    };
  }, []);

  return (
    <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
      <div className="top-bar row gx-0 align-items-center d-none d-lg-flex header-class">
        <div className="col-lg-6 px-5 text-start">
          <small><i style={{color:"#04387c"}} className="fa fa-map-marker-alt me-2"></i>1st Floor, Al Harmain Plaza Near Sultana Foundation, Lethrar Road</small>
          <small className="ms-4"><i style={{color:"#04387c"}} className="fa fa-clock me-2"></i>24/7</small>
        </div>
        <div className="col-lg-6 px-5 text-end">
          <small><i style={{color:"#04387c"}} className="fa fa-envelope me-2"></i>cafevistaai@gmail.com</small>
          <small className="ms-4"><i style={{color:"#04387c"}} className="fa fa-phone-alt me-2"></i>+921375948528</small>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn nav-class" data-wow-delay="0.1s">
        <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
          {/* <h1 className="display-5 text-primary m-0 text-white">Arzoo Niaz</h1> */}
          <img className='logo' src={logo} alt='Cafevist@'/>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto me-auto p-4 p-lg-0">
            <Link className="nav-item nav-link text-white" to="/home">Home</Link>
            <Link className="nav-item nav-link text-white" to="/about">About</Link>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Solutions
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle text-dark" href="#">Software Applications</a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item text-dark" to="/service">Desktop Applications</Link></li>
                    <li><Link className="dropdown-item text-dark" to="/service">Mobile Applications</Link></li>
                    <li><Link className="dropdown-item text-dark" to="/service">Web Applications</Link></li>
                  </ul>
                </li>
                {/* Repeat similar structure for other submenus */}
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle text-dark" href="#">Embedded Systems</a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item text-dark" to="/service">Microcontroller Programming</Link></li>
                    <li><Link className="dropdown-item text-dark" to="/service">Embedded Software Development</Link></li>
                    <li><Link className="dropdown-item text-dark" to="/service">IoT Applications</Link></li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
              <a className="dropdown-item dropdown-toggle text-dark" href="#">E-commerce</a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item text-dark" to="/service">Platform Development</Link></li>
                <li><Link className="dropdown-item text-dark" to="/service">Dropshipping Solutions</Link></li>
                <li><Link className="dropdown-item text-dark" to="/service">E-commerce Strategy</Link></li>
                <li><Link className="dropdown-item text-dark" to="/service">Marketing and SEO</Link></li>
              </ul>
            </li>
            <li className="dropdown-submenu">
              <a className="dropdown-item dropdown-toggle text-dark" href="#">Apps & Game Development</a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item text-dark" to="/service">Mobile App Development</Link></li>
                <li><Link className="dropdown-item text-dark" to="/service">Game Development</Link></li>
              </ul>
            </li>
            <li className="dropdown-submenu">
              <a className="dropdown-item dropdown-toggle text-dark" href="#">Game Development</a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item text-dark" to="/service">Game Design & Development</Link></li>
                <li><Link className="dropdown-item text-dark" to="/service">Game Engines</Link></li>
                <li><Link className="dropdown-item text-dark" to="/service">Simulation Solutions</Link></li>
              </ul>
            </li>
            <li className="dropdown-submenu">
              <a className="dropdown-item dropdown-toggle text-dark" href="#">ASO & Digital Marketing</a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item text-dark" to="/service">App Store Optimization (ASO)</Link></li>
                <li><Link className="dropdown-item text-dark" to="/service">Digital Marketing</Link></li>
                <li><Link className="dropdown-item text-dark" to="/service">Artificial Intelligence</Link></li>
                <li><Link className="dropdown-item text-dark" to="/service">Chatbots</Link></li>
                <li><Link className="dropdown-item text-dark" to="/service">Business AI</Link></li>
                <li><Link className="dropdown-item text-dark" to="/service">Generative AI</Link></li>
              </ul>
            </li>
            <li className="dropdown-submenu">
              <a className="dropdown-item dropdown-toggle text-dark" href="#">Website Development</a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item text-dark" to="/service">Front-end Development</Link></li>
                <li><Link className="dropdown-item text-dark" to="/service">Back-end Development</Link></li>
                <li><Link className="dropdown-item text-dark" to="/service">Full-stack Development</Link></li>
              </ul>
            </li>
            <li className="dropdown-submenu">
              <a className="dropdown-item dropdown-toggle text-dark" href="#">Simulators & VR/AR</a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item text-dark" to="/service">Simulation Software</Link></li>
                <li><Link className="dropdown-item text-dark" to="/service">Virtual Reality (VR)</Link></li>
                <li><Link className="dropdown-item text-dark" to="/service">Augmented Reality (AR)</Link></li>
              </ul>
            </li>
            <li className="dropdown-submenu">
              <a className="dropdown-item dropdown-toggle text-dark" href="#">Business Automation</a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item text-dark" to="/service">Workflow Automation</Link></li>
                <li><Link className="dropdown-item text-dark" to="/service">Robotic Process Automation (RPA)</Link></li>
                <li><Link className="dropdown-item text-dark" to="/service">Customer Relationship Management (CRM)</Link></li>
              </ul>
            </li>
            <li className="dropdown-submenu">
              <a className="dropdown-item dropdown-toggle text-dark" href="#">Design</a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item text-dark" to="/service">UI/UX Design</Link></li>
                <li><Link className="dropdown-item text-dark" to="/service">Product Design</Link></li>
                <li><Link className="dropdown-item text-dark" to="/service">Graphic Design</Link></li>
                <li><Link className="dropdown-item text-dark" to="/service">Motion & Animation Design</Link></li>
              </ul>
            </li>
            {/* Add other submenu items similarly */}
              </ul>
            </div>
            <Link className="nav-item nav-link text-white" to="/contactus">Contact Us</Link>
          </div>
          <div className="d-none d-lg-flex ms-2 social-icons">
            <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
              <small style={{color:"#04387c"}} className="fab fa-facebook-f"></small>
            </a>
            <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
              <small style={{color:"#04387c"}} className="fab fa-twitter"></small>
            </a>
            <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
              <small style={{color:"#04387c"}} className="fab fa-linkedin-in"></small>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
