import { useEffect } from "react";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import { Calendar, CheckCircle, Clock } from "lucide-react";

const Planning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition-container">
      <section className="py-20 px-4 bg-rose/5">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-rose/10 text-rose text-xs font-medium tracking-wide mb-3">
              Event Planning
            </span>
            <h1 className="text-4xl md:text-5xl font-serif mb-4">
              Your Dream Event, Effortlessly Planned
            </h1>
            <p className="text-charcoal/70 max-w-3xl mx-auto">
              Our event planning services are designed to make your journey as smooth and enjoyable as possible.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img
                src="https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Wedding Planning"
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <h2 className="text-3xl font-serif mb-6">Our Planning Process</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center">
                    <Calendar className="text-sage-dark" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Initial Consultation</h3>
                    <p className="text-charcoal/70">
                      We begin with understanding your vision, preferences, and budget to create a personalized wedding plan.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-sage-dark" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Quotation Services</h3>
                    <p className="text-charcoal/70">
                      We provide clear, detailed, and competitive quotations tailored to your project needs, ensuring accurate pricing and budget transparency.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center">
                    <Clock className="text-sage-dark" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Timeline Management</h3>
                    <p className="text-charcoal/70">
                      We create and manage a detailed timeline to ensure every aspect of your event planning stays on track.
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
            <h2 className="text-3xl font-serif mb-4">Our Planning Packages</h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Choose the level of support that best suits your needs.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <div className="bg-white p-8 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-serif mb-3">Day-of Coordination</h3>
                <p className="text-charcoal/70 mb-4">
                  Perfect for clients who have planned their event but need professional support on the day.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>Detailed timeline creation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>Vendor coordination</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>Ceremony rehearsal</span>
                  </li>
                </ul>
                <p className="font-medium">Starting at R 1,500</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-sm h-full border-2 border-rose relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-rose text-white py-1 px-4 rounded-full text-sm">
                  Most Popular
                </div>
                <h3 className="text-xl font-serif mb-3">Partial Planning</h3>
                <p className="text-charcoal/70 mb-4">
                  Ideal for clients who have started planning but need guidance and support with specific elements.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>All day-of coordination services</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>Vendor recommendations & bookings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>Design and decor guidance</span>
                  </li>
                </ul>
                <p className="font-medium">Starting at R 3,500</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="bg-white p-8 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-serif mb-3">Full Planning</h3>
                <p className="text-charcoal/70 mb-4">
                  Comprehensive planning support from start to finish for a truly stress-free experience.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>All partial planning services</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>Budget management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>Guest management</span>
                  </li>
                </ul>
                <p className="font-medium">Starting at R 6,000</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-cover bg-center text-white relative" style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" 
      }}>
        <div className="absolute inset-0 bg-charcoal/60"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Ready to Start Planning Your Perfect Event?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to schedule a consultation and discover how we can bring your event dreams to life.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Planning;
