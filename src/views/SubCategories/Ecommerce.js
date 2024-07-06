import React, { useState } from 'react';
import './DesktopApplications.css';
import platform from "../../assets/platform.png";
import dropship from "../../assets/dropshipping.png";
import strategy from "../../assets/strategy.png";
// import cross from "../../assets/crossplat.png";
import market from "../../assets/market.png";
import cross from "../../assets/crossplatform.png";

import auto from "../../assets/auto.png";
import ecommerce from "../../assets/ecommerce.png";

import shopify from "../../assets/shopify.png";
const Ecommerce = () => {
  // Array containing card data
  const cards = [
    { id: 1, text: 'Platform Development', image: platform, backgroundColor: '#538f0f' },
    { id: 2, text: 'Dropshipping Solutions', image: dropship, backgroundColor: '#8f7e0f' },
    { id: 3, text: 'E-commerce Strategy', image: ecommerce, backgroundColor: '#12372A' },
    { id: 4, text: 'Cross Platform Applications', image: cross, backgroundColor: '#4d1727' },
    { id: 5, text: 'Marketing & SEO', image: market, backgroundColor: '#215330' },
    { id: 6, text: 'Web-based Automation', image: auto, backgroundColor: '#421300' },
    { id: 7, text: 'Shopify Development', image: shopify, backgroundColor: '#4D0C3C'},
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

export default Ecommerce;
