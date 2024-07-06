
import React, { useState } from 'react';
import './DesktopApplications.css';
import unity from "../../assets/unity.png";
import unreal from "../../assets/unreal.png";
import vrs from "../../assets/vrrsi.png";
import training from "../../assets/training.png";
import ads from "../../assets/ads.png";
import content from "../../assets/content.png";


const Simulators = () => {
  // Array containing card data
  const cards = [
    { id: 1, text: 'Unreal Engine Simulators', image: unreal, backgroundColor: '#215330' },
    { id: 2, text: 'Unity-bsed Simulations', image: unity, backgroundColor: '#4d1727' },
    { id: 3, text: 'VR Applications Development', image: vrs, backgroundColor: '#0e6867' },
    { id: 4, text: 'VR Training Solutions', image: training, backgroundColor: '#8f0f6f' },
    { id: 5, text: 'AR App Development', image: ads, backgroundColor: '#421300' },
    { id: 6, text: 'AR Marketing Solutions', image: content, backgroundColor: '#254200' },
    
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

export default Simulators;
