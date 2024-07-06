import React from 'react'
import BearCarousel, { moveEffectFn } from 'bear-react-carousel';
import 'bear-react-carousel/dist/index.css';
import "./AiIntegration.css";
import bullet from "../../../assets/Bullet.png";

const images = [
  {
    "id": "0",
    "heading": "Transform Your Business with Cutting-Edge AI SaaS Solutions",
    "content": "Streamline operations, enhance experiences, and drive innovation with AI-powered SaaS tools.",
    "bullet1": "Intelligent Automation: Eliminate manual tasks and boost efficiency with AI-driven automation.",
    "bullet2": "Advanced Analytics: Gain actionable insights from your data to make informed business decisions.",
    "buttontext": "Discover AI SaaS",
    "url": "./contactus"
  },
  {
    "id": "1",
    "heading": "Unlock New Possibilities with Advanced Computer Vision",
    "content": "Revolutionize applications with computer vision solutions for image recognition and real-time analysis.",
    "bullet1": "Image Recognition: Accurately identify and classify objects within images for enhanced functionality.",
    "bullet2": "Real-Time Processing: Analyze video streams in real-time to create dynamic and responsive systems.",
    "buttontext": "Explore Tech Visions",
    "url": "./contactus"
  },
  {
    "id": "2",
    "heading": "Customized Apps: Personalizing Experiences Seamlessly",
    "content": "Create personalized digital experiences with AI-powered customized apps for dynamic content delivery.",
    "bullet1": "User-Centric Design: Craft intuitive interfaces that prioritize user needs and preferences.",
    "bullet2": "Dynamic Content Delivery: Adapt content in real-time based on user behavior for maximum engagement.",
    "buttontext": "Get Personalized",
    "url": "./contactus"
  },
  {
    "id": "3",
    "heading": "Revolutionizing Efficiency: Innovative Process Automation",
    "content": "Automate workflows, increase productivity, and reduce errors with innovative process automation solutions.",
    "bullet1": "Workflow Optimization: Automate repetitive tasks to save time and resources.",
    "bullet2": "Scalable Automation: Easily adapt and expand your automation as your business grows.",
    "buttontext": "Automate Now",
    "url": "./contactus"
  }
];

  
  const clickFunction = () => {
    window.location.href = '/about';
  }
  
  const AiIntegration = () => {
    const bearSlideItemData = images.map((row) => (
      <div key={row.id} className="aiIntegration-custom-card">
        <div className="aiIntegration-card-content">
          <h3>{row.heading}</h3>
          <p className="aiIntegration-features-content">{row.content}</p>
          <p className="aiIntegration-bullet-content "><img className="aiintegration-bullet" src={bullet}/>       {row.bullet1}</p>
          <p className="aiIntegration-bullet-content  "> <img className="aiintegration-bullet" src={bullet}/>{row.bullet2}</p>
         
          <p className="aiIntegration-features-content">{row.closingcontent}</p>



          
          <button className='aiIntegration-feature-readmore' onClick={clickFunction}>{row.buttontext}</button>
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
            autoPlayTime={'2000'}
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
    };

export default AiIntegration;


    