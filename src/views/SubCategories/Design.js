import React, { useState } from 'react';
import './DesktopApplications.css';
import ui from "../../assets/uiux.png";
import product from "../../assets/product.png";
import graphic from "../../assets/graphic.png";
import motion from "../../assets/motion.png";
import video from "../../assets/video.png";

const cards = [
  { id: 1, text: 'UI/UX Design', image: ui, backgroundColor: '#277a30' },
  { id: 2, text: 'Product Design', image: product, backgroundColor: '#637a27' },
  { id: 3, text: 'Graphic Design', image: graphic, backgroundColor: '#277a71' },
  { id: 4, text: 'Motion & Animation Design', image: motion, backgroundColor: '#7a7627' },
  { id: 5, text: 'Video Creation', image: video, backgroundColor: '#4c7a27' },
];

const Design = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = cards.length;
  const cardsToShow = 5; // Adjusted to match the number of cards available

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
            <a className="card-link" href={`/contactus?project=${encodeURIComponent(card.text)}`}>
              <img src={card.image} alt={card.text} />
              <p>{card.text}</p>
            </a>
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

export default Design;
