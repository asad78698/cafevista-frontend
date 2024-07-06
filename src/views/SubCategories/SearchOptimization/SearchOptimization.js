import React from 'react'
import "./SearchOptimization.css"
import BearCarousel, { moveEffectFn } from 'bear-react-carousel';
import 'bear-react-carousel/dist/index.css';
import bullet from "../../../assets/Bullet.png";

const images = [
    {
      "id": "0",
      "heading": "App Development Services",
      "content": "Bring your app idea to life with our comprehensive development services. From initial design to final implementation, we ensure a seamless development process for your mobile application..",
      "bullet1": "Craft unique and intuitive app designs that stand out in the market.",
      "bullet2": "Employ agile development methodologies for efficient and flexible app creation.",
      "bullet3": "Develop apps that deliver a consistent experience across all devices and platforms.",
      "bullet4": "Rigorous testing protocols to ensure your app is bug-free and user-friendly."
    },
    {
      "id": "1",
      "heading": "App Store Optimization (ASO)",
      "content": "Maximize your app's visibility in the app stores with our ASO services. Improve your app’s ranking and discoverability to attract more downloads.",
      "bullet1": "Research and implement the right keywords to improve search rankings.",
      "bullet2": "Optimize your app's title, description, and visuals to stand out in the app store.",
      "bullet3": "Encourage positive reviews and high ratings from satisfied users.",
      "bullet4": "Ensure your app store page is optimized to convert visitors into users."
    },
    {
      "id": "2",
      "heading": "User Acquisition & Revenue Growth",
      "content": "Drive app installs and revenue with our targeted user acquisition strategies and monetization techniques.",
      "bullet1": "Execute effective paid ad campaigns across platforms to attract new users.",
      "bullet2": "Implement organic growth tactics to increase your user base sustainably.",
      "bullet3": "Optimize in-app purchases, subscriptions, and ad placements for increased revenue.",
      "bullet4": "Engage and retain users with personalized content and loyalty programs."
    },
    {
      "id": "3",
      "heading": "Full-Cycle Game & App Investment Services",
      "content": "For investors and creators alike, we provide full-cycle services to transform app concepts into market-leading products with substantial returns.",
      "bullet1": "Guide investors through funding promising app and game ventures with high potential for success.",
      "bullet2": "In-depth market research to position your app or game for optimal market entry.",
      "bullet3": "Strategies for scaling your app or game post-launch to maximize market share and revenue.",
      "bullet4": "Expert advice on exit strategies to realize the investment's full value when the time is right."
    },
  ];
  
export default function SearchOptimization() {
    const bearSlideItemData = images.map((row) => (
        <div key={row.id} className="Search-Optimization-custom-card">
          <div className="Search-Optimization-card-content">
            <h3>{row.heading}</h3>
            <p className="Search-Optimization-features-content">{row.content}</p>
            <p className="Search-Optimization-bullet-content"><img className="Search-Optimization-bullet" src={bullet} alt="bullet" />{row.bullet1}</p>
            <p className="Search-Optimization-bullet-content"><img className="Search-Optimization-bullet" src={bullet} alt="bullet" />{row.bullet2}</p>
            <p className="Search-Optimization-bullet-content"><img className="Search-Optimization-bullet" src={bullet} alt="bullet" />{row.bullet3}</p>
    
            <p className="Search-Optimization-bullet-content"><img className="Search-Optimization-bullet" src={bullet} alt="bullet" />{row.bullet4}</p>
    
          </div>
        </div>
      ));
    
      return (
        <div className='Search-Optimization-Feature-carousel'>
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