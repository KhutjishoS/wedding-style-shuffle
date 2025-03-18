
import { useEffect } from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import { ArrowRight, Calendar, Heart, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition-container">
      <Hero />
      
      <Categories />
      
      {/* Featured section */}
      <section className="py-20 px-4 bg-sage/10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-sage/20 text-sage-dark text-xs font-medium tracking-wide mb-3">
              Featured
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Plan Your Dream Wedding
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Discover why couples choose us for their most important day.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-rose/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="text-rose" size={24} />
                </div>
                <h3 className="text-xl font-serif mb-3">Easy Planning</h3>
                <p className="text-charcoal/70 mb-4">
                  Our streamlined process and expert planners make organizing your wedding effortless and enjoyable.
                </p>
                <Link to="/planning" className="text-rose hover:text-rose-dark transition-colors duration-300 inline-flex items-center font-medium">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-rose/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="text-rose" size={24} />
                </div>
                <h3 className="text-xl font-serif mb-3">Personalized Experience</h3>
                <p className="text-charcoal/70 mb-4">
                  We tailor every detail to reflect your unique love story and personal style preferences.
                </p>
                <Link to="/our-approach" className="text-rose hover:text-rose-dark transition-colors duration-300 inline-flex items-center font-medium">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-rose/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="text-rose" size={24} />
                </div>
                <h3 className="text-xl font-serif mb-3">Expert Support</h3>
                <p className="text-charcoal/70 mb-4">
                  Our dedicated team provides guidance and support throughout your entire wedding journey.
                </p>
                <Link to="/our-team" className="text-rose hover:text-rose-dark transition-colors duration-300 inline-flex items-center font-medium">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-cover bg-center text-white relative" style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1464366400160-824c7a2c0ba6?q=80&w=2073&auto=format&fit=crop')" 
      }}>
        <div className="absolute inset-0 bg-charcoal/70"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-xs font-medium tracking-wide mb-3">
              Let's Create Something Special
            </span>
            <h2 className="text-3xl md:text-5xl font-serif mb-6">
              Ready to Begin Your Wedding Journey?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to schedule a consultation and discover how we can bring your wedding dreams to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-rose hover:bg-rose-dark text-white py-3 px-8 rounded-md transition-all duration-300 flex items-center gap-2 justify-center">
                Contact Us
              </button>
              <button className="bg-white text-charcoal py-3 px-8 rounded-md transition-all duration-300 hover:bg-white/90 flex items-center gap-2 justify-center">
                Schedule Consultation
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
