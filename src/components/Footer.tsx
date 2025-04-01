import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
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
              <a href="#" className="text-white/50 hover:text-rose transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/50 hover:text-rose transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/50 hover:text-rose transition-colors duration-300">
                <Twitter size={20} />
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
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-rose mt-1 flex-shrink-0" />
                <span className="text-white/70">
                  369 Panorama Road<br />
                  The Reeds<br />
                  Centurion
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-rose flex-shrink-0" />
                <span className="text-white/70">074 417 2828</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-rose flex-shrink-0" />
                <span className="text-white/70">hello@abnerexclusive.co.za</span>
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
