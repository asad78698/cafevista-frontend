import React from 'react'
import "./AboutUsFeatureCard.css";

import AboutUsFeatureArray from "../Data/AboutUSFeatureData";
export default function AboutUsFeatureCard() {
  return (
    <>
    {AboutUsFeatureArray.map((data) => (
        <div className='AboutUs-FeatureCard'>
                <div className='AboutUs-FeatureCard-left'>
                <img src={data.image} style={{width:"100%",height:"100%"}}/>
                </div>
                <div className='AboutUs-FeatureCard-right'>
                    <h3 className='AboutUs-FeatureCardheading'>{data.heading}</h3>
                    <p className='AboutUs-FeatureCard-description'>{data.content}</p>
                </div>
         </div>
      ))}
    </>
    
  )
}
