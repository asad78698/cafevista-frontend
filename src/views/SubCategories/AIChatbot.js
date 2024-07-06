
import React, { useState } from 'react';
import './DesktopApplications.css';
import ml from "../../assets/ml.png";
import deep from "../../assets/deep.png";
import ao from "../../assets/ai.png";
import customer from "../../assets/Customer.png";
import sales from "../../assets/sales.png";
import nlp from "../../assets/nlp.png";
import prediction from "../../assets/prediction.png";
import bsns from "../../assets/aibusiness.png";
import process from "../../assets/process.png";
import aicontent from "../../assets/aicontent.png";
import aiapp from "../../assets/aiapp.png";
import network from "../../assets/netowrk.png";
const AIChatbot = () => {
  // Array containing card data
  const cards = [
    { id: 1, text: 'Machine Learnin Solutions', image: ml, backgroundColor: '#819171' },
    { id: 2, text: 'Deep Learning Models', image: deep, backgroundColor: '#045F29' },
    { id: 3, text: 'AI-Based Analytics', image: ao, backgroundColor: '#344E41' },
    { id: 4, text: 'Customer Support Chatbots', image: customer, backgroundColor: '#0F5132' },
    { id: 5, text: 'Sales and Marketing Chatbots', image: sales, backgroundColor: '#2D2271' },
    { id: 6, text: 'NLP-based Chatbots', image: nlp, backgroundColor: '#5D0D5F' },
    { id: 7, text: 'Predictive Analytics', image: prediction, backgroundColor: '#7D4713'},
    { id: 8, text: 'AI-driven Business Intelligence', image: bsns, backgroundColor: '#277a6a'},
    { id: 9, text: 'Process Automation', image: process, backgroundColor: '#27607a'},
    { id: 10, text: 'AI-generated Content', image: aicontent, backgroundColor: '#1A357D'},
    { id: 11, text: 'Creative AI Applications', image: aiapp, backgroundColor: '#68277a'},
    { id: 12, text: 'Generative Adversarial Networks (GANs)', image: network, backgroundColor: '#7a2761'},
    // Add more cards as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = cards.length;
  const cardsToShow = 6;

  // Functions to navigate through the carousel
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const getVisibleCards = () => {
    const endIndex = currentIndex + cardsToShow;
    if (endIndex <= totalSlides) {
      return cards.slice(currentIndex, endIndex);
    } else {
      return [...cards.slice(currentIndex, totalSlides), ...cards.slice(0, endIndex - totalSlides)];
    }
  };

  return (
    <div className="carousel-container">
      <button className="carousel-arrow left-arrow" onClick={prevSlide}>&#8249;</button>
      <div className="carousel-content">
        {getVisibleCards().map((card) => (
          <div key={card.id} className="carousel-card" style={{ backgroundColor: card.backgroundColor }}>
            <img src={card.image} alt={card.text} />
            <p>{card.text}</p>
          </div>
        ))}
      </div>
      <button className="carousel-arrow right-arrow" onClick={nextSlide}>&#8250;</button>
      <div className="carousel-pagination">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            className={`pagination-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default AIChatbot;
