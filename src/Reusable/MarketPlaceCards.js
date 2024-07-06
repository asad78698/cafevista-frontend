import React from 'react';
import './MarketPlaceCards.css';
import bullet from '../assets/Bullet.png';

const MarketPlaceCardArray = [
  {
    id: '0',
    heading: 'Enhancing Business with Advanced App Development Services',
    sectionId: 'Search-Optimization'
  },
  {
    id: '1',
    heading: 'Innovative Embedded System Solutions',
    sectionId: 'Embedded-System'
  },
  {
    id: '2',
    heading: 'Transforming Processes with AI Automation',
    sectionId: 'Ai-Integration'
  },
  {
    id: '3',
    heading: 'Revolutionizing Learning with AI-Driven Education',
    sectionId: 'Ai-Learning'
  },
  {
    id: '4',
    heading: 'Innovating Communication with Advanced Chatbot Development',
    sectionId: 'MarketCards'
  },
  {
    id: '5',
    heading: 'Advancing Innovation with Research & Development',
    sectionId: 'MarketCards'
  },
  {
    id: '6',
    heading: 'Elevating Retail with Comprehensive E-Commerce Solutions',
    sectionId: 'Ecomerce'
  },
  {
    id: '7',
    heading: 'Lets Learn Together: Fostering Engagement, Knowledge, and Collaboration',
    sectionId: 'MarketCards'
  },
  
];

export default function MarketPlaceCards() {
  const handleClick = (sectioId) => {
    document.getElementById(sectioId).scrollIntoView(); // Navigate to the specified URL
  };

  return (
    <div id="MarketCards"className="MarketPlaceCardGridContainer carousel-container">
      {MarketPlaceCardArray.map((data) => (
        
        <div className="MarketCardcontainer" key={data.id}>
          <div className ="Market-card"  onClick={() => handleClick(data.sectionId)}>
            <div className="Marketface Marketface1">
              <div className="Market-content" onClick={() => handleClick(data.sectionId)}>
                <h3>{data.heading}</h3>
              </div>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  );
}