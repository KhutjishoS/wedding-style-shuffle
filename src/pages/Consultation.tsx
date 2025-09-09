import { useState } from "react";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { Loader2, CheckCircle2 } from "lucide-react";

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
  "Memorial Service",
  "Funeral"
];

const timeSlots = [
  "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30",
  "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"
];

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  eventDate: "",
  eventTime: "",
  guestCount: "",
  eventType: "",
  message: ""
};

const Consultation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Get today's date in YYYY-MM-DD format using local time
  const todayDate = new Date();
  const year = todayDate.getFullYear();
  const month = String(todayDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const day = String(todayDate.getDate()).padStart(2, '0');
  const localToday = `${year}-${month}-${day}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);

    try {
      // Initialize EmailJS with your public key
      emailjs.init('Lbq-Hq8rtk64kdw9l');

      // Format the event time for better readability
      const formattedTime = formData.eventTime ? `${formData.eventTime} ${parseInt(formData.eventTime.split(':')[0]) >= 12 ? 'PM' : 'AM'}` : '';

      // Format the event date for better readability
      const formattedDate = formData.eventDate ? new Date(formData.eventDate).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) : '';

      // Common email data for both templates
      const emailData = {
        to_email: formData.email,
        from_email: 'khutsisoshogole@gmail.com',
        // Client Information
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        title: formData.eventType,
        // Event Details
        event_type: formData.eventType,
        guests: formData.guestCount,
        date: formattedDate,
        time: formattedTime,
        message: formData.message
      };

      console.log('Form Data:', formData);
      console.log('Email Data:', emailData);

      // Send email to customer using template_wovirbs
      const customerEmailResponse = await emailjs.send(
        'service_j171hig',
        'template_wovirbs',
        emailData
      );

      // Send email to company using template_lucph3p
      const companyEmailResponse = await emailjs.send(
        'service_j171hig',
        'template_lucph3p',
        {
          ...emailData,
          to_email: 'khutsisoshogole@gmail.com',
          from_email: formData.email
        }
      );

      console.log('Customer Email Response:', customerEmailResponse);
      console.log('Company Email Response:', companyEmailResponse);

      if (customerEmailResponse.status === 200 && companyEmailResponse.status === 200) {
        setFormData(initialFormData);
        setIsSuccess(true);
      } else {
        throw new Error('Failed to send one or both emails');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('There was an error submitting your request. Please try again later or contact us directly at khutsisoshogole@gmail.com');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'time') {
      // Extract hours and minutes from the time value
      const [hours, minutes] = value.split(':').map(Number);
      
      // Round minutes to nearest 30
      const roundedMinutes = Math.round(minutes / 30) * 30;
      
      // Format the time back to HH:mm
      const formattedHours = hours.toString().padStart(2, '0');
      const formattedMinutes = roundedMinutes.toString().padStart(2, '0');
      
      setFormData(prev => ({
        ...prev,
        [name]: `${formattedHours}:${formattedMinutes}`
      }));
    } else {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    }
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
              Enquiry Form
            </h1>
            <p className="text-charcoal/70">
              Let's discuss your vision and create the perfect event experience together.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 bg-white p-8 rounded-lg shadow-sm text-center">
                <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">Request Submitted Successfully!</h3>
                <p className="text-gray-600 mt-2 mb-6">Thank you for your enquiry. We will contact you shortly.</p>
                <Button 
                  onClick={() => navigate('/')}
                  className="w-full bg-rose-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-rose-700 transition-colors duration-300 shadow-lg hover:shadow-xl text-lg"
                >
                  Back to Home
                </Button>
              </div>
            ) : (
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
                      disabled={isLoading}
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
                      disabled={isLoading}
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
                      disabled={isLoading}
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
                      onChange={(e) => {
                        handleChange(e);
                        e.target.blur();
                      }}
                      required
                      disabled={isLoading}
                      className="w-full rounded-md border border-rose/20 focus:border-rose focus:ring-rose py-2 px-3 text-charcoal disabled:opacity-50 appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 0.75rem center',
                        backgroundSize: '1rem',
                        paddingRight: '2.5rem'
                      }}
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type} className="cursor-pointer py-2">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="guestCount" className="text-sm font-medium text-charcoal">
                    Expected Guest Count
                  </label>
                    <select
                    id="guestCount"
                    name="guestCount"
                    value={formData.guestCount}
                      onChange={(e) => {
                        handleChange(e);
                        e.target.blur();
                      }}
                    required
                      disabled={isLoading}
                      className="w-full rounded-md border border-rose/20 focus:border-rose focus:ring-rose py-2 px-3 text-charcoal disabled:opacity-50 appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 0.75rem center',
                        backgroundSize: '1rem',
                        paddingRight: '2.5rem'
                      }}
                    >
                      <option value="">Select guest count range</option>
                      {guestRanges.map((range) => (
                        <option key={range} value={range} className="cursor-pointer py-2">
                          {range}
                        </option>
                      ))}
                    </select>
              </div>
                <div className="space-y-2">
                  <label htmlFor="eventDate" className="text-sm font-medium text-charcoal">
                    Preferred Date
                  </label>
                  <Input
                    id="eventDate"
                    name="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                      min={localToday}
                      disabled={isLoading}
                    className="border-rose/20 focus:border-rose focus:ring-rose"
                  />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="eventTime" className="text-sm font-medium text-charcoal">
                    Preferred Time
                  </label>
                    <select
                    id="eventTime"
                    name="eventTime"
                    value={formData.eventTime}
                      onChange={(e) => {
                        handleChange(e);
                        e.target.blur();
                      }}
                    required
                      disabled={isLoading}
                      className="w-full rounded-md border border-rose/20 focus:border-rose focus:ring-rose py-2 px-3 text-charcoal disabled:opacity-50 appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 0.75rem center',
                        backgroundSize: '1rem',
                        paddingRight: '2.5rem'
                      }}
                    >
                      <option value="">Select preferred time</option>
                      {timeSlots.map((time) => {
                        const [hours] = time.split(':');
                        const hour = parseInt(hours);
                        const period = hour >= 12 ? 'PM' : 'AM';
                        const displayHour = hour > 12 ? hour - 12 : hour;
                        const formattedTime = `${displayHour}:${time.split(':')[1]} ${period}`;
                        
                        return (
                          <option key={time} value={time} className="cursor-pointer py-2">
                            {formattedTime}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div></div>
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
                    disabled={isLoading}
                  className="border-rose/20 focus:border-rose focus:ring-rose"
                  placeholder="Tell us about your wedding vision, any specific requirements, or questions you have..."
                />
              </div>

                <div className="flex gap-4 pt-2">
                <Button
                  type="submit"
                  className="w-full bg-rose-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-rose-700 transition-colors duration-300 shadow-lg hover:shadow-xl text-lg"
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
            )}
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Consultation; 