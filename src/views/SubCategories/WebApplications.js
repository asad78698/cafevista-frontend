import React, { useState } from 'react';
import './DesktopApplications.css';
import html from "../../assets/html.png";
import java from "../../assets/java.png";
import nodecode from "../../assets/nodecode.png";
import python from "../../assets/python.png";
import php from "../../assets/php.png";
import mean from "../../assets/mean.png";
import mern from "../../assets/mern.png";
import lamp from "../../assets/lamp.png";

const cards = [
  { id: 1, text: 'HTML/CSS', image: html, backgroundColor: '#790C33' },
  { id: 2, text: 'JavaScript Frameworks', image: java, backgroundColor: '#0d1137' },
  { id: 3, text: 'Node.js', image: nodecode, backgroundColor: '#077b8a' },
  { id: 4, text: 'Python/Django', image: python, backgroundColor: '#5c3c92' },
  { id: 5, text: 'PHP/Laravel', image: php, backgroundColor: '#530837' },
  { id: 6, text: 'MEAN Stack', image: mean, backgroundColor: '#796716' },
  { id: 7, text: 'MERN Stack', image: mern, backgroundColor: '#322514' },
  { id: 8, text: 'LAMP Stack', image: lamp, backgroundColor: '#3b4d61' },
];

const WebApplications = () => {
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

export default WebApplications;
