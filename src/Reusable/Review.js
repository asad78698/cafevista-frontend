import React, { useState } from "react";
import people from "../Data/ReviewData";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import './Review.css';
const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const minIndex=0;
  const maxIndex=people.length-1;


  

  return (
    <article className="review">
        <div class="text-center mx-auto" style={{maxWidth: "600px"}}>
            <h1 class="display-5 mb-5 highlight Project-heading">What Our Clients Say!</h1>
      </div>
      <div className="img-container mt-3">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>      
      <p className="info text-center mx-auto">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
};

export default Review;
