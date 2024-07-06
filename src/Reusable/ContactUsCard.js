import React from 'react'
import "./ContactUsCard.css";
import ContactUsData from '../Data/ContactUsData';

export default function ContactUsCard() {
  return (
    <>
    {ContactUsData.map((data) => (
         <div className="ContactUsCard at-item ">
               <div className='first-part'>
                 <h1>{data.number}</h1>
               </div>
               <div className='second-part'>
                <p>
                  {data.content}
                </p>
                </div>
             </div>
      ))}
    
    </>

  )
}
