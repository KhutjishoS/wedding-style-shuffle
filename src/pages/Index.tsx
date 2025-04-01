import { useEffect } from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition-container">
      <Hero />
      
      <Categories />
      
      <Testimonials />
      
      <Footer />
    </div>
  );
};

export default Index;
