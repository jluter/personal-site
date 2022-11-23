import React, { useState } from 'react';
import './Header.scss';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { HiMail } from 'react-icons/hi';
// import Headshot from '../../assets/images/profile-pic.jpg';


const Header: React.FC = (props) => {
  
    const width = window.innerWidth;


  return (
    <header className="header">
      {/* <figure>
            <img src={Headshot} alt="site-logo"/>
        </figure> */}
      <div>
        <h1 className="title">Hello, I'm Jakob</h1>
        <div className='subtitle-container'>
        <h3 className="subtitle">
          A Full-Stack Developer making {(width > 440) ? <br /> : null} responsive websites.
        </h3>
        <nav className="navbar">
          <ul className="navbar__list">
            <li className="navbar__item">
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://www.linkedin.com/in/jakob-luter/"
              >
                <SiLinkedin size="2rem" />
              </a>
            </li>
            <li className="navbar__item">
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://github.com/jluter"
              >
                <SiGithub size="2rem" />
              </a>
            </li>
          </ul>
        </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;