import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Planning', path: '/planning' },
    { name: 'Our Approach', path: '/our-approach' },
    { name: 'Offerings', path: '/offerings' },
    { name: 'Our Team', path: '/our-team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <h1 className="text-2xl font-serif font-bold">
                <span className="text-rose">Abner</span> Exclusive Hire
              </h1>
            </Link>
            <p className="text-white/70 mb-6 max-w-xs">
              Creating unforgettable event experiences with elegance, 
              attention to detail, and personalized service.
            </p>
            <div className="flex space-x-4">
              <a href="http://Facebook.com/abnerexclusive" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-rose transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="http://Instagram.com/abnerexclusive" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-rose transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@abnerexclusive?_t=ZM-8vNKuAKSXp7&_r=1" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-rose transition-colors duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-white/70 hover:text-rose transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {/* Location Link */}
              <li className="flex items-start">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=369+Panorama+Road,+The+Reeds,+Centurion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start group hover:cursor-pointer"
                >
                  <MapPin size={18} className="mr-3 text-rose mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-white/70 group-hover:text-rose transition-colors">
                    369 Panorama Road<br />
                    The Reeds<br />
                    Centurion
                  </span>
                </a>
              </li>
              {/* Phone Link */}
              <li className="flex items-center">
                <a 
                  href="tel:+27744172828"
                  className="flex items-center group hover:cursor-pointer"
                >
                  <Phone size={16} className="mr-3 inline-block text-rose group-hover:scale-110 transition-transform" />
                  <span className="text-white/70 group-hover:text-rose transition-colors">(+27 ) 74 417 2828</span>
                </a>
              </li>
              {/* Email Link */}
              <li className="flex items-center">
                <a 
                  href="mailto:hello@abnerexclusive.co.za"
                  className="flex items-center group hover:cursor-pointer"
                >
                  <Mail size={18} className="mr-3 text-rose flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-white/70 group-hover:text-rose transition-colors">hello@abnerexclusive.co.za</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="pt-8 border-t border-white/10 text-white/50 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Abner Exclusive Hire. All rights reserved.</p>
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
