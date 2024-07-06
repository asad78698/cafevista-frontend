
import React from 'react';
import "./EmbeddedSystem.css";
import BearCarousel, { moveEffectFn } from 'bear-react-carousel';
import 'bear-react-carousel/dist/index.css';
import bullet from "../../../assets/Bullet.png";

const images = [
  {
    "id": "0",
    "heading": "AI-Enabled Embedded Projects",
    "content": "Elevate your embedded systems with our AI-enabled solutions. Our expertise in integrating AI with hardware brings smart capabilities to your devices.",
    "bullet1": "Tailor-made AI implementations for your embedded systems.",
    "bullet2": "Harness the power of AI on the edge for faster decision-making.",
    "bullet3": "Integrate AI to automate functions and increase efficiency.",
    "bullet4": "Realize instant data processing with AI-driven embedded projects."
  },
  {
    "id": "1",
    "heading": "Rapid Prototyping and Testing",
    "content": "Accelerate product development with our rapid prototyping and testing services. Bring your ideas to life with speed and precision.",
    "bullet1": "Reduce development time with rapid prototyping capabilities.",
    "bullet2": "Quickly iterate prototypes with comprehensive testing methods.",
    "bullet3": "Validate innovative ideas with tangible prototypes.",
    "bullet4": "Save on development costs with efficient testing strategies."
  },
  {
    "id": "2",
    "heading": "Edge AI Implementation",
    "content": "Unlock the full potential of edge computing with our AI implementation services. Bring intelligent processing close to data sources for efficiency.",
    "bullet1": "Deploy AI applications directly on edge devices for real-time analytics.",
    "bullet2": "Achieve minimal response times with edge AI solutions.",
    "bullet3": "Reduce network strain by processing data on the edge.",
    "bullet4": "Enhance data security with local processing."
  },
  {
    "id": "3",
    "heading": "Wireless Communication",
    "content": "Connect your operations seamlessly with our wireless communication solutions. Experience reliable and secure wireless connectivity tailored to your business needs.",
    "bullet1": "Design bespoke wireless solutions matching your requirements.",
    "bullet2": "Ensure secure data exchange with advanced encryption protocols.",
    "bullet3": "Wireless solutions grow with your business, providing scalable connectivity.",
    "bullet4": "Benefit from uninterrupted wireless communication across operations."
  },
  {
    "id": "4",
    "heading": "Healthcare Solutions",
    "content": "Elevate healthcare services with our innovative solutions. Experience seamless operations and patient care tailored to your needs.",
    "bullet1": "Develop personalized care plans for specific health requirements.",
    "bullet2": "Ensure secure handling of sensitive health data.",
    "bullet3": "Create a network of connected systems for efficient healthcare operations.",
    "bullet4": "Utilize real-time monitoring for better patient outcomes."
  }
];

export default function EmbeddedSystem() {
  const bearSlideItemData = images.map((row) => (
    <div key={row.id} className="Emnbedded-System-custom-card">
      <div className="Emnbedded-System-card-content">
        <h3>{row.heading}</h3>
        <p className="Emnbedded-System-features-content">{row.content}</p>
        <p className="Emnbedded-System-bullet-content"><img className="Emnbedded-System-bullet" src={bullet} alt="bullet" />{row.bullet1}</p>
        <p className="Emnbedded-System-bullet-content"><img className="Emnbedded-System-bullet" src={bullet} alt="bullet" />{row.bullet2}</p>
        <p className="Emnbedded-System-bullet-content"><img className="Emnbedded-System-bullet" src={bullet} alt="bullet" />{row.bullet3}</p>

        <p className="Emnbedded-System-bullet-content"><img className="Emnbedded-System-bullet" src={bullet} alt="bullet" />{row.bullet4}</p>

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