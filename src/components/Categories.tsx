import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import { Calendar, Camera, Heart, Utensils } from 'lucide-react';

const categories = [
  {
    id: 'planning',
    title: 'Event Planning',
    description: 'Full-service event planning to bring your vision to life.',
    image: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    icon: Calendar,
    link: '/planning'
  },
  {
    id: 'venues',
    title: 'Venues',
    description: 'Stunning locations for your ceremony and reception.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    icon: Heart,
    link: '/venues'
  },
  {
    id: 'photography',
    title: 'Photography',
    description: 'Professional photography to capture your special moments.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    icon: Camera,
    link: '/photography'
  },
  {
    id: 'catering',
    title: 'Catering',
    description: 'Exquisite cuisine and beverage services for your celebration.',
    image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    icon: Utensils,
    link: '/catering'
  }
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
            Discover our comprehensive selection of event services designed to create 
            a uniquely beautiful and memorable experience.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {categories.map((category, index) => (
            <AnimatedSection key={category.id} delay={index * 100}>
              <Link to={category.link} className="group">
                <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <category.icon className="text-rose" size={20} />
                  <h3 className="text-xl font-serif">{category.title}</h3>
                </div>
                <p className="text-charcoal/70">{category.description}</p>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
