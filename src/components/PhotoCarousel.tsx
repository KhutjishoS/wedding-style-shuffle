import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Link } from 'react-router-dom';

const photos = [
  {
    id: 1,
    image: '/images/firstPic/firstA.jpg'
  },
  {
    id: 2,
    image: '/images/firstPic/firstB.jpg'
  },
  {
    id: 3,
    image: '/images/firstPic/firstC.jpg'
  },
  {
    id: 4,
    image: '/images/firstPic/firstD.jpg'
  },
  {
    id: 5,
    image: '/images/firstPic/firstE.jpg'
  },
  {
    id: 6,
    image: '/images/firstPic/firstF.jpg'
  },
  {
    id: 7,
    image: '/images/firstPic/firstG.jpg'
  },
  {
    id: 8,
    image: '/images/firstPic/firstH.jpg'
  },
  {
    id: 9,
    image: '/images/firstPic/firstI.jpg'
  }
];

const PhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex + 1 >= photos.length ? 0 : prevIndex + 1
      );
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= photos.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 px-4 bg-cream">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-rose/10 text-rose text-xs font-medium tracking-wide mb-3">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Comprehensive Event Solutions
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Discover our range of premium services designed to create your perfect event.
          </p>
        </AnimatedSection>

        <div className="relative max-w-2xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {photos.map((photo) => (
                <div 
                  key={photo.id}
                  className="flex-shrink-0 w-full"
                >
                  <div className="relative overflow-hidden rounded-lg aspect-[16/9]">
                    <img
                      src={photo.image}
                      alt="Event service"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white rounded-full p-2 shadow-md text-charcoal hover:text-rose transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white rounded-full p-2 shadow-md text-charcoal hover:text-rose transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i ? 'bg-rose w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              to="/offerings" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-rose text-white rounded-full hover:bg-rose-dark transition-colors duration-300"
            >
              View More Photos
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel; 