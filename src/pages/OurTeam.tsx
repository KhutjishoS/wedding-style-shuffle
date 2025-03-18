
import { useEffect } from "react";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";

const OurTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const team = [
    {
      name: "Emma Johnson",
      role: "Lead Wedding Planner",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      bio: "With over 10 years of experience planning luxury weddings, Emma brings creativity and precision to every event she coordinates."
    },
    {
      name: "Michael Chen",
      role: "Design Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      bio: "Michael's background in interior design gives him a unique eye for creating stunning wedding aesthetics that wow both couples and guests."
    },
    {
      name: "Sophia Rodriguez",
      role: "Vendor Relations Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      bio: "Sophia's extensive network of premium vendors ensures that every aspect of your wedding is executed to the highest standard."
    },
    {
      name: "James Wilson",
      role: "Day-of Coordinator",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      bio: "James' attention to detail and calm demeanor make him the perfect person to ensure your wedding day runs smoothly."
    },
    {
      name: "Olivia Thompson",
      role: "Client Experience Manager",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      bio: "Olivia ensures that every couple receives personalized attention throughout their wedding planning journey."
    },
    {
      name: "Daniel Kim",
      role: "Logistics Coordinator",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      bio: "Daniel's background in event management helps him coordinate complex wedding logistics with ease and efficiency."
    }
  ];

  return (
    <div className="page-transition-container">
      <section className="py-20 px-4 bg-rose/5">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-rose/10 text-rose text-xs font-medium tracking-wide mb-3">
              Our Team
            </span>
            <h1 className="text-4xl md:text-5xl font-serif mb-4">
              Meet the Wedding Experts
            </h1>
            <p className="text-charcoal/70 max-w-3xl mx-auto">
              Our passionate team of wedding professionals is dedicated to creating exceptional experiences for every couple.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 100}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-80 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-serif mb-1">{member.name}</h3>
                    <p className="text-rose font-medium mb-3">{member.role}</p>
                    <p className="text-charcoal/70">{member.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-sage/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img
                src="https://images.unsplash.com/photo-1511795409834-432f7b991b52?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Team Meeting"
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <h2 className="text-3xl font-serif mb-6">Our Collective Expertise</h2>
              <p className="text-charcoal/70 mb-6">
                With backgrounds spanning event design, hospitality management, and fine arts, our diverse team brings a wealth of knowledge and creativity to every wedding we plan.
              </p>
              <p className="text-charcoal/70 mb-6">
                We pride ourselves on staying ahead of industry trends while honoring timeless traditions, creating wedding experiences that are both innovative and elegant.
              </p>
              <p className="text-charcoal/70">
                Each team member undergoes continuous education and training to ensure we're offering the very best service and most current design concepts to our couples.
              </p>
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
