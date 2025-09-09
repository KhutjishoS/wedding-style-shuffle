import { useEffect } from "react";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import { Calendar, CheckCircle, Clock } from "lucide-react";

const Venues = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition-container">
      <section className="py-20 px-4 bg-rose/5">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-rose/10 text-rose text-xs font-medium tracking-wide mb-3">
              Wedding Venues
            </span>
            <h1 className="text-4xl md:text-5xl font-serif mb-4">
              Discover Your Perfect Venue
            </h1>
            <p className="text-charcoal/70 max-w-3xl mx-auto">
              Explore our curated selection of stunning venues that will provide the perfect backdrop for your special day.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1498&auto=format&fit=crop"
                alt="Wedding Venue"
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <h2 className="text-3xl font-serif mb-6">Our Venue Selection Process</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center">
                    <Calendar className="text-sage-dark" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Initial Consultation</h3>
                    <p className="text-charcoal/70">
                      We discuss your vision, guest count, and preferences to find venues that match your criteria.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-sage-dark" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Venue Tours</h3>
                    <p className="text-charcoal/70">
                      We arrange private tours of our recommended venues to help you make the perfect choice.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center">
                    <Clock className="text-sage-dark" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Booking Assistance</h3>
                    <p className="text-charcoal/70">
                      We help you secure your chosen venue and coordinate all necessary arrangements.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-sage/10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-4">Featured Venues</h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Explore our handpicked selection of exceptional venues.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <div className="bg-white p-8 rounded-lg shadow-sm h-full">
                <img
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1498&auto=format&fit=crop"
                  alt="Garden Venue"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-serif mb-3">Garden Estate</h3>
                <p className="text-charcoal/70 mb-4">
                  A stunning outdoor venue surrounded by manicured gardens and natural beauty.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>Up to 200 guests</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>Indoor & outdoor options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>On-site parking</span>
                  </li>
                </ul>
                <p className="font-medium">Starting at R 5,000</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-sm h-full border-2 border-rose relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-rose text-white py-1 px-4 rounded-full text-sm">
                  Most Popular
                </div>
                <img
                  src="https://images.unsplash.com/photo-1519741347686-c1e331c20a2d?q=80&w=1470&auto=format&fit=crop"
                  alt="Ballroom Venue"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-serif mb-3">Grand Ballroom</h3>
                <p className="text-charcoal/70 mb-4">
                  An elegant indoor venue with crystal chandeliers and modern amenities.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>Up to 300 guests</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>Built-in sound system</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>Valet parking</span>
                  </li>
                </ul>
                <p className="font-medium">Starting at R 7,500</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="bg-white p-8 rounded-lg shadow-sm h-full">
                <img
                  src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Beach Venue"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-serif mb-3">Beachfront Resort</h3>
                <p className="text-charcoal/70 mb-4">
                  A luxurious beachfront venue with stunning ocean views and resort amenities.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>Up to 150 guests</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>Beach ceremony option</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>Guest accommodation</span>
                  </li>
                </ul>
                <p className="font-medium">Starting at R 10,000</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <section 
        className="py-20 px-4 text-white relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-charcoal/60"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Ready to Find Your Perfect Venue?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a consultation to tour our venues and find the perfect setting for your wedding day.
            </p>
            <button className="bg-rose hover:bg-rose-dark text-white py-3 px-8 rounded-md transition-all duration-300">
              Schedule a Venue Tour
            </button>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Venues; 