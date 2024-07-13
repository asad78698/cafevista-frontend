import React, { useState } from 'react';
import './DesktopApplications.css';
import three from "../../assets/3d.png";
import two from "../../assets/two.png";
import vr from "../../assets/vr.png";
import vrs from "../../assets/vrrsi.png";
import unity from "../../assets/unity.png";
import unreal from "../../assets/unreal.png";
import simu from "../../assets/simulation.png";
import training from "../../assets/training.png";

const cards = [
  { id: 1, text: '2D Game Development', image: three, backgroundColor: '#896e12' },
  { id: 2, text: '3D Game Development', image: two, backgroundColor: '#8f7e0f' },
  { id: 3, text: 'AR/VR Game Development', image: vr, backgroundColor: '#8f0f7b' },
  { id: 4, text: 'Unreal Engine Development', image: unreal, backgroundColor: '#215330' },
  { id: 5, text: 'Unity Development', image: unity, backgroundColor: '#4d1727' },
  { id: 6, text: 'Simulation Software', image: simu, backgroundColor: '#19680e' },
  { id: 7, text: 'Training Simulators', image: training, backgroundColor: '#8f0f6f' },
  { id: 8, text: 'Virtual Reality Simulations', image: vrs, backgroundColor: '#0e6867' },
  // Add more cards as needed
];

const GameDevelopment = () => {
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

export default GameDevelopment;
