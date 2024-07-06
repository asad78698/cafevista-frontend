import React from 'react'
import BearCarousel, { moveEffectFn } from 'bear-react-carousel';
import 'bear-react-carousel/dist/index.css';
import bullet from "../../../assets/Bullet.png";
import "./Ecommerce.css";
const images = [
  {
    "id": "0",
    "heading": "E-commerce Store Development",
    "content": "From concept to launch, we provide end-to-end store development services to turn your e-commerce vision into a profitable reality.",
    "bullet1": "Craft a unique online store with our custom design and development services tailored to your brand.",
    "bullet2": "Seamlessly integrate with the e-commerce platform of your choice for optimal functionality.",
    "bullet3": "Ensure a seamless shopping experience with a mobile-optimized e-commerce platform.",
    "bullet4": "Develop a comprehensive launch plan to hit the ground running and attract customers from day one."
  },
  {
    "id": "1",
    "heading": "Strategic Marketing and Branding",
    "content": "Leverage our expertise in strategic marketing and branding to establish a strong online presence and create a lasting impression on your customers.",
    "bullet1": "Build a compelling brand identity that resonates with your target audience.",
    "bullet2": "Execute powerful digital marketing campaigns across multiple channels to drive traffic and sales.",
    "bullet3": "Use content marketing and SEO to enhance visibility and organic reach.",
    "bullet4": "Engage with customers and build community around your brand through social media."
  },
  {
    "id": "2",
    "heading": "Product Sourcing and Dropshipping",
    "content": "Access a global network of suppliers with our product sourcing and dropshipping services, ensuring you have the best products without the need for inventory management.",
    "bullet1": "Connect with reliable suppliers globally after thorough vetting for quality and reliability.",
    "bullet2": "Utilize our streamlined dropshipping services to fulfill orders directly to your customers.",
    "bullet3": "Choose from a wide range of products to sell, with insights into current market trends.",
    "bullet4": "Operate a lean business with no inventory, reducing overhead and risk."
  },
  {
    "id": "3",
    "heading": "International Brand Development",
    "content": "Expand your reach and grow your brand internationally with our specialized services in global market entry and brand development.",
    "bullet1": "Assess international markets to identify opportunities for brand expansion.",
    "bullet2": "Navigate the complexities of international e-commerce with ease.",
    "bullet3": "Tailor your brand and products to meet the nuances of different regional markets.",
    "bullet4": "Manage logistics and compliance for hassle-free international shipping."
  },
  {
    "id": "4",
    "heading": "Investment to Profit Solutions",
    "content": "Our comprehensive approach takes you from initial investment to sustained profitability, with strategic planning and execution at every step of your e-commerce journey.",
    "bullet1": "Develop a financial strategy that aligns with your e-commerce goals and maximizes ROI.",
    "bullet2": "Implement tactics to continuously grow revenue streams and increase profit margins.",
    "bullet3": "Optimize costs through efficient resource management and operations.",
    "bullet4": " Use data-driven decision making to maximize profitability across your e-commerce venture."
  }
];

export default function Ecommerce() {
    const bearSlideItemData = images.map((row) => (
        <div key={row.id} className="Ecommerce-custom-card">
          <div className="Ecommerce-card-content">
            <h3>{row.heading}</h3>
            <p className="Ecommerce-features-content">{row.content}</p>
            <p className="Ecommerce-bullet-content"><img className="Ecommerce-bullet" src={bullet} alt="bullet" />{row.bullet1}</p>
            <p className="Ecommerce-bullet-content"><img className="Ecommerce-bullet" src={bullet} alt="bullet" />{row.bullet2}</p>
            <p className="Ecommerce-bullet-content"><img className="Ecommerce-bullet" src={bullet} alt="bullet" />{row.bullet3}</p>
    
            <p className="Ecommerce-bullet-content"><img className="Ecommerce-bullet" src={bullet} alt="bullet" />{row.bullet4}</p>
    
          </div>
        </div>
      ));
    
      return (
        <div className='Ecommerce-Feature-carousel'>
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