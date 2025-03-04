// import React from "react";
import React, { useState } from 'react';

const educationList = [
  {
    institution: 'University of Southern California',
    location: 'Los Angeles, CA',
    degree: 'Master of Science in Computer Science',
    period: 'Aug 2022 - May 2024',
    coursework: [
      'Analysis of Algorithms',
      'Database Systems',
      'Foundation of AI',
      'Web Technology',
      'Natural Language Processing',
      'Predictive Analysis',
      'Information Retrieval'
    ]
  },
  {
    institution: 'Thadomal Shahani Engineering College (Affiliated with Mumbai University)',
    location: 'Mumbai, India',
    degree: 'Bachelor of Technology in Computer Science',
    period: 'Aug 2018 - Jun 2022',
    coursework: [
      'Human-Computer Interaction',
      'Computer Networks',
      'Operating Systems',
      'Cloud Computing',
      'Distributed Systems'
    ]
  }
];

const EducationAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      <h2>Education</h2>
      {educationList.map((education, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-header" onClick={() => toggleOpen(index)}>
            <h3>{education.degree}</h3>
            <span className="arrow">{openIndex === index ? '▲' : '▼'}</span>
          </div>
          {openIndex === index && (
            <div className="accordion-body">
              <p className="location">{education.institution}, {education.location}</p>
              <p className="period">{education.period}</p>
              <p className="coursework">
                <strong>Coursework:</strong> {education.coursework.join(', ')}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EducationAccordion;
