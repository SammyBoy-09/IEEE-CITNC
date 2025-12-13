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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Contact Form: Message from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    window.location.href = `mailto:ieee.nc@cambridge.edu.in?subject=${encodeURIComponent(subject)}&body=${body}`;
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
            <Card className="p-6 hover:shadow-[var(--shadow-hover)] transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-orange-500 mb-1 text-sm">Website</h3>
                  <p className="text-base text-foreground break-words">
                    <a href="https://ieee.citnc.co.in/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">ieee.citnc.co.in</a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-[var(--shadow-hover)] transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-orange-500 mb-1 text-sm">Email</h3>
                  <p className="text-base text-foreground break-words">
                    <a href="mailto:ieee.nc@cambridge.edu.in" className="hover:text-primary transition-colors">ieee.nc@cambridge.edu.in</a>
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-[var(--shadow-hover)] transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-orange-500 mb-1 text-sm">Location</h3>
                  <p className="text-base text-foreground">Bangalore</p>
                </div>
              </div>
            </Card>

            {/* Map */}
            <Card className="p-4 overflow-hidden hover:shadow-[var(--shadow-hover)] transition-all duration-300">
              <a href="https://maps.app.goo.gl/snsToXXUUCZWRmZP8" target="_blank" rel="noopener noreferrer" className="block">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.768643347892!2d77.49127937507629!3d12.987463787324952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae23eb6557c5e9%3A0x583b4b1a6e0a7f4f!2sCambridge%20Institute%20of%20Technology%20North%20Campus!5e0!3m2!1sen!2sin!4v1734178800000!5m2!1sen!2sin"
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
          <Card className="p-8 hover:shadow-[var(--shadow-hover)] transition-all duration-300 h-fit border-2 border-orange-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-orange-500">Connect via Email</h3>
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
                  className="w-full px-4 py-3 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition-colors"
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
                  className="w-full px-4 py-3 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition-colors"
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
                  className="w-full px-4 py-3 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition-colors"
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
                  className="w-full px-4 py-3 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-6 rounded-lg font-semibold text-base flex items-center justify-center gap-2 transition-all duration-300"
              >
                <Send className="h-5 w-5" />
                Send via Email
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                Your message will open in your default email client. You can review it before sending.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
