
import { useEffect } from "react";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryImages = [
    {
      id: 1,
      category: "Ceremonies",
      image: "https://images.unsplash.com/photo-1511795409834-432f7b991b52?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Garden Ceremony"
    },
    {
      id: 2,
      category: "Receptions",
      image: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Elegant Reception"
    },
    {
      id: 3,
      category: "Decor",
      image: "https://images.unsplash.com/photo-1519741347686-c1e331c20a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Floral Arrangements"
    },
    {
      id: 4,
      category: "Couples",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Sunset Portrait"
    },
    {
      id: 5,
      category: "Ceremonies",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Beachfront Vows"
    },
    {
      id: 6,
      category: "Receptions",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Rustic Dining"
    },
    {
      id: 7,
      category: "Decor",
      image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Table Settings"
    },
    {
      id: 8,
      category: "Couples",
      image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "First Dance"
    },
    {
      id: 9,
      category: "Details",
      image: "https://images.unsplash.com/photo-1535254973040-607b474d7f5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Wedding Rings"
    }
  ];

  const categories = ["All", "Ceremonies", "Receptions", "Decor", "Couples", "Details"];

  return (
    <div className="page-transition-container">
      <section className="py-20 px-4 bg-rose/5 mt-16">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-rose/10 text-rose text-xs font-medium tracking-wide mb-3">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-serif mb-4">
              Wedding Gallery
            </h1>
            <p className="text-charcoal/70 max-w-3xl mx-auto">
              Browse our collection of stunning weddings and be inspired for your special day.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-rose/20 hover:bg-rose hover:text-white transition-colors duration-300"
              >
                {category}
              </button>
            ))}
          </AnimatedSection>
        </div>
      </section>
      
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 50}>
                <div className="overflow-hidden rounded-lg shadow-sm group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 p-6 text-white">
                        <p className="text-sm font-medium text-rose/90 mb-1">{item.category}</p>
                        <h3 className="text-xl font-serif">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-sage/10">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-serif mb-6">Want to See More?</h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto mb-8">
              We have many more beautiful weddings in our portfolio. Schedule a consultation to view our complete collection and discuss how we can bring your vision to life.
            </p>
            <button className="bg-rose hover:bg-rose-dark text-white py-3 px-8 rounded-md transition-all duration-300">
              Book a Consultation
            </button>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Gallery;
