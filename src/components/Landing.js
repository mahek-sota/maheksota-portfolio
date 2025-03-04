import React from 'react';
import mahek from '../assets/Mahek.jpeg'; 
import resume from '../assets/Mahek_Sota_SWE.pdf'; // Import the resume

function Landing() {
    // Function to handle the download
    const handleDownload = () => {
        window.open(resume, '_blank');
    };

    return (
        <div className="landing">
            <div className="profile-container">
                <div className="profile-picture">
                    <img src={mahek} alt="Profile" />
                </div>
                <div className="profile-info">
                    <h1 className="name">Mahek Sota</h1>
                    <h2 className="designation">
                        <span>Software Developer</span>
                        <span className="typing-cursor">|</span>
                    </h2>
                    <p className="description">
                        Welcome to my portfolio! I’m a passionate and driven Software Developer with expertise in full-stack development, AI, and machine learning, dedicated to enhancing user experiences through innovative solutions. Currently, I work at the University of Mississippi, focusing on creating robust, scalable systems and optimizing performance.
                    </p>
                    <div className="social-media">
                        <a href="https://github.com/mahek-sota" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a 
                            onClick={handleDownload} 
                            style={{ cursor: 'pointer' }} 
                            rel="noopener noreferrer"
                            role="button" // Optional, helps with accessibility
                        >
                            <i className="fa-solid fa-file"></i>
                        </a>
                        <a href='https://linkedin.com/in/mahek-sota' target="_blank">
                            <i className='fab fa-linkedin'></i>
                        </a>
                        <a href='https://leetcode.com/u/msota/' target="_blank">
                            <i className="fa-solid fa-code"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
