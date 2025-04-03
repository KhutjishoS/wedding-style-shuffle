import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartAnimation, setCartAnimation] = useState(false);
  const { items: cartItems } = useCart();
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add animation when cart items or quantities change
  useEffect(() => {
    setCartAnimation(true);
    const timeout = setTimeout(() => setCartAnimation(false), 300);
    return () => clearTimeout(timeout);
  }, [cartItemCount]); // Watch cartItemCount instead of cartItems.length

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Planning', href: '/planning' },
    { name: 'Our Approach', href: '/our-approach' },
    { name: 'Offerings', href: '/offerings' },
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
          <h1 className="text-xl font-serif font-bold text-charcoal flex flex-col leading-tight relative">
            <span className="text-rose text-3xl tracking-wider relative">
              Abner
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-rose"></span>
            </span>
            <span className="text-sage text-xl tracking-wide mt-1 relative pl-2">
              Exclusive
              <span className="absolute -bottom-1 left-0 w-16 h-0.5 bg-sage"></span>
            </span>
            <span className="text-charcoal text-lg tracking-wide mt-1 relative pl-4">
              Hire
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-charcoal"></span>
            </span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-charcoal hover:text-rose transition-colors font-medium text-shadow-sm"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/cart" className="relative group">
            <ShoppingCart 
              size={20} 
              className={cn(
                "transition-all duration-300 text-shadow-md transform",
                cartAnimation ? "scale-125" : "",
                cartItemCount > 0 ? "text-rose" : "text-charcoal group-hover:text-rose"
              )}
            />
            {cartItemCount > 0 && (
              <span 
                className={cn(
                  "absolute -top-2 -right-2 bg-rose text-white text-xs w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300",
                  cartAnimation ? "scale-125" : ""
                )}
              >
                {cartItemCount}
              </span>
            )}
          </Link>
          <Link 
            to="/consultation" 
            className="bg-rose text-white px-8 py-2.5 rounded-full hover:bg-rose/90 transition-all duration-300 font-semibold text-shadow-md hover:scale-105 hover:shadow-lg"
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden relative z-10 text-charcoal hover:text-rose transition-colors duration-300 text-shadow-md"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 bg-cream transform transition-transform duration-300 ease-in-out md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="pt-20 px-4">
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-charcoal hover:text-rose transition-colors duration-300 text-lg font-bold"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/cart" 
              className="flex items-center text-charcoal hover:text-rose transition-colors duration-300 text-lg font-bold group"
              onClick={toggleMenu}
            >
              <ShoppingCart 
                size={24} 
                className={cn(
                  "transition-all duration-300 mr-2",
                  cartAnimation ? "scale-125" : "",
                  cartItemCount > 0 ? "text-rose" : "text-charcoal group-hover:text-rose"
                )}
              />
              Cart
              {cartItemCount > 0 && (
                <span 
                  className={cn(
                    "ml-2 bg-rose text-white text-xs w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300",
                    cartAnimation ? "scale-125" : ""
                  )}
                >
                  {cartItemCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
