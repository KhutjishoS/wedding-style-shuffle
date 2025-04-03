import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const images = [
  '/images/home/476345982_943411601257211_2129830340850040033_n.jpg',
  '/images/home/476620103_944198907845147_1097655687571343343_n.jpg'
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={img}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: currentImage === index ? 1 : 0,
            zIndex: 0,
          }}
        >
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img
            src={img}
            alt="Wedding"
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-medium tracking-wide mb-4 animate-fade-in">
          Crafting Memorable Event Experience
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          Your Perfect Event <br className="hidden md:block" />
          <span className="text-rose-light">Starts Here</span>
        </h1>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg md:text-xl opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          From exceptional service to premium rentals, we bring every detail of your vision to life. 
          Crafting unforgettable celebrations for any special occasion. With luxury tents, stylish chairs, 
          and everything you need for a flawless event, we're here to make your special day truly unforgettable. 
          Let's plan something magical together.
        </p>
      </div>
      
      {/* Scroll down indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-subtle-float z-20"
        aria-label="Scroll down"
      >
        <ArrowDown size={30} strokeWidth={1.5} />
      </button>
    </section>
  );
};

export default Hero;
