import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="text-blue-300">SENTHIL KUMAR B</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in-delay">
            Fresh Computer Engineering Graduate & Aspiring Data Analyst
          </p>
          <p className="text-lg md:text-xl mb-12 text-blue-200 max-w-2xl mx-auto animate-fade-in-delay-2">
            Passionate about transforming raw data into meaningful insights. 
            Recent graduate with strong analytical skills and eagerness to start my career in data analysis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-delay-3">
            <a href="#projects" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-lg">
              View My Work
            </a>
            <a href="#contact" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105">
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center space-x-6 animate-fade-in-delay-4">
            <a href="https://github.com/senthilkumarb0409" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors duration-200 transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/senthil-kumar-b-441b36200/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors duration-200 transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:senthilkumar1868@gmail.com" className="text-blue-200 hover:text-white transition-colors duration-200 transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-blue-200" />
      </div>
    </section>
  );
};

export default Hero;