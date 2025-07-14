import React from 'react';
import { Database, BarChart3, Code, Brain, Calculator, FileSpreadsheet } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={32} />,
      skills: ['Python', 'SQL'],
      color: 'bg-blue-500'
    },
    {
      title: 'Data Analysis Tools',
      icon: <BarChart3 size={32} />,
      skills: ['Pandas', 'NumPy', 'Jupyter'],
      color: 'bg-teal-500'
    },
    {
      title: 'Database Technologies',
      icon: <Database size={32} />,
      skills: ['MySQL', 'SQL Server'],
      color: 'bg-purple-500'
    },
    {
      title: 'Statistical Analysis',
      icon: <Calculator size={32} />,
      skills: ['Descriptive Statistics', 'Inferential Statistics'],
      color: 'bg-orange-500'
    },
    {
      title: 'Business Intelligence',
      icon: <FileSpreadsheet size={32} />,
      skills: ['Power BI', 'Excel', 'Data Visualization'],
      color: 'bg-green-500'
    },
    {
      title: 'Soft Skills',
      icon: <Brain size={32} />,
      skills: ['Analytical-Thinking', 'Team Player', 'Motivated', 'Decision Making'],
      color: 'bg-red-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for data analysis, from programming languages to advanced analytics tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
              <div className={`${category.color} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            Continuous learning is key in data analysis. I'm always exploring new tools and techniques to stay current with industry trends.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Learning: Snowflake', 'Exploring: AWS', 'Interested in: Machine Learning', 'Studying: Advanced Statistics'].map((item, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;