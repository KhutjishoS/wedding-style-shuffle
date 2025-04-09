import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const checkWorkingHours = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      const minute = now.getMinutes();
      
      // Check if it's Monday (1) to Friday (5)
      const isWeekday = day >= 1 && day <= 5;
      // Check if current time is between 9:00 and 18:00
      const isWorkingHour = (hour > 9 || (hour === 9 && minute >= 0)) && (hour < 18 || (hour === 18 && minute === 0));
      
      setIsOpen(isWeekday && isWorkingHour);
    };

    // Check immediately
    checkWorkingHours();

    // Update every minute
    const interval = setInterval(checkWorkingHours, 60000);

    return () => clearInterval(interval);
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
              We're excited to hear about your event dreams. Reach out to schedule a consultation or ask any questions.
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
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=369+Panorama+Road,+The+Reeds,+Centurion"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-4 group hover:cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-rose/10 rounded-full flex items-center justify-center group-hover:bg-rose/20 transition-colors">
                        <MapPin className="text-rose group-hover:scale-110 transition-transform" size={20} />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1 group-hover:text-rose transition-colors">Visit Our Office</h4>
                        <p className="text-charcoal/70">
                          369 Panorama Road<br />
                          The Reeds<br />
                          Centurion
                        </p>
                      </div>
                    </a>
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href="mailto:hello@abnerexclusive.co.za"
                      className="flex gap-4 group hover:cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-rose/10 rounded-full flex items-center justify-center group-hover:bg-rose/20 transition-colors">
                        <Mail className="text-rose group-hover:scale-110 transition-transform" size={20} />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1 group-hover:text-rose transition-colors">Email Us</h4>
                        <p className="text-charcoal/70">
                          hello@abnerexclusive.co.za
                        </p>
                      </div>
                    </a>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-rose/10 rounded-full flex items-center justify-center mt-1">
                      <Phone className="text-rose group-hover:scale-110 transition-transform" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-medium mb-1">Call Us</h4>
                      <p className="mb-2">
                        <a 
                          href="tel:+27744172828"
                          className="text-charcoal/70 hover:text-rose transition-colors group"
                        >
                          (+27 ) 74 417 2828
                        </a>
                      </p>
                      <div className="text-sm text-charcoal/70 space-y-1">
                        <div className="flex items-center gap-2">
                          <Clock size={14} className="flex-shrink-0" />
                          <span>Monday-Friday: 9am - 6pm</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-[14px] flex-shrink-0"></div>
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${isOpen ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                            {isOpen ? "Open Now" : "Closed"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-lg font-medium mb-4">Follow Us</h4>
                  <div className="flex items-center gap-4">
                    <a
                      href="http://Facebook.com/abnerexclusive"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-charcoal hover:text-rose transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                      </svg>
                    </a>
                    <a
                      href="http://Instagram.com/abnerexclusive"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-charcoal hover:text-rose transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.69,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.25-.15-4.77-1.69-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.92,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-6.98,6.98C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.36,2.62,6.78,6.98,6.98C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,6.98-6.98C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.tiktok.com/@abnerexclusive?_t=ZM-8vNKuAKSXp7&_r=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-charcoal hover:text-rose transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-sm">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.0453324717584!2d28.1471661!3d-25.901744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956438b222d85d%3A0x47ec6ef9be576422!2s369%20Panorama%20Rd%2C%20The%20Reeds%2C%20Centurion%2C%200157!5e0!3m2!1sen!2sza!4v1709654321!5m2!1sen!2sza&t=k" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="369 Panorama Road, The Reeds, Centurion"
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
