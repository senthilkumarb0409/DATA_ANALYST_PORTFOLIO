import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact: Message from ${formData.name}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `);
    
    const mailtoLink = `mailto:senthilkumar1868@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm actively seeking opportunities in data analysis. Let's connect and discuss how I can contribute to your team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Email</h4>
                  <p className="text-gray-600">senthilkumar1868@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Phone className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Phone</h4>
                  <p className="text-gray-600">+91 9514904902</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <MapPin className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Location</h4>
                  <p className="text-gray-600">Your City, State</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-medium text-gray-800 mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/senthilkumarb0409" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/senthil-kumar-b-441b36200/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:senthilkumar1868@gmail.com" className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your message here..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;