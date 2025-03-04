import React, { useState } from 'react';
import blogImage from '../assets/blogpost.png';
import readingImage from '../assets/images/reading.jpeg';
import rcImage from '../assets/images/rc.png';
import ieteImage from '../assets/images/iete.jpeg';
import tsecImage from '../assets/images/tsec.jpg';
import aapkaImage from '../assets/images/aapka.jpg';
import kisnaImage from '../assets/images/kisna.jpg';
import aiesecImage from '../assets/images/aiesec.jpg';
import iimunImage from '../assets/images/iimun.png';

const activities = [
  {
    title: 'Writing Blog',
    description: 'Writing is more than just a hobby for me—it’s how I express, reflect, and connect. My blog is where I weave thoughts into stories, exploring ideas that resonate deeply.',
    image: blogImage,
    link: 'https://wordsandwok.wordpress.com/'
  },
  {
    title: 'Reading',
    description: 'Books have been my gateway to new perspectives, ideas, and adventures. Whether it’s fiction or philosophy, I love immersing myself in stories that expand my mind.',
    image: readingImage,
    link: ''
  },
  {
    title: 'Rotaract Journey',
    description: 'Leading a club of 50 members, I honed my skills in leadership, delegation, and negotiation while overseeing 100+ impactful projects that created positive change.',
    image: rcImage,
    link: ''
  },
  {
    title: 'IETE',
    description: 'Blending technology and mentorship, I curated a website and led skill-building workshops, empowering 50+ students to explore their technical potential.',
    image: ieteImage,
    link: ''
  },
  {
    title: 'TSEC Envoy',
    description: 'Bridging the gap between students and recruiters, I facilitated seamless communication, managed databases, and ensured a smooth placement process.',
    image: tsecImage,
    link: ''
  },
  {
    title: 'Aapka Sahara Foundation',
    description: 'Through impactful content writing, I helped raise awareness about elder abuse and contributed to initiatives supporting the elderly with dignity and care.',
    image: aapkaImage,
    link: ''
  },
  {
    title: 'KISNA Content Writing',
    description: 'Crafting over 1000 product descriptions for Kisna Diamond Jewellery, I brought the elegance of each piece to life, ensuring they resonated with customers.',
    image: kisnaImage,
    link: ''
  },
  {
    title: 'AIESEC Journey',
    description: 'As part of AIESEC Mumbai, I ensured a smooth cultural and administrative experience for exchange students, managing their onboarding and backend logistics.',
    image: aiesecImage,
    link: ''
  },
  {
    title: 'IIMUN Journey',
    description: 'Engaging with schools and students, I built partnerships and managed organized databases, helping IIMUN foster global-minded leadership among youth.',
    image: iimunImage,
    link: ''
  }
];


const ActivitiesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? activities.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === activities.length - 1 ? 0 : prevIndex + 1));
  };

  const { title, description, image, link } = activities[currentIndex];

  return (
    <div className="slider-container">
      <h3>Know More About Me...</h3>
      <button className="slider-button prev" onClick={handlePrev}>&#10094;</button>
      <div className="slider-slide">
        <img src={image} alt={title} className="slider-image" />
        <h3 className="slider-title">{title}</h3>
        <p className="slider-description">{description}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="slider-link">
            Learn More
          </a>
        )}
      </div>
      <button className="slider-button next" onClick={handleNext}>&#10095;</button>
    </div>
  );
};

export default ActivitiesSlider;
