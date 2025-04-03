import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    content: "Our event was nothing short of magical. Every detail was executed flawlessly, and we couldn't be happier with how our special day turned out.",
    author: "Emily & James",
    date: "August 2023",
    image: "https://images.unsplash.com/photo-1600207789068-69a5b80c9d93?q=80&w=1587&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: 2,
    content: "The team went above and beyond to ensure our event day was stress-free and perfect. The venue was exquisite, and the coordination was seamless.",
    author: "Sarah & Michael",
    date: "June 2023",
    image: "https://images.unsplash.com/photo-1583939411023-c2b87679dc32?q=80&w=1587&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: 3,
    content: "From the beautiful venue to the delicious catering, our event exceeded all expectations. We're so grateful for the amazing experience.",
    author: "Jessica & David",
    date: "October 2023",
    image: "https://images.unsplash.com/photo-1588199509102-724a0b76e784?q=80&w=1587&auto=format&fit=crop",
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-rose/10 text-rose text-xs font-medium tracking-wide mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Event Success: Real Stories, Real Celebrations
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Hear from our clients about how we delivered exceptional service and premium rentals for all types of events, from weddings and corporate gatherings to personal celebrations. Their testimonials showcase how we brought their event visions to life with unforgettable experiences.
          </p>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden py-10">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-cream p-8 rounded-lg shadow-sm flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-md">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex mb-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={cn(
                              "mr-1", 
                              i < testimonial.rating ? "text-rose fill-rose" : "text-gray-300"
                            )} 
                          />
                        ))}
                      </div>
                      <p className="text-charcoal/80 italic mb-4">"{testimonial.content}"</p>
                      <div>
                        <p className="font-serif text-lg">{testimonial.author}</p>
                        <p className="text-charcoal/60 text-sm">{testimonial.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white rounded-full p-2 shadow-md text-charcoal hover:text-rose transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white rounded-full p-2 shadow-md text-charcoal hover:text-rose transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeIndex === i ? "bg-rose w-6" : "bg-gray-300"
                )}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
