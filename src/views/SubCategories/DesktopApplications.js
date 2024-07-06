import React, { useState } from 'react';
import './DesktopApplications.css';
import portal from "../../assets/portal.png";
import cross from "../../assets/crossplatform.png";
import web from "../../assets/webappp.png";
import app from "../../assets/application.png";
import mobile from "../../assets/Mobile.png";
import ecommerce from "../../assets/ecommerce.png";
import animation from "../../assets/Animation.png";
const DesktopApplications = () => {
  // Array containing card data
  const cards = [
    { id: 1, text: 'Desktop Applications', image: web, backgroundColor: '#00732e' },
    { id: 2, text: 'Mobile Applications', image: mobile, backgroundColor: '#240750' },
    { id: 3, text: 'Web Applications', image: app, backgroundColor: '#003912' },
    { id: 4, text: 'Cross Platform Applications', image: cross, backgroundColor: '#4d1727' },
    { id: 5, text: 'Web Portals', image: portal, backgroundColor: '#215330' },
    { id: 6, text: 'Web-based Automation', image: animation, backgroundColor: '#421300' },
    { id: 7, text: 'E-commerce', image: ecommerce, backgroundColor: '#12372A'},
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

export default DesktopApplications;
