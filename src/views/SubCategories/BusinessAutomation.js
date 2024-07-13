import React, { useState } from 'react';
import './DesktopApplications.css';
import tools from "../../assets/automationtool.png";
import manage from "../../assets/management.png";
import rpabus from "../../assets/rpabusiness.png";
import rpacons from "../../assets/rpaconsultant.png";
import crm from "../../assets/crm.png";
import crmm from "../../assets/crmm.png";

const BusinessAutomation = () => {
  // Array containing card data
  const cards = [
    { id: 1, text: 'Automation Tools (Zapier, Integromat)', image: tools, backgroundColor: '#008080' },
    { id: 2, text: 'Business Process Management Software', image: manage, backgroundColor: '#3C8484' },
    { id: 3, text: 'RPA Development', image: rpabus, backgroundColor: '#006666' },
    { id: 4, text: 'RPA Consulting', image: rpacons, backgroundColor: '#004c4c' },
    { id: 5, text: 'CRM System Development', image: crm, backgroundColor: '#14607B' },
    { id: 6, text: 'CRM Integration', image: crmm, backgroundColor: '#A68131' },
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

export default BusinessAutomation;
