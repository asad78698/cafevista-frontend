import React, { useState } from 'react';
import './RegisterUser.css';
import { Link } from 'react-router-dom';

const RegisterUser = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleRegister = () => {
        // Handle registration logic here
        // You can access the form values using the state variables (fullName, email, phone, password, role)
    };

    return (
        <div id='main'>

            <div id='mainPic'>
                <img
                    src="https://img.freepik.com/free-vector/typing-concept-illustration_114360-363.jpg?t=st=1720375033~exp=1720378633~hmac=5133602f798518d0b3ea1367ca2455a279704e337979746c6795134a0d605416&w=740"
                    class="img-fluid rounded-top "
                    alt=" imageUser "
                />
                
            </div>

            <form className='registrationForm' onSubmit={handleRegister}>
                <h2 className='registration'>Register As <span > User</span></h2>

                <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder='Full Name'
                />

                <br />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                />

                <br />


                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder='Phone'
                />

                <br />


                <input
                    id='password'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                />

                <br />


                <input
                    type="text"
                    value={"User"}
                    placeholder='Role'
                />

                <br />
                <button className='registerbutton' type="submit">Register</button>
                <hr />
                
                <div style={{textAlign: 'center'}}>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <p>Signup as a <Link to="/registercompany">Company</Link></p>
                </div>
                 
            </form>

            
        </div>
    );
};

export default RegisterUser;