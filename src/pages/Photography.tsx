import { useEffect } from "react";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import { Camera, CheckCircle, Clock } from "lucide-react";

const Photography = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition-container">
      <section className="py-20 px-4 bg-rose/5">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-rose/10 text-rose text-xs font-medium tracking-wide mb-3">
              Wedding Photography
            </span>
            <h1 className="text-4xl md:text-5xl font-serif mb-4">
              Capture Your Perfect Moments
            </h1>
            <p className="text-charcoal/70 max-w-3xl mx-auto">
              Our expert photographers will preserve your special day in stunning, timeless images.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img
                src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1740&auto=format&fit=crop"
                alt="Wedding Photography"
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <h2 className="text-3xl font-serif mb-6">Our Photography Process</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center">
                    <Camera className="text-sage-dark" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Pre-Wedding Consultation</h3>
                    <p className="text-charcoal/70">
                      We discuss your vision, preferred style, and must-have shots to create a personalized photography plan.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-sage-dark" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Event Day Coverage photography</h3>
                    <p className="text-charcoal/70">
                      Our photographers capture every precious moment, from getting ready to the last dance.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center">
                    <Clock className="text-sage-dark" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Post-Production</h3>
                    <p className="text-charcoal/70">
                      We carefully edit and retouch your photos to ensure they're perfect before delivery.
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
            <h2 className="text-3xl font-serif mb-4">Photography Packages</h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Choose the perfect package for your wedding photography needs.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <div className="bg-white p-8 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-serif mb-3">Essential Package</h3>
                <p className="text-charcoal/70 mb-4">
                  Perfect for intimate weddings with basic photography needs.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>6 hours coverage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>100 edited photos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>Digital delivery</span>
                  </li>
                </ul>
                <p className="font-medium">Starting at R 3,500</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-sm h-full border-2 border-rose relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-rose text-white py-1 px-4 rounded-full text-sm">
                  Most Popular
                </div>
                <h3 className="text-xl font-serif mb-3">Premium Package</h3>
                <p className="text-charcoal/70 mb-4">
                  Comprehensive coverage for your entire wedding day.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>Full day coverage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>300 edited photos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>Engagement session</span>
                  </li>
                </ul>
                <p className="font-medium">Starting at R 5,500</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="bg-white p-8 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-serif mb-3">Luxury Package</h3>
                <p className="text-charcoal/70 mb-4">
                  The ultimate photography experience for your special day.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>Full day coverage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>500 edited photos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>Second photographer</span>
                  </li>
                </ul>
                <p className="font-medium">Starting at R 8,500</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <section 
        className="py-20 px-4 text-white relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1740&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-charcoal/60"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Ready to Capture Your Special Day?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Book a consultation to discuss your photography needs and view our portfolio.
            </p>
            <button className="bg-rose hover:bg-rose-dark text-white py-3 px-8 rounded-md transition-all duration-300">
              Book a Consultation
            </button>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Photography; 