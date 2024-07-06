import React, { useState } from 'react';
import './DesktopApplications.css';
import andriod from "../../assets/andriod.png";
import ios from "../../assets/ios.png";
import hybrif from "../../assets/hybrid.png";
import unity from "../../assets/unity.png";
import unreal from "../../assets/unreal.png";
import game from "../../assets/Gameeee.png";
const cards = [
  { id: 1, text: 'iOS App Development', image: ios, backgroundColor: '#00732e' },
  { id: 2, text: 'Andriod App Development', image: andriod, backgroundColor: '#863B1B' },
  { id: 3, text: 'Hybrid App Development', image: hybrif, backgroundColor: '#003912' },
  { id: 4, text: 'Unity 3D Development', image: unity, backgroundColor: '#4d1727' },
  { id: 5, text: 'Unreal Engine Game', image: unreal, backgroundColor: '#215330' }, // Corrected image
  { id: 6, text: 'Mobile Game Development', image: game, backgroundColor: '#421300' },
];

const AppGameDevelopment = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = cards.length;
  const cardsToShow = 6;

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

export default AppGameDevelopment;
