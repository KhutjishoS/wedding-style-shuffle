
import { useEffect } from "react";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out! We'll get back to you within 24 hours.",
    });
  };

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
              <h2 className="text-3xl font-serif mb-6">Get in Touch</h2>
              <p className="text-charcoal/70 mb-8">
                Fill out the form below and one of our wedding specialists will contact you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">
                      Your Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="John Smith" 
                      required 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      required 
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1">
                    Phone Number
                  </label>
                  <Input 
                    id="phone" 
                    placeholder="(123) 456-7890" 
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-charcoal mb-1">
                    Wedding Date (if known)
                  </label>
                  <Input 
                    id="date" 
                    type="date"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">
                    Tell Us About Your Wedding
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Share your vision, questions, or any details about your wedding day"
                    rows={6}
                    className="w-full"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-rose hover:bg-rose-dark text-white py-3 px-8 rounded-md transition-all duration-300 w-full md:w-auto"
                >
                  Send Message
                </Button>
              </form>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
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
                        123 Wedding Blvd<br />
                        Suite 45<br />
                        San Francisco, CA 94107
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
                        hello@weddingstyleshuffle.com<br />
                        info@weddingstyleshuffle.com
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
                        (123) 456-7890<br />
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
          </div>
        </div>
      </section>
      
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="w-full h-[400px] rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50471.05531405742!2d-122.43294328906253!3d37.75766066293667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1625687977966!5m2!1sen!2sus" 
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
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
