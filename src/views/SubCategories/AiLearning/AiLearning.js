import React from 'react';
import BearCarousel, { moveEffectFn } from 'bear-react-carousel';
import 'bear-react-carousel/dist/index.css';
import bullet from "../../../assets/Bullet.png";
import "./AiLearning.css";

const images = [
    {
        "id": "0",
        "heading": "AI Primer: Essential Concepts and Core Techniques",
        "content": "Build a strong foundation in AI with comprehensive tutorials and resources. Understand the core principles that power AI technologies today.",
        "bullet1": "Explore fundamental ML algorithms, understand neural networks' role in AI.",
        "bullet2": "Master data preprocessing, visualization, analysis with real-world datasets.",
        "url": "https://www.cafevistaai.com/ai/",
        "buttontext": "Read More"
      },
      {
        "id": "1",
        "heading": "Empowering Developers: Harnessing AI for Innovation",
        "content": "Advance your development skills with AI integration. Access tutorials and resources aimed at incorporating AI into your software projects.",
        "bullet1": "Learn to integrate TensorFlow, PyTorch, build chatbots.",
        "bullet2": "Implement AI for image, video recognition using computer vision.",
        "url": "https://www.cafevistaai.com/ai/",
        "buttontext": "Read More"
      },
      {
        "id": "2",
        "heading": "AI-Driven Data Insights: Revolutionizing Analytics",
        "content": "Harness the power of AI to uncover insights from data. Our tutorials and resources will guide you through AI-powered data analysis techniques.",
        "bullet1": "Unlock the future with AI-powered Predictive Analytics.",
        "bullet2": "Elevate decision-making with AI-Driven Business Intelligence.",
        "url": "https://www.cafevistaai.com/ai/",
        "buttontext": "Read More"
      },
      {
        "id": "3",
        "heading": "Unleashing Creativity: Exploring the Frontiers of AI Artistry",
        "content": "Explore the artistic and creative side of AI. Learn how AI is being used to innovate in fields like music, art, and design.",
        "bullet1": "Explore AI in Digital Art, Generative Music.",
        "bullet2": "Enhance storytelling, game development with AI.",
        "url": "https://www.cafevistaai.com/ai/",
        "buttontext": "Read More"
      },
      {
        "id": "4",
        "heading": "Charting Your AI Journey: Navigating Career Pathways",
        "content": "Pursue a rewarding career in AI with our curated tutorials and resources. Get insights into the skills and pathways leading to AI professions.",
        "bullet1": "Level up game development, explore AI's role in storytelling.",
        "bullet2": "Sculpt dynamic environments, characters with AI in game development.",
        "url": "https://www.cafevistaai.com/ai/",
        "buttontext": "Read More"
      }
      
];

export default function AiLearning() {
    // Function to handle the click event and navigate to the specified URL
    const handleReadMoreClick = (url) => {
        window.location.href = url;
    };

    const bearSlideItemData = images.map((row) => (
      <div key={row.id} className="AI-Learning-custom-card">
        <div className="AI-Learning-card-content">
          <h3>{row.heading}</h3>
          <p className="AI-Learning-features-content">{row.content}</p>
          <p className="AI-Learning-bullet-content"><img className="AI-Learning-bullet" src={bullet} alt="bullet" />{row.bullet1}</p>
          <p className="AI-Learning-bullet-content"><img className="AI-Learning-bullet" src={bullet} alt="bullet" />{row.bullet2}</p>
          <button 
            className='AI-Learning-feature-readmore' 
            onClick={() => handleReadMoreClick(row.url)}
          >
            {row.buttontext}
          </button>
        </div>
      </div>
    ));
  
    return (
      <div className='Ai-Integration-Feature-carousel'>
        <BearCarousel
          data={bearSlideItemData}
          isEnableLoop
          isEnableNavButton
          isEnableAutoPlay={true}
          autoPlayTime={2000}
          isEnablePagination
          isDebug={false}
          height={{ widthRatio: 22, heightRatio: 10 }}
          slidesPerView={1}
          isCenteredSlides
          moveEffect={{
            moveFn: moveEffectFn.transformY(50),
            moveTime: '.3s',
          }}
          breakpoints={{
            368: {
              slidesPerView: 1,
              height: { widthRatio: 22, heightRatio: 10 },
              isEnableLoop: true,
              isEnablePagination: true,
              isEnableNavButton: true,
            },
            768: {
              slidesPerView: 3,
              height: { widthRatio: 12, heightRatio: 10 },
              isEnableLoop: true,
              isEnablePagination: true,
              isEnableNavButton: true,
            },
            1200: {
              slidesPerView: 3,
              height: { widthRatio: 32, heightRatio: 9 },
              isEnableLoop: true,
              isEnablePagination: true,
              isEnableNavButton: true,
            },
          }}
        />
      </div>
    );
}
