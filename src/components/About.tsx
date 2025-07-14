import React from 'react';
import { Code, Database, TrendingUp, Brain } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Engineering Background',
      description: 'Strong foundation in computer engineering with programming and problem-solving skills.'
    },
    {
      icon: <Database size={24} />,
      title: 'Data Enthusiast',
      description: 'Passionate about working with data, databases, and extracting meaningful insights.'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Analytical Mindset',
      description: 'Strong analytical thinking and attention to detail for data-driven decision making.'
    },
    {
      icon: <Brain size={24} />,
      title: 'Quick Learner',
      description: 'Eager to learn new technologies and methodologies in the data analysis field.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A dedicated computer engineering graduate with a passion for data analysis and a strong desire to contribute to data-driven organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              I recently completed my Computer Engineering degree in September 2024, where I developed a strong foundation in programming, algorithms, and system design. During my studies, I discovered my passion for data analysis and the power of extracting meaningful insights from complex datasets.
            </p>
            <p className="text-gray-700 leading-relaxed">
              My engineering background has equipped me with strong analytical thinking, problem-solving skills, and attention to detail – all essential qualities for a successful data analyst. I'm excited to begin my career in data analysis and contribute to data-driven decision making.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I'm particularly interested in business intelligence, statistical analysis, and data visualization. I believe that data has the power to transform businesses and drive innovation, and I'm eager to be part of that transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="text-blue-600 mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;