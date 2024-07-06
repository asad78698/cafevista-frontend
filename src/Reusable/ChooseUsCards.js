import React from 'react'
import './ChooseUsCards.css';
import chooeUsDataArray from '../Data/ChooseUsData';

export default function ChooseUsCards(props) {
  const handleCardClick = () => {
    window.location.href = './about'; 
  };
  return (
    <>
    {chooeUsDataArray.map((data) => (
        <div class="choose-us-card">
        <img className="hero-image" src={data.image}/>
        <p class="ChooseUsHeading">{data.heading}</p>
        <p class="ChooseUsDescription">{data.content}</p>
          <p class="readmore" onClick={() => handleCardClick(data.url)} style={{cursor:"pointer"}}> Read More <i class="fa fa-arrow-right" aria-hidden="true"></i></p>
    </div>
      ))}
    
    </>
  )
}
