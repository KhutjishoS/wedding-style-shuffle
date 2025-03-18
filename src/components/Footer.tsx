
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      console.log('Subscribed with email:', email);
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <h2 className="text-2xl font-serif font-bold">
                <span className="text-rose">Wedding</span>Bliss
              </h2>
            </Link>
            <p className="text-white/70 mb-6 max-w-xs">
              Creating unforgettable wedding experiences with elegance, 
              attention to detail, and personalized service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-rose transition-colors duration-300">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white/70 hover:text-rose transition-colors duration-300">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white/70 hover:text-rose transition-colors duration-300">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Venues', 'Services', 'Gallery', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-white/70 hover:text-rose transition-colors duration-300 inline-flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-rose mt-1 flex-shrink-0" />
                <span className="text-white/70">
                  123 Wedding Lane, Suite 101<br />
                  Pretoria, Gauteng 0002<br />
                  South Africa
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-rose flex-shrink-0" />
                <span className="text-white/70">+27 12 345 6789</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-rose flex-shrink-0" />
                <span className="text-white/70">info@weddingbliss.co.za</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-6">Stay Updated</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for inspiration, tips, and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe}>
              <div className="flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="bg-white/10 text-white placeholder:text-white/50 px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-rose w-full"
                  required
                />
                <button
                  type="submit"
                  className={cn(
                    "bg-rose hover:bg-rose-dark px-4 py-2 rounded-r-md transition-colors duration-300",
                    subscribed && "bg-sage-dark"
                  )}
                >
                  {subscribed ? "Sent!" : "Join"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="pt-8 border-t border-white/10 text-white/50 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} WeddingBliss. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-rose transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-rose transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
