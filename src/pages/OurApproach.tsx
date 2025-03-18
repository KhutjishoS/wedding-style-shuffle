
import { useEffect } from "react";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import { Heart, Sparkles, Users } from "lucide-react";

const OurApproach = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition-container">
      <section className="py-20 px-4 bg-sage/5">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-sage/20 text-sage-dark text-xs font-medium tracking-wide mb-3">
              Our Approach
            </span>
            <h1 className="text-4xl md:text-5xl font-serif mb-4">
              Personalized Wedding Experiences
            </h1>
            <p className="text-charcoal/70 max-w-3xl mx-auto">
              We believe every wedding should be as unique as the couple it celebrates. Our approach is centered on creating personalized experiences that reflect your love story.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={100}>
              <h2 className="text-3xl font-serif mb-6">Our Philosophy</h2>
              <p className="text-charcoal/70 mb-6">
                We believe that your wedding day should be a true reflection of your relationship, values, and vision. Our approach is built on three core principles:
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-rose/10 rounded-full flex items-center justify-center">
                    <Heart className="text-rose" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Authenticity</h3>
                    <p className="text-charcoal/70">
                      We focus on creating genuine experiences that showcase your unique personalities and relationship.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-rose/10 rounded-full flex items-center justify-center">
                    <Users className="text-rose" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Collaboration</h3>
                    <p className="text-charcoal/70">
                      We work closely with you throughout the process, ensuring your vision is at the center of every decision.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-rose/10 rounded-full flex items-center justify-center">
                    <Sparkles className="text-rose" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Attention to Detail</h3>
                    <p className="text-charcoal/70">
                      We believe that thoughtful details create memorable experiences for you and your guests.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Wedding Approach"
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-4">Our Process</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              How we turn your wedding dreams into reality.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatedSection delay={100}>
              <div className="text-center">
                <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-6 text-charcoal font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-serif mb-3">Discovery</h3>
                <p className="text-white/80">
                  We begin by understanding your vision, style preferences, and priorities for your wedding day.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-6 text-charcoal font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-serif mb-3">Design</h3>
                <p className="text-white/80">
                  We create a comprehensive design concept that captures your unique style and love story.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="text-center">
                <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-6 text-charcoal font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-serif mb-3">Curation</h3>
                <p className="text-white/80">
                  We select the perfect venues and vendors that align with your vision and work within your budget.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <div className="text-center">
                <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-6 text-charcoal font-bold text-xl">
                  4
                </div>
                <h3 className="text-xl font-serif mb-3">Execution</h3>
                <p className="text-white/80">
                  We manage all the details on your wedding day so you can fully enjoy every moment.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img
                src="https://images.unsplash.com/photo-1509927083803-4bd519298087?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Personalized Experience"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <h2 className="text-3xl font-serif mb-6">The Personalized Experience</h2>
              <p className="text-charcoal/70 mb-6">
                We tailor every detail to reflect your unique love story and style preferences. From the initial concept to the final execution, every element is thoughtfully designed with you in mind.
              </p>
              <p className="text-charcoal/70 mb-6">
                We believe that the most memorable weddings are those that authentically represent the couple's personality, values, and relationship journey. Our team works closely with you to ensure that your wedding day feels uniquely yours.
              </p>
              <p className="text-charcoal/70">
                Whether you dream of a lavish celebration or an intimate gathering, we'll help you create a wedding experience that tells your story in a way that resonates with you and your guests.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default OurApproach;
