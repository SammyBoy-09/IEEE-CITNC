import { Mail, MapPin, Globe, Send } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using Web3Forms - Free service, no signup needed
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Get free key from web3forms.com
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`,
          from_name: 'IEEE CITNC Website',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Left side - Contact cards and map stacked vertically */}
          <div className="flex flex-col gap-6">
            {/* Contact Cards */}
            <Card className="p-6 hover:shadow-[var(--shadow-hover)] transition-all duration-300 group hover:border-primary/50">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Globe className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-primary mb-1 text-sm">Website</h3>
                  <p className="text-base text-foreground break-words">
                    <a href="https://ieee.citnc.co.in/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">ieee.citnc.co.in</a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-[var(--shadow-hover)] transition-all duration-300 group hover:border-primary/50">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-primary mb-1 text-sm">Email</h3>
                  <p className="text-base text-foreground break-words">
                    <a href="mailto:ieee.nc@cambridge.edu.in" className="hover:text-primary transition-colors">ieee.nc@cambridge.edu.in</a>
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-[var(--shadow-hover)] transition-all duration-300 group hover:border-primary/50">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-primary mb-1 text-sm">Location</h3>
                  <p className="text-base text-foreground">Bangalore</p>
                </div>
              </div>
            </Card>

            {/* Map */}
            <Card className="p-4 overflow-hidden hover:shadow-[var(--shadow-hover)] transition-all duration-300">
              <a href="https://maps.app.goo.gl/vfoay8YrUXoMNuKX8" target="_blank" rel="noopener noreferrer" className="block">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4187.078612996439!2d77.60700207508124!3d13.246194987095006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1e1d371a83ec5%3A0x824918d7736a4ed2!2sCambridge%20Institute%20Of%20Technology%20North%20Campus!5e1!3m2!1sen!2sin!4v1765657105789!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </a>
            </Card>
          </div>

          {/* Right side - Contact Form */}
          <Card className="p-8 hover:shadow-[var(--shadow-hover)] transition-all duration-300 h-fit border-2 border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Send className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary">Send Us a Message</h3>
            </div>
            
            <p className="text-sm text-muted-foreground mb-6">
              Fill in your details below and we'll get back to you via email!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 1234567890"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your interest..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-glow disabled:bg-gray-400 text-white py-6 rounded-lg font-semibold text-base flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Send className="h-5 w-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              {submitStatus === 'success' && (
                <p className="text-sm text-center text-green-600 font-medium mt-2">
                  ✓ Message sent successfully! We'll get back to you soon.
                </p>
              )}
              
              {submitStatus === 'error' && (
                <p className="text-sm text-center text-red-600 font-medium mt-2">
                  ✗ Failed to send message. Please email us directly at ieee.nc@cambridge.edu.in
                </p>
              )}

              <p className="text-xs text-center text-muted-foreground mt-4">
                We'll respond to your inquiry as soon as possible.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
