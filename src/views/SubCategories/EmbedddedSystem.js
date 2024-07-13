import React, { useState } from 'react';
import './DesktopApplications.css';
import micro from "../../assets/Microsites.png";
import embedded from "../../assets/embedded.png";
import iot from "../../assets/iot.png";
import watch from "../../assets/watch.png";
import real from "../../assets/realtime.png";
import firmware from "../../assets/firmware.png";
import aiduni from "../../assets/ar.png";

const cards = [
  { id: 1, text: 'Microcontroller Programming', image: micro, backgroundColor: '#00732e' },
  { id: 2, text: 'Embedded Software', image: embedded, backgroundColor: '#be5272' },
  { id: 3, text: 'IoT Applications', image: iot, backgroundColor: '#003912' },
  { id: 4, text: 'Wearable Devices', image: watch, backgroundColor: '#4d1727' },
  { id: 5, text: 'Real Time Operations', image: real, backgroundColor: '#b152be' },
  { id: 6, text: 'Firmware Development', image: firmware, backgroundColor: '#5288be' },
  { id: 7, text: 'Arduino', image: aiduni, backgroundColor: '#279141'},
  // Add more cards as needed
];

const EmbeddedSystem = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = cards.length;
  const cardsToShow = 5;

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

export default EmbeddedSystem;
