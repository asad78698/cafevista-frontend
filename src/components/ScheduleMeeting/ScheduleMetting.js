import React from 'react'
import "./ScheduleMeeting.css";
import { useState } from 'react';
export default function ScheduleMetting() {
    const [fullname, setfullname] = useState('')
    const [email, setemail] = useState('')
    const [phonenumber, setphonenumber] = useState('')
    const [project, setproject] = useState('')
    const [description, setdescription] = useState('')

    const handleContactForm = async (e) => {
        e.preventDefault()

        const res = await fetch('https://cafevista-backend.vercel.app', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fullname, email, phonenumber, project, description
            })
        })
        const json = await res.json()
        if (!json) {
            alert("Form Not Submitted")

        } else {
            alert("Form Submitted Successfully")
            setfullname('')
            setemail('')
            setphonenumber('')
            setproject('')
            setdescription('')
        }
    }
    return (
        <div>
            <form onSubmit={handleContactForm} id="indexForm" method="POST">
                <div class="row g-3">

                    <div class="col-sm-12">
                        <div class="form-floating">
                            <input value={fullname} onChange={(e) => setfullname
                                (e.target.value)} type="text" class="form-control" id="name" name="name" placeholder="Your Name" required/>
                            <label for="name">Full Name</label>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="form-floating">
                            <input value={email}
                                onChange={(e) => setemail(e.target.value)}
                                type="email" class="form-control" id="email" placeholder="Your Email" required />
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="form-floating">
                            <input
                                value={phonenumber}
                                onChange={(e) => setphonenumber(e.target.value)}
                                type="text" class="form-control" id="mobile" placeholder="Your Mobile" required/>
                            <label for="mobile">Phone Number</label>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="form-floating">
                            <input
                                value={project}
                                onChange={(e) => setproject(e.target.value)}
                                type="text" class="form-control" id="subject" placeholder="Subject" required />
                            <label for="subject">Project</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-floating">
                            <textarea
                                value={description}
                                onChange={(e) => setdescription(e.target.value)}
                                class="form-control" placeholder="Leave a message here" id="message" name="message" style={{ height: "100px" }} required></textarea>
                            <label for="message">Project Description</label>
                        </div>
                    </div>
                    <div class="col-3 text-center">
                        <button class="btn  py-3 my-2 submitbtn" type="submit" id="submitlink">Submit Now</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
