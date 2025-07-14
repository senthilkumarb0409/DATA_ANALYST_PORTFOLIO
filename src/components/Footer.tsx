import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Data Analyst</h3>
            <p className="text-gray-400">
              Fresh computer engineering graduate passionate about transforming data into actionable insights.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors duration-200">Skills</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a></li>
              <li><a href="#education" className="hover:text-white transition-colors duration-200">Education</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <p className="text-gray-400 mb-2">senthilkumar1868@gmail.com</p>
            <p className="text-gray-400 mb-4">+91 9514904902</p>
            <p className="text-gray-400">Available for full-time opportunities</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 flex items-center">
            Made with <Heart size={16} className="text-red-500 mx-1" /> by Senthil Kumar
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;