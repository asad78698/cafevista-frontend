import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import './ProjectCard.css';
import chatbot from "../assets/chatbot.png";
import business from "../assets/bAutomation.PNG";
import analysis from "../assets/dataanalysis.PNG";
import assistant from "../assets/personalassistant.png";
const Project = [
  {
    imageUrl: chatbot,
    name: "ChatBot Development",
    description: "Revolutionize customer interactions and streamline operations with CafeVist@AI's versatile chatbots. Our AI-powered solutions automate tasks, provide instant support, and drive meaningful engagement across your business.",
    Url:"https://cafevistaai.com/ai/"
  },
  {
    imageUrl: business,
    name: "Business Automation System",
    description: "We implement data-driven automation solutions that track key metrics and ensure your business achieves measurable results. This isn't a sales pitch; it's a conversation to explore how our systems can align with your unique operational needs and drive tangible ROI.",
    Url:"https://cafevistaai.com/ai/"
  },
  {
    imageUrl: assistant,
    name: "Personal Assistant",
    description: "Your success is our top priority. We meticulously track progress and outcomes to ensure our partnership delivers tangible results that matter to you.  This isn't about a sales pitch – it's a collaborative conversation to see if our systems align with your needs and goals.",
    Url:"https://cafevistaai.com/ai/"
  },
  {
    imageUrl: analysis,
    name: "Data Analysis",
    description: "Our development process focuses on building a chatbot that doesn't just answer questions – it uncovers insights. We'll create custom algorithms and data models that empower your chatbot to analyze trends, generate reports, and even offer predictive recommendations. Your data will become a powerful asset, driving strategic decisions and accelerating growth.",
    Url:"https://cafevistaai.com/ai/"
  }
];

const ProjectCard = () => {
  const [flippedCards, setFlippedCards] = useState(new Array(Project.length).fill(false));

  const handleClick = (index) => {
    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = !newFlippedCards[index];
    setFlippedCards(newFlippedCards);
  };
  const handleCardClick = (url) => {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "http://" + url;
    }
    window.open(url, '_blank');
  };
  return (
    <>
    
      <div className="Project-container">
        {Project.map((project, index) => (
          <div key={index} className="project-card">
            <ReactCardFlip isFlipped={flippedCards[index]} flipDirection="vertical">
              {/* Front side */}
              <div className="card-front" onClick={() => handleClick(index)}>
                <img src={project.imageUrl} alt="orange" />
              </div>
              {/* Back side */}
              <div className="card-back" onClick={() => handleClick(index)}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <button className="card-button"  onClick={() => handleCardClick(project.Url)}> Read More</button>
              </div>
            </ReactCardFlip>
          </div>
        ))}
      </div>
      
    </>
  );
};

export default ProjectCard;