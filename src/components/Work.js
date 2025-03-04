import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Work = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="work-container">
      <div className="tab">
        <button
          className={`tablinks ${activeTab === 'tab1' ? 'active' : ''}`}
          onClick={() => handleClick('tab1')}
        >
          <i className="fas fa-laptop-code"></i> Software Developer
        </button>
        <button
          className={`tablinks ${activeTab === 'tab2' ? 'active' : ''}`}
          onClick={() => handleClick('tab2')}
        >
          <i className="fas fa-robot"></i> Machine Learning Intern
        </button>
        <button
          className={`tablinks ${activeTab === 'tab3' ? 'active' : ''}`}
          onClick={() => handleClick('tab3')}
        >
          <i className="fas fa-code"></i> Web Development Intern
        </button>
      </div>

      <div className={`tabcontent ${activeTab === 'tab1' ? 'show' : ''}`}>
        <h2>Software Developer</h2>
        <p className="job-title">
          University of Mississippi · Full-time
          <span className="time-period">Jun 2024 - Present · 4 mos</span>
        </p>
        <ul>
            <li><strong>Built and launched</strong> full-stack applications using <u>React</u>, <u>Django</u>, <u>Flask</u>, and <u>PHP</u>, serving 100+ faculty members and 10,000+ students. Focused on creating scalable, modular systems that evolve with user needs.</li>
            
            <li><strong>Designed data pipelines</strong> that turn raw information into actionable insights. From <u>UML sequence diagrams</u> to <u>ETL frameworks</u> and <u>visual dashboards</u>, I love making complex data more accessible and useful.</li>
            
            <li><strong>Transformed monolithic applications</strong> into <u>Dockerized microservices</u>, doubling performance and reducing costs by 25%. Leveraged <u>Kubernetes</u> to ensure everything runs smoothly, no matter the scale.</li>
            
            <li><strong>Developed an NLP classification model</strong> using <u>BiLSTM</u> and <u>Word2Vec</u> to analyze sequences with 90% accuracy. Built the entire pipeline—from data collection to real-time predictions—using <u>PyTorch</u> and <u>FastAPI</u>.</li>
            
            <li><strong>Tech I work with:</strong> <u>React</u>, <u>Flask</u>, <u>Django</u>, <u>PHP</u>, <u>Kubernetes</u>, <u>Docker</u>, <u>Airflow</u>, <u>PostgreSQL</u>, <u>Redis</u>, <u>FastAPI</u>, <u>PyTorch</u>, <u>BiLSTM</u>, <u>Terraform</u>, <u>CI/CD (GitHub Actions, Jenkins)</u>, <u>NGINX</u>.</li>
        </ul>

      </div>

      <div className={`tabcontent ${activeTab === 'tab2' ? 'show' : ''}`}>
        <h2>Machine Learning Intern</h2>
        <p className="job-title">
          Friends For Inclusion · Internship
          <span className="time-period">Dec 2021 - Jan 2022 · 2 mos</span>
        </p>
        <ul>
            <li><strong>Built an AI-powered audiobook conversion tool</strong> designed to make content more accessible for blind users. Used a <u>sequence-to-sequence LSTM model</u> to handle language translation, ensuring natural and accurate speech synthesis.</li>
            
            <li><strong>Improved translation accuracy by 80%</strong> through advanced techniques like beam search decoding, attention mechanisms, gradient clipping, and dropout regularization. Fine-tuned the model with <u>Adam optimization</u> to reduce perplexity and improve fluency.</li>
            
            <li><strong>Leveraged AI & NLP technologies</strong>, integrating <u>Word2Vec embeddings</u> and <u>Hugging Face Transformers</u> to enhance contextual understanding.</li>
            
            <li><strong>Tech I worked with:</strong> <u>PyTorch</u>, <u>LSTM</u>, <u>Word2Vec</u>, <u>Hugging Face Transformers</u>.</li>
        </ul>

      </div>

      <div className={`tabcontent ${activeTab === 'tab3' ? 'show' : ''}`}>
        <h2>Web Development Intern</h2>
        <p className="job-title">
          Ashtech.in · Internship
          <span className="time-period">Jun 2021 - Aug 2021 · 3 mos</span>
        </p>
        <ul>
            <li><strong>Redesigned UI/UX</strong> with a mobile-first, accessible approach, improving responsiveness and ensuring <u>WCAG 2.1 compliance</u>. Conducted A/B testing and usability studies, leading to a 20% boost in user satisfaction.</li>
            
            <li><strong>Built and optimized full-stack payment features</strong>, seamlessly integrating <u>PayPal APIs</u> for secure transactions and real-time error handling. Reduced load times by 40% with modular React components, caching, and API optimizations.</li>
            
            <li><strong>Tech I worked with:</strong> <u>React.js</u>, <u>TypeScript</u>, <u>Redux</u>, <u>Node.js</u>, <u>Express.js</u>, <u>REST APIs</u>, <u>PostgreSQL</u>, <u>PayPal/Stripe APIs</u>, <u>Jest</u>, <u>Cypress</u>, <u>UX Research</u>.</li>
        </ul>

      </div>
    </div>
  );
};

export default Work;
