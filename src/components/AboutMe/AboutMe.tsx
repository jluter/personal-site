import React from 'react';
import './AboutMe.scss';

const AboutMe: React.FC = () => {
    return (
      <div className="about-me-container">
        <div>
            <img className="about-me-photo" src="https://i.postimg.cc/ZnMcDY10/plant-branch.jpg" alt="Plant Branch"/>
        </div>
        <div>
            <p className='about-me-description'>
            I'm a web developer that has recently undergone a career change from the social services field. Working for people with disablities has made me passionate about building accessible, intuitive applications. 
            </p>
        </div>
      </div>
    );
}

export default AboutMe;