import React from 'react'
import "./StrategyCard.css";
import StrategyCardDataArray from "../Data/StrategyCardData";
export default function 

() {
  return (
    <>
    {StrategyCardDataArray.map((data) => (
        <div className='strategy-card'>
        
        <div className='strategy-Pic-box'>
           <img  src={data.image} alt="Gifs"style={{height:"100%", width:"100%"}}/>
        </div>
        
        <div className='Strategy-Text-box'>
            <h3>{data.heading}</h3>
            <p>
               {data.content}
            </p>
        </div>
    </div>
      
        //  <div class="Strategy-card">
        //  <p class="Strategy-card-heading">
        //      {data.heading}
        //  </p>
        //  <p>
        //     {data.content}
        //  </p>
         
        //  </div>
      ))}
       
    </>
  )
}
