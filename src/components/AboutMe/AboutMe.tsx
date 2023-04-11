import React from 'react';
import './AboutMe.scss';
import Headshot from '../../assets/images/headshot.jpg';

const AboutMe: React.FC = () => {
    return (
      <div className="about-me-container">
        <div>
            <img className="about-me-photo" src={Headshot} alt="Plant Branch"/>
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