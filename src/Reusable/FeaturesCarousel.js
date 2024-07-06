import BearCarousel, { moveEffectFn } from 'bear-react-carousel';
import 'bear-react-carousel/dist/index.css';
import './FeaturesCarousel.css';

const images = [
  {
    id: "0",
    heading: "Transforming Processes with AI Automation",
    content: "Boost efficiency and drive growth with our scalable AI solutions. Seamlessly integrate cutting-edge AI into your SaaS applications, automating workflows, deploying intelligent AI products, and providing data-driven insights. Our expertise ensures your business scales effectively without limitations.",
    url: "./services" // Changed to ./services
  },
  {
    id: "1",
    heading: "Revolutionizing Learning with AI-Driven Education",
    content: "Personalize learning experiences with our AI-driven educational platforms. Adaptive learning and interactive modules cater to individual needs, while real-time analytics provide valuable insights for continuous content updates. Comprehensive tutorials and guided learning empower your educational journey and ensure success.",
    url: "./services" // Changed to ./services
  },
  {
    id: "2",
    heading: "Innovating Communication with Advanced Chatbot Development",
    content: "Elevate user engagement with our versatile chatbot solutions. Build custom chatbots for exceptional customer service and integrate advanced GPT plugins. Our chatbots seamlessly connect to your existing platforms, leveraging AI for intelligent, context-aware interactions that continuously evolve.",
    url: "./services" // Changed to ./services
  },
  {
    id: "3",
    heading: "Advancing Innovation with Research & Development",
    content: "Transform your groundbreaking ideas into market-ready solutions with our R&D team. We'll guide you through concept and prototyping, seamlessly integrate cutting-edge technologies, and provide expert support and comprehensive tutorials to empower your innovation journey.",
    url: "./services" // Changed to ./services
  },
  {
    id: "4",
    heading: "Elevating Retail with Comprehensive E-Commerce Solutions",
    content: "Maximize your online store's potential with our all-in-one e-commerce platform. Design captivating storefronts, leverage integrated marketing tools, automate order processing, ensure robust security, and make data-driven decisions with insightful analytics. Continuous improvements and expert support keep you ahead.",
    url: "./services" // Changed to ./services
  },
  {
    id: "5",
    heading: "Enhancing Business with Advanced App Development Services",
    content: "Achieve app store success with our comprehensive app development services. From custom creation and expert launch strategies to targeted marketing and data-driven insights, we empower you to optimize user experience and drive your app's growth and success.",
    url: "./services" // Changed to ./services
  },
  {
    id: "6",
    heading: "Innovative Embedded System Solutions",
    content: "Revolutionize your operations with our next-generation embedded systems. Seamlessly integrate with IoT for smarter decision-making, leverage advanced signal processing for superior data analysis, and unlock efficiency and precision with drone and robotic automation solutions.",
    url: "./services" // Changed to ./services
  }
];


const clickFunction = () => {
  window.location.href = './service';
}

const CustomBanner = () => {
  const bearSlideItemData = images.map((row) => (
    <div key={row.id} className="custom-card">
      <div className="card-content">
        <h3>{row.heading}</h3>
        <p className="features-content">{row.content}</p>
        <button className='feature-readmore' onClick={clickFunction}>Learn More</button>
      </div>
    </div>
  ));

  return (
    <div className='Feature-carousel'>
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

export default CustomBanner;
