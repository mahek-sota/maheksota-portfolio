import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDesktop, faServer, faTools, faRobot } from '@fortawesome/free-solid-svg-icons';

// Define icons for each category
const categoryIcons = {
  Languages: faCode,
  "Front-end Development": faDesktop,
  "Back-end Development & Databases": faServer,
  "Tools & Frameworks": faTools,
  "ML Libraries": faRobot
};

const Skills = {
  Languages: [
    "C++", "C#", "Python", "Java", "Modern JavaScript (ES6+)",
    "SQL", "PHP", "TypeScript", "Golang", "Kotlin", "Scala", "MATLAB"
  ],
  "Front-end Development": [
    "React fundamentals (including Redux and Hooks)", "AngularJS", "HTML5", "HTML/DOM",
    "CSS/SASS", "Highcharts", "Vue.js", "Next.js", "Tailwind CSS", "React Native",
    "jQuery", "Three.js"
  ],
  "Back-end Development & Databases": [
    "NodeJS", "ExpressJS", "SOAP", "REST Principles", "Flask", "Django", "Spring", "Spring Boot",
    "MySQL Relational Databases", "MongoDB", "PostgreSQL", "Database Design & Performance Analysis", "Web Services"
  ],
  "Tools & Frameworks": [
    "AWS", "Azure", "Kubernetes", "Docker", "Kafka", "Tableau", "PowerBI", "JWT",
    "Selenium", "JUnit", "CI/CD (Jenkins)", "Git", "Jira", "Agile methodologies", "Figma"
  ],
  "ML Libraries": ["Scipy", "Numpy", "OpenCV", "Tensorflow", "Pandas", "Scikit", "Seaborn"]
};

const TerminalSkills = () => {
  const [selectedTab, setSelectedTab] = useState(Object.keys(Skills)[0]);

  const handleTabClick = (category) => {
    setSelectedTab(category);
  };

  const renderSkills = () => {
    const skills = Skills[selectedTab];
    const prefix = "(base) mahek@Maheks-MacBook-Air ~ % ";
    return (
      <div className="terminalcontent show">
        <pre className="terminal-content">
          {skills.map(skill => `${prefix}${skill}`).join('\n')}
        </pre>
      </div>
    );
  };

  return (
    <div className="work-container">
      <div className="tab">
        {Object.keys(Skills).map(category => (
          <button
            key={category}
            className={`tab-button ${selectedTab === category ? 'active' : ''}`}
            onClick={() => handleTabClick(category)}
          >
            <FontAwesomeIcon icon={categoryIcons[category]} /> {category}
          </button>
        ))}
      </div>
      <div className="terminal">
        {renderSkills()}
      </div>
    </div>
  );
};

export default TerminalSkills;
