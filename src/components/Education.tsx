import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering in Computer Science and Engineering',
      institution: 'Rajalakshmi Institute Of Technology',
      duration: '2020 - 2024',
      description: 'Comprehensive study of computer systems, programming, algorithms, and software engineering principles.',
      achievements: [
        'Graduated with First Class With CGPA 8.30/10',
        'Relevant coursework: Data Structures, Database Systems, Statistics',
        'Final project: Secure Cloud Custom Drive'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Data Analytics',
      issuer: 'Besant Technologies',
      date: '2025',
      description: 'Comprehensive program covering data analysis process, tools, and techniques.'
    },
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      date: '2023',
      description: 'Explored cloud services,models and infrastructure.'
    },
    {
      title: 'Introduction To CyberSecurity In Cisco',
      issuer: 'CISCO',
      date: '2020',
      description: 'Learned Cybersecurity fundamentals and threat protection basics.'
    }
  ];

  const relevantCourses = [
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Statistics & Probability',
    'Machine Learning Fundamentals',
    'Software Engineering',
    'Computer Networks',
    'Operating Systems',
    'Data Mining'
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education & Certifications</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic background and continuous learning journey in data analysis and computer engineering.
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
            <GraduationCap className="mr-3 text-blue-600" size={28} />
            Academic Background
          </h3>
          
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">{edu.degree}</h4>
                  <p className="text-blue-600 font-medium">{edu.institution}</p>
                </div>
                <div className="flex items-center text-gray-600 mt-2 md:mt-0">
                  <Calendar size={16} className="mr-2" />
                  {edu.duration}
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">{edu.description}</p>
              
              <div className="space-y-2">
                {edu.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
            <Award className="mr-3 text-blue-600" size={28} />
            Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{cert.title}</h4>
                <p className="text-blue-600 font-medium mb-2">{cert.issuer}</p>
                <p className="text-sm text-gray-600 mb-3">{cert.date}</p>
                <p className="text-gray-700 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Relevant Courses */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
            <BookOpen className="mr-3 text-blue-600" size={28} />
            Relevant Coursework
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {relevantCourses.map((course, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-4 text-center">
                <span className="text-blue-800 font-medium">{course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;