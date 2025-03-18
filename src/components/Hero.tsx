
import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const images = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2070&auto=format&fit=crop',
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
          Creating Unforgettable Wedding Experiences
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          Your Perfect Day <br className="hidden md:block" />
          <span className="text-rose-light">Begins Here</span>
        </h1>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg md:text-xl opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          From enchanting venues to exceptional services, we curate every element 
          to transform your vision into an exquisite celebration of love.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up" style={{ animationDelay: '900ms' }}>
          <button className="bg-rose hover:bg-rose-dark text-white py-3 px-8 rounded-md transition-all duration-300 flex items-center gap-2 min-w-[180px] justify-center">
            Explore Services
          </button>
          <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white py-3 px-8 rounded-md transition-all duration-300 flex items-center gap-2 min-w-[180px] justify-center">
            Find Venues
          </button>
        </div>
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
