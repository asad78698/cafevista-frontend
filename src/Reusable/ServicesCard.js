import React from 'react';
import "./ServiceCard.css";
import servicesDataArray from '../Data/Data';

export default function ServicesCard() {
  const handleCardClick = (url) => {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "http://" + url;
    }
    window.open(url, '_blank');
  };
  return (
    <>
      {servicesDataArray.map((data) => (
        <div className="card-container" key={data.id} onClick={() => handleCardClick(data.url)} style={{cursor:"pointer"}}>
          <a href="/" className="hero-image-container">
            <img className="hero-image" src={data.image} alt="Spinning glass cube" />
          </a>
          <main className="main-content">
            <h3 >{data.heading}</h3>
            <p >{data.content}</p>
          </main>
        </div>
      ))}
    </>
  );
}