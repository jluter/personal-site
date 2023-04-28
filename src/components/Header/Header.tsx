import React from 'react';
import './Header.scss';
// import { SiGithub, SiLinkedin } from 'react-icons/si';


const Header: React.FC = (props) => {
  
    const windowWidth: number = window.innerWidth;

    const pagebreak = (window.innerWidth > 440) ? ' ' : <br/>;

  return (
    <header className="header">
      <h1 className="header__title">Jakob{pagebreak}Luter</h1>
      <ul className='header__list'>
        <li className='header__list-item'>Works</li>
        <li className='header__list-item'>About</li>
        <li className='header__list-item'>Contact</li>
      </ul>
    </header>
  );
};

export default Header;