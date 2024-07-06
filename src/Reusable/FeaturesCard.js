import React from 'react'
import "./FeaturesCard.css";
import FeaturesDataArray from '../Data/FeaturesData';
export default function Features(props) {
  const handleCardClick = (url) => {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "http://" + url;
    }
    window.open(url, '_blank');
  };
  return (
    <>
    
         <div>
          
         {FeaturesDataArray.map((data) => (
          <div class="features-container">
           
          <div class="wrapper">
            
            <h1> {data.heading}</h1>
            <p className='features-content'>{data.content}.</p>
           </div>
           <div class="button-wrapper"> 
           
           <p class="feature-readmore" onClick={() => handleCardClick(data.url)} style={{cursor:"pointer"}}> Read More <i class="fa fa-arrow-right" aria-hidden="true"></i></p>
           </div>
             </div>
        ))}
       </div>
    </>
 ) }
    
