import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure FontAwesome CSS is imported

const projectsList = [
  { 
    id: 1, 
    name: 'Event Finder: React Web Application & Android Application', 
    description: 'Developed a React web and Android app integrating Ticketmaster, IPinfo, and Spotify APIs for event discovery and user favorites.', 
    link: 'https://docs.google.com/document/d/1u9q8XAGkUmgBxLdAOcj9jyr0kd25T4P_pdSrbn-EWwg/edit?usp=sharing', 
    github: 'https://github.com/mahek-sota/event-finder', 
    techstack: 'HTML, CSS, JS, React, NodeJS, RESTFul API, localStorage, GIT, GCP, Bootstrap, Android Studio, Java.' 
  },
  { 
    id: 2, 
    name: 'Work It: Fitness Web Application', 
    description: 'Led the creation of a fitness web app with a chatbot, video calls, and a recipe recommender, achieving high accuracy in both chatbot and recommendation systems.', 
    link: 'https://docs.google.com/document/d/1tFukSwe_yZy_knFCihmwj_MQRzO0JGtGtfktZgHlx4s/edit?usp=sharing', 
    github: 'https://github.com/mahek-sota/work-it', 
    techstack: 'HTML, CSS, JS, React, Flask, ChatterBot, BeautifulSoup, NLP techniques - cosine similarity, Word2Vec.' 
  },
  { 
    id: 3, 
    name: 'RNN and LSTM Model for Sentimental Analysis', 
    description: 'Built an NLP model for Amazon review sentiment analysis using RNN and LSTM.', 
    link: 'https://docs.google.com/document/d/1U5hXw_6HgvX2yfLaGD7TgUyDL6GHvq4cxx76GrUnVRs/edit?usp=sharing', 
    github: 'https://github.com/mahek-sota/sentimental-analysis', 
    techstack: 'Python, PyTorch, Word2Vec, RNN, LSTM' 
  },
  { 
    id: 4, 
    name: 'Customer Segmentation Analysis', 
    description: 'Implemented clustering techniques to segment customers based on behavioral and demographic data, providing actionable insights for targeted marketing strategies.', 
    link: 'https://docs.google.com/document/d/your-doc-link', 
    github: 'https://github.com/mahek-sota/customer-segmentation', 
    techstack: 'Python, Scikit-Learn, Pandas, Matplotlib, K-Means, DBSCAN, Jupyter Notebook.' 
  },
  { 
    id: 5, 
    name: 'File Sharing App', 
    description: 'Developed a secure file-sharing web application enabling encrypted uploads and downloads with user authentication and real-time notifications.', 
    link: 'https://docs.google.com/document/d/your-doc-link', 
    github: 'https://github.com/mahek-sota/file-sharing-app', 
    techstack: 'React, Node.js, Express, MongoDB, WebSockets, JWT, AWS S3, Bootstrap.' 
  },
  { 
    id: 6, 
    name: 'Inventory Management System', 
    description: 'Built a full-stack inventory management system with automated stock tracking, barcode scanning, and low-stock alerts.', 
    link: 'https://docs.google.com/document/d/your-doc-link', 
    github: 'https://github.com/mahek-sota/inventory-management', 
    techstack: 'Django, PostgreSQL, React, REST API, Docker, Redis, Celery, GraphQL.' 
  },
  { 
    id: 7, 
    name: 'Student Dropout Detector', 
    description: 'Designed an AI model to predict student dropouts based on academic performance, attendance, and socio-economic factors, helping institutions with proactive interventions.', 
    link: 'https://docs.google.com/document/d/your-doc-link', 
    github: 'https://github.com/mahek-sota/student-dropout-detector', 
    techstack: 'Python, TensorFlow, Scikit-Learn, Pandas, Flask, Streamlit, PostgreSQL.' 
  },
  { 
    id: 8, 
    name: 'URL Shortener', 
    description: 'Developed a URL shortening service with analytics to track click-through rates and geographical statistics of shortened links.', 
    link: 'https://docs.google.com/document/d/your-doc-link', 
    github: 'https://github.com/mahek-sota/url-shortener', 
    techstack: 'Node.js, Express, MongoDB, React, Redis, Docker, JWT, Nginx.' 
  },
  { 
    id: 9, 
    name: 'Huffman File Compressor', 
    description: 'Implemented Huffman coding algorithm for lossless file compression and decompression, reducing file size efficiently.', 
    link: 'https://docs.google.com/document/d/your-doc-link', 
    github: 'https://github.com/mahek-sota/huffman-compressor', 
    techstack: 'C++, Python, File Handling, Data Structures, Heap, Bit Manipulation.' 
  },
  { 
    id: 10, 
    name: 'Markdown to HTML Converter', 
    description: 'Created a tool to convert Markdown files into responsive HTML documents with syntax highlighting and live preview features.', 
    link: 'https://docs.google.com/document/d/your-doc-link', 
    github: 'https://github.com/mahek-sota/markdown-html-converter', 
    techstack: 'JavaScript, Node.js, Express, Markdown-it, React, TailwindCSS, Webpack.' 
  },
  { 
    id: 11, 
    name: 'DevOps Dashboard for CI/CD Monitoring', 
    description: 'Built a monitoring dashboard for CI/CD pipelines with real-time logs, build status visualization, and performance analytics.', 
    link: 'https://docs.google.com/document/d/your-doc-link', 
    github: 'https://github.com/mahek-sota/devops-dashboard', 
    techstack: 'React, Spring Boot, PostgreSQL, Docker, Kubernetes, Grafana, Jenkins, GitHub Actions.' 
  },
  { 
    id: 12, 
    name: 'Social Media Analytics Dashboard (Full-Stack)', 
    description: 'Developed a dashboard to track and analyze engagement metrics across multiple social media platforms using sentiment analysis and trend predictions.', 
    link: 'https://docs.google.com/document/d/your-doc-link', 
    github: 'https://github.com/mahek-sota/social-media-analytics', 
    techstack: 'React, Flask, PostgreSQL, Pandas, NLP, REST API, OAuth, Chart.js' 
  },
  { 
    id: 13, 
    name: 'AI Chatbot for Smart Recommendations', 
    description: 'Developed an AI-powered chatbot that provides smart recommendations based on user preferences using NLP and machine learning models.', 
    link: 'https://docs.google.com/document/d/your-doc-link', 
    github: 'https://github.com/mahek-sota/ai-chatbot', 
    techstack: 'Python, TensorFlow, Flask, NLP, Word2Vec, Dialogflow, REST API, React.' 
  }
];



const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projectsList.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < projectsList.length - 1 ? prevIndex + 1 : 0));
  };

  const handleMoreDetails = (id) => {
    const url = `${window.location.origin}/project/${id}`;
    window.open(url, '_blank');
  };

  const currentProject = projectsList[currentIndex];

  return (
    <div className="carousel-container">
      <h2>Selected Projects</h2>
      <div className="carousel-card">
        <div className="project-header">
          <i className="fas fa-project-diagram project-icon"></i> {/* Project Icon */}
          <h2><strong>{currentProject.name}</strong></h2>
        </div>
        <p><span className='tech'>In short: </span>{currentProject.description}</p>
        <p><span className='tech'>Tech Stack Used: </span>{currentProject.techstack}</p>
        <div className="carousel-buttons">
          <button onClick={() => handleMoreDetails(currentProject.id)}>More Details...</button>
          <a href={currentProject.github} target="_blank" rel="noopener noreferrer" className="github-link">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className="carousel-controls">
        <button onClick={handlePrev} className="carousel-button">Previous</button>
        <button onClick={handleNext} className="carousel-button">Next</button>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
