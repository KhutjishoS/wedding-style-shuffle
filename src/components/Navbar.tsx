
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Planning', href: '/planning' },
    { name: 'Our Approach', href: '/our-approach' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Our Team', href: '/our-team' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed w-full top-0 z-50 transition-all duration-300 px-4 md:px-8 py-3',
        scrolled ? 'bg-cream/90 shadow-sm backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="relative z-10">
          <h1 className="text-xl font-serif font-bold text-charcoal">
            <span className="text-rose">Wedding</span>Bliss
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-charcoal/80 hover:text-rose transition-colors duration-300 text-sm tracking-wide after:content-[''] after:block after:h-0.5 after:scale-x-0 after:bg-rose after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-charcoal focus:outline-none z-10"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Menu */}
        <div
          className={cn(
            'fixed inset-0 bg-cream/98 flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden',
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          )}
        >
          <nav className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-charcoal hover:text-rose transition-colors duration-300 text-xl"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
