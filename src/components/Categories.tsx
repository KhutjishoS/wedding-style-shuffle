
import AnimatedSection from './AnimatedSection';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    title: 'Exquisite Venues',
    description: 'Discover breathtaking locations for your perfect day',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1498&auto=format&fit=crop',
    link: '/venues',
  },
  {
    id: 2,
    title: 'Photography',
    description: 'Capture timeless moments with our expert photographers',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1740&auto=format&fit=crop',
    link: '/photography',
  },
  {
    id: 3,
    title: 'Catering',
    description: 'Culinary delights that will impress your guests',
    image: 'https://images.unsplash.com/photo-1521137634026-7a7ea73631ae?q=80&w=1474&auto=format&fit=crop',
    link: '/catering',
  },
  {
    id: 4,
    title: 'Event Planning',
    description: 'Seamless coordination for a stress-free wedding day',
    image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=1470&auto=format&fit=crop',
    link: '/planning',
  },
];

const Categories = () => {
  return (
    <section className="py-20 px-4 bg-cream">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-rose/10 text-rose text-xs font-medium tracking-wide mb-3">
            Premium Services
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Everything for Your Special Day
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Discover our comprehensive selection of wedding services designed to create 
            a uniquely beautiful and memorable experience.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {categories.map((category, index) => (
            <AnimatedSection key={category.id} delay={index * 100}>
              <Link to={category.link} className="category-card block group">
                <div className="overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="category-card-img"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-serif mb-2 group-hover:text-rose transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-rose text-sm font-medium">
                    <span>Explore</span>
                    <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={400} className="text-center">
          <Link to="/services" className="btn-outline">
            View All Services <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Categories;
