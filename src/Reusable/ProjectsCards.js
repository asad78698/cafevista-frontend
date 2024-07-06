import React from 'react';
import Slider from 'react-slick';
import "./ProjectsCards.css";
import chatbot from "../assets/chatbotProject.jpg";
import business from "../assets/BusinessProject.PNG";
import analysis from "../assets/DataProject.PNG";
import assistant from "../assets/AssustantProject.png";
const ProjectsCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Move carousel every 3 seconds
    arrows: true, // Show next/previous arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  const projects = [
    {
      imageUrl: chatbot,
      name: "ChatBot Development",
      description: "Automate tasks and enhance customer interactions with AI-powered chatbots.",
      Url: "https://cafevistaai.com/ai/"
    },
    {
      imageUrl: business,
      name: "Business Automation System",
      description: "Implement data-driven solutions to optimize operations and drive ROI.",
      Url: "https://cafevistaai.com/ai/"
    },
    {
      imageUrl: assistant,
      name: "Personal Assistant",
      description: "Track progress and achieve tangible results with our tailored solutions.",
      Url: "https://cafevistaai.com/ai/"
    },
    {
      imageUrl: analysis,
      name: "Data Analysis",
      description: "Leverage custom algorithms to analyze data and drive strategic decisions.",
      Url: "https://cafevistaai.com/ai/"
    }
  ];
  


  const handleCardClick = (url) => {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "http://" + url;
    }
    window.open(url, '_blank');
  };
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="carousel-item">
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <button className="card-button" onClick={() => handleCardClick(project.Url)}>Explore</button>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProjectsCards;
