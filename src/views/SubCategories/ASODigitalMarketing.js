
import React, { useState } from 'react';
import './DesktopApplications.css';
import keyword from "../../assets/keyword.png";
import store from "../../assets/store.png";
import rate from "../../assets/rate.png";
import seo from "../../assets/seo.png";
import social from "../../assets/sociall.png";
import ads from "../../assets/ads.png";
import content from "../../assets/content.png";
const ASODigitalMarketing = () => {
  // Array containing card data
  const cards = [
    { id: 1, text: 'Keyword Optimization', image: keyword, backgroundColor: '#27557a' },
    { id: 2, text: 'App Store Listing', image: store, backgroundColor: '#2d7a27' },
    { id: 3, text: 'Conversion Rate Optimization', image: rate, backgroundColor: '#277a6e' },
    { id: 4, text: 'Search Engine Optimization', image: seo, backgroundColor: '#277a4f' },
    { id: 5, text: 'Social Media Marketing', image: social, backgroundColor: '#4C277A' },
    { id: 6, text: 'Pay-Per-Click Advertising', image: ads, backgroundColor: '#421300' },
    { id: 7, text: 'Content Marketing', image: content, backgroundColor: '#254200'},
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

export default ASODigitalMarketing;
