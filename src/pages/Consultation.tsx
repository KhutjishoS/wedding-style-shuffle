import { useState } from "react";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const guestRanges = [
  "Less than 50",
  "50-80",
  "81-100",
  "101-120",
  "121-150",
  "151-200",
  "201-250",
  "251-300",
  "301-350",
  "351-450",
  "451+"
];

const eventTypes = [
  "Wedding",
  "Party",
  "Birthday",
  "Corporate Event",
  "Baby Shower",
  "Conference",
  "Year End Function",
  "Bridal Shower",
  "Memorial Service"
];

const Consultation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    eventType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast.success("Consultation Request Submitted", {
      description: "We'll contact you shortly to confirm your appointment.",
      duration: 5000,
    });
    navigate("/gallery"); // Redirect back to gallery after submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="page-transition-container">
      <section className="py-20 px-4 bg-rose/5 mt-16">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-rose/10 text-rose text-xs font-medium tracking-wide mb-3">
              Book a Consultation
            </span>
            <h1 className="text-4xl md:text-5xl font-serif mb-4">
              Schedule Your Event Consultation
            </h1>
            <p className="text-charcoal/70">
              Let's discuss your vision and create the perfect event experience together.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-charcoal">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-rose/20 focus:border-rose focus:ring-rose"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-charcoal">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-rose/20 focus:border-rose focus:ring-rose"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-charcoal">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border-rose/20 focus:border-rose focus:ring-rose"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="eventType" className="text-sm font-medium text-charcoal">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-rose/20 focus:border-rose focus:ring-rose py-2 px-3 text-charcoal"
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="guests" className="text-sm font-medium text-charcoal">
                    Expected Guest Count
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-rose/20 focus:border-rose focus:ring-rose py-2 px-3 text-charcoal"
                  >
                    <option value="">Select guest count range</option>
                    {guestRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium text-charcoal">
                    Preferred Date
                  </label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="border-rose/20 focus:border-rose focus:ring-rose"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="time" className="text-sm font-medium text-charcoal">
                    Preferred Time
                  </label>
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="border-rose/20 focus:border-rose focus:ring-rose"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-charcoal">
                  Additional Information
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="border-rose/20 focus:border-rose focus:ring-rose"
                  placeholder="Tell us about your wedding vision, any specific requirements, or questions you have..."
                />
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  className="flex-1 bg-rose hover:bg-rose-dark text-white"
                >
                  Submit Request
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-rose/20 hover:bg-rose/5"
                  onClick={() => navigate("/gallery")}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Consultation; 