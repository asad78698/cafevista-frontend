import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Footer() {

    const [subscribeMessage, setSubscribeMessage] = useState("");
    const [email, setemail] = useState("");

    const getEmail = async () => {
       try {

        if(email === ""){
            return setSubscribeMessage("Please Enter Email")
        }

        const response = await fetch('http://127.0.0.1:8000/newsletter', {
            method : "POST",
            headers:{
                "Content-Type": "application/json"
                
            },
            body: JSON.stringify({
                email
            })
        })

        const data = await response.json();

        if(response.ok){
            setSubscribeMessage(data.message)
            setemail("")
        }

        else{
            setSubscribeMessage(data.message)
        }

       } catch (error) {
        console.log(error)
        setSubscribeMessage("Internal Server Error")
        
       }
}

    return (


        <div class="container-fluid footer-class text-light footer  pt-3 wow fadeIn " data-wow-delay="0.1s">
            <div class="container py-2 ">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <h4 class="text-white mb-4">Our Office</h4>
                        <p class="mb-2 d-flex flex-start"><i class="fa fa-map-marker-alt me-3"></i>1st Floor, Al Harmain Plaza Near Sultana Foundation, Lethrar Road</p>
                        <p class="mb-2 d-flex flex-start"><i class="fa fa-phone-alt me-3"></i>+921375948528</p>
                        <p class="mb-2 d-flex flex-start"><i class="fa fa-envelope me-3"></i>cafevistaai@gmail.com</p>
                        <div class="d-flex pt-2">
                            <a class="btn btn-square btn-outline-light rounded-circle me-2" href="https://instagram.com/cafevistaai?utm_source=qr&igshid=YzU1NGVlODEzOA%3D%3D"><i
                                class="fab fa-instagram"></i></a>
                            <a class="btn btn-square btn-outline-light rounded-circle me-2" href="https://www.facebook.com/cafevistAi?mibextid=ZbWKwL"><i
                                class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-square btn-outline-light rounded-circle me-2" href="https://www.youtube.com/@CAFEVISTAAI"><i
                                class="fab fa-youtube"></i></a>
                            <a class="btn btn-square btn-outline-light rounded-circle me-2" href="https://www.linkedin.com/company/cafevistaai/?originalSubdomain=pk"><i
                                class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="text-white mb-4">Services</h4>
                        <Link class="btn btn-link" to="./service">Research & Development</Link>
                        <Link class="btn btn-link" to="./service">Embedded Solutions</Link>
                        <Link class="btn btn-link" to="./service">AI Automation</Link>
                        <Link class="btn btn-link" to="./service">Chatbot Development</Link>
                        <Link class="btn btn-link" to="./service">E-commerce Solutions</Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4>Quick Links</h4>
                        <Link className="btn btn-link" to="./about">About Us</Link>
                        <Link className="btn btn-link" to="./contactus">Contact Us</Link>
                        <Link className="btn btn-link" to="./service">Our Services</Link>
                        <Link className="btn btn-link" to="./terms">Terms & Condition</Link>
                        <Link className="btn btn-link" to="./contactus">Support</Link>
                        <Link className="btn btn-link" to="/certificate-verification">Verify Certificate</Link>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="text-white mb-4">Newsletter</h4>
                        <p>Subscribe to receice updates</p>
                        <div class="position-relative w-100">
                            <input value={email} onChange={

                                (e) => {
                                    setemail(e.target.value)
                                }

                            } required class="form-control bg-white border-0 w-100 py-3 ps-4 pe-5" type="text"
                                placeholder="Your email" />
                            <button onClick={getEmail} 
                            type="button"
                                class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2 btn-class">Subscribe</button>
                        </div>
                        <p class="mt-2">{subscribeMessage}</p>
                    </div>
                </div>
                <div class="row mt-3 d-flex align-items-center justify-content-center">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a class="border-bottom" href="#">Cafevist@</a>, All Right Reserved.
                    </div>

                </div>
            </div>
        </div>
    )
}
