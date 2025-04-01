import { useEffect } from "react";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import { CheckCircle } from "lucide-react";

const Catering = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition-container">
      <section className="py-20 px-4 bg-rose/5">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-rose/10 text-rose text-xs font-medium tracking-wide mb-3">
              Wedding Catering
            </span>
            <h1 className="text-4xl md:text-5xl font-serif mb-4">
              Culinary Excellence for Your Special Day
            </h1>
            <p className="text-charcoal/70 max-w-3xl mx-auto">
              Experience exceptional cuisine that will delight your guests and create lasting memories.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Wedding Catering"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h2 className="text-3xl font-serif mb-4">Exquisite Wedding Catering</h2>
                <p className="text-white/90 max-w-2xl">
                  From elegant appetizers to decadent desserts, our culinary team creates unforgettable dining experiences for your special day.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-sage/10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-4">Catering Packages</h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Choose from our selection of catering packages designed to suit your needs.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <div className="bg-white p-8 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-serif mb-3">Classic Package</h3>
                <p className="text-charcoal/70 mb-4">
                  Traditional wedding menu with elegant presentation.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>3-course plated dinner</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>Basic table service</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>Standard linens</span>
                  </li>
                </ul>
                <p className="font-medium">Starting at R 350 per person</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-sm h-full border-2 border-rose relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-rose text-white py-1 px-4 rounded-full text-sm">
                  Most Popular
                </div>
                <h3 className="text-xl font-serif mb-3">Premium Package</h3>
                <p className="text-charcoal/70 mb-4">
                  Elevated dining experience with premium service.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>4-course plated dinner</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>Premium table service</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>Luxury linens</span>
                  </li>
                </ul>
                <p className="font-medium">Starting at R 450 per person</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="bg-white p-8 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-serif mb-3">Luxury Package</h3>
                <p className="text-charcoal/70 mb-4">
                  The ultimate culinary experience for your wedding.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>5-course plated dinner</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>Butler service</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-sage-dark" size={16} />
                    <span>Custom menu design</span>
                  </li>
                </ul>
                <p className="font-medium">Starting at R 550 per person</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <section 
        className="py-20 px-4 text-white relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1521137634026-7a7ea73631ae?q=80&w=1474&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-charcoal/60"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Ready to Plan Your Wedding Menu?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a tasting session to sample our cuisine and discuss your catering needs.
            </p>
            <button className="bg-rose hover:bg-rose-dark text-white py-3 px-8 rounded-md transition-all duration-300">
              Book a Tasting
            </button>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Catering; 