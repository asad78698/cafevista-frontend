import React from 'react'
import "./RoadMapCards.css";
import bullet from "../assets/Bullet.png";
import RoadMapDataArray from "../Data/RoadMapData"
export default function RoadMapCards() {
  const clickFunction = () => {
    window.location.href = '/contactus';
  }
  return (
    <>
    {RoadMapDataArray.map((data) => (
        <div className='roadmap-card'>
        <div className='Number-box'>
            <h2>{data.number}</h2>
        </div>
        <div className='Pic-box'>
           <img  src={data.image} alt="Gifs"style={{height:"100%", width:"100%"}}/>
        </div>
        
        <div className='Text-box'>
            <h3>{data.heading}</h3>
            <p className='text-conent' onClick={clickFunction}>{data.bullet1}</p>
           

        </div>
    </div>
      ))}
    
    
    </>
  )
}
