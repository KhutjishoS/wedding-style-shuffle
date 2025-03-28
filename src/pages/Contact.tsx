import { useEffect } from "react";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition-container">
      <section className="py-20 px-4 bg-sage/5">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-sage/20 text-sage-dark text-xs font-medium tracking-wide mb-3">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-serif mb-4">
              Let's Start Planning Your Special Day
            </h1>
            <p className="text-charcoal/70 max-w-3xl mx-auto">
              We're excited to hear about your wedding dreams. Reach out to schedule a consultation or ask any questions.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="bg-white p-8 rounded-lg shadow-sm h-full">
                <h3 className="text-2xl font-serif mb-6">Our Information</h3>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-rose/10 rounded-full flex items-center justify-center">
                      <MapPin className="text-rose" size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Visit Our Office</h4>
                      <p className="text-charcoal/70">
                        123 Church Street<br />
                        Menlyn Maine<br />
                        Pretoria, 0181
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-rose/10 rounded-full flex items-center justify-center">
                      <Mail className="text-rose" size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Email Us</h4>
                      <p className="text-charcoal/70">
                        khutsisoshogole@gmail.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-rose/10 rounded-full flex items-center justify-center">
                      <Phone className="text-rose" size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Call Us</h4>
                      <p className="text-charcoal/70">
                        0716210719<br />
                        Monday-Friday: 9am - 6pm
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-lg font-medium mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center hover:bg-sage/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sage-dark">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center hover:bg-sage/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sage-dark">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center hover:bg-sage/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sage-dark">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center hover:bg-sage/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sage-dark">
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-sm">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.9024424301397!2d28.2749354!3d-25.7837924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95628a6c1c0c1d%3A0x1e95628a6c1c0c1d!2sMenlyn%20Maine%2C%20Pretoria%2C%200181!5e0!3m2!1sen!2sza!4v1709654321!5m2!1sen!2sza" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Office Location"
                ></iframe>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
