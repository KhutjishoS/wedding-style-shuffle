import { useEffect } from "react";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";

const OurTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Madam Abner Exclusive",
      role: "Our Founder",
      image: "/images/team1/480435759_950104967254541_7573252509708948305_n.jpg",
      bio: "With years of experience in event design and coordination, Madam Abner brings creativity and precision to every project. Her passion for creating unforgettable moments and keen attention to detail ensure that each event is unique and flawless."
    },
    {
      name: "Madam Abner Exclusive",
      role: "Our Founder",
      image: "/images/team2/480152411_947481457516892_874407956309432535_n.jpg",
      bio: "With years of experience in event design and coordination, Madam Abner brings creativity and precision to every project. Her passion for creating unforgettable moments and keen attention to detail ensure that each event is unique and flawless."
    }
  ];

  return (
    <div className="page-transition-container">
      <section className="pt-24 pb-8 px-4 bg-rose/5">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-4">
            <span className="inline-block py-1 px-3 rounded-full bg-rose/10 text-rose text-xs font-medium tracking-wide mb-3">
              Our Team
            </span>
            <h1 className="text-4xl md:text-5xl font-serif mb-4">
              Meet the Event Experts
            </h1>
            <p className="text-charcoal/70 max-w-3xl mx-auto">
              
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      <section className="pt-4 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-serif mb-2">Madam Abner Exclusive</h3>
            <p className="text-rose-light text-lg mb-4">Our Founder</p>
            <p className="text-charcoal/70 text-base leading-relaxed max-w-3xl mx-auto mb-8">
              With years of experience in event design and coordination, Madam Abner brings creativity and precision to every project. Her passion for creating unforgettable moments and keen attention to detail ensure that each event is unique and flawless.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <AnimatedSection delay={100}>
              <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-102 transition-transform duration-300">
                <div className="relative">
                  <img
                    src="/images/team1/480435759_950104967254541_7573252509708948305_n.jpg"
                    alt="Madam Abner Exclusive"
                    className="w-full h-[500px] object-cover object-center"
                  />
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-102 transition-transform duration-300">
                <div className="relative">
                  <img
                    src="/images/team2/480152411_947481457516892_874407956309432535_n.jpg"
                    alt="Madam Abner Exclusive"
                    className="w-full h-[500px] object-cover object-center"
                  />
                  </div>
                </div>
              </AnimatedSection>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-serif mb-6">Join Our Team</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              We're always looking for passionate, creative individuals to join our wedding planning family. If you're dedicated to creating magical moments and exceptional experiences, we'd love to hear from you.
            </p>
            <button className="bg-rose hover:bg-rose-dark text-white py-3 px-8 rounded-md transition-all duration-300">
              View Open Positions
            </button>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default OurTeam;
