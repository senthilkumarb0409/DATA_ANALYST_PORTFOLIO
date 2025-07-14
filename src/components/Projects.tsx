import React from 'react';
import { Github, ExternalLink, Database, TrendingUp, Users, ShoppingCart } from 'lucide-react';

const Projects: React.FC = () => {
  const githubUsername = "senthilkumarb0409";

  const projects = [
    {
      title: 'Sales Data Analysis Dashboard',
      description: 'A dynamic Power BI dashboard analyzing Blinkit\'s sales performance across outlets, item types, and regions.Highlights key metrics like sales trends, outlet performance, and customer ratings using interactive visuals.Demonstrates business intelligence, data modeling, and visual storytelling skills.Ideal for decision-making, retail analysis, and strategic insights.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Power BI', 'DAX', 'Power Query', 'Data Modeling', 'Data Cleaning', 'Visualization'],
      icon: <TrendingUp size={24} />,
      github: '#',
      demo: '#'
    },
    {
      title: 'Exploratory Data Analysis',
      description: 'This project performs exploratory data analysis (EDA) on a heart disease dataset (heart.csv). The aim is to analyze key health-related features and understand their relationships with heart disease diagnosis. The analysis uses Python libraries such as Pandas, Matplotlib, and Seaborn to visualize and summarize the data.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'numpy', 'pandas', 'Seaborn'],
      icon: <Users size={24} />,
      github: '#',
      demo: '#'
    }
    /*,
    {
      title: 'E-commerce Data Pipeline',
      description: 'ETL pipeline for processing and analyzing e-commerce transaction data with automated reporting.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['SQL', 'Python', 'PostgreSQL', 'Jupyter'],
      icon: <ShoppingCart size={24} />,
      github: '#',
      demo: '#'
    },
    {
      title: 'Financial Data Visualization',
      description: 'Comprehensive analysis of stock market data with interactive visualizations and trend analysis.',
      image: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['R', 'ggplot2', 'Shiny', 'Finance APIs'],
      icon: <Database size={24} />,
      github: '#',
      demo: '#'
    } */
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of data analysis projects demonstrating my skills in data processing, visualization, and insights generation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white p-2 rounded-lg">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            These projects represent my journey in data analysis and showcase my ability to work with various datasets and tools.
          </p>
          <a 
            href={`https://github.com/${githubUsername}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;