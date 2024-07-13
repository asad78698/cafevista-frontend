import React, { useState, useEffect } from 'react'
import people from '../Data/ReviewData'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import './Review.css'

const Review = () => {
  const [index, setIndex] = useState(0)

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextPerson()
    }, 5000) // Change review every 5 seconds
    return () => clearInterval(timer)
  }, [index])

  const { name, job, text } = people[index]

  return (
    <article className='review'>
      <div className='text-center mx-auto' style={{ maxWidth: '600px' }}>
        <h1 className='display-5 mb-5 highlight Project-heading'>What Our Clients Say!</h1>
      </div>
      <div className='review-content'>
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info text-center mx-auto'>{text}</p>
      </div>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
    </article>
  )
}

export default Review
