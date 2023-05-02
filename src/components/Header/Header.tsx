import React from 'react';
import './Header.scss';
// import { SiGithub, SiLinkedin } from 'react-icons/si';


interface Props {
  cameraState: {
    cameraX: number,
    cameraY: number,
    cameraZ: number
  };
  handleHeaderListClick: (x: number, y: number, z: number) => void;
}

const Header: React.FC<Props> = ({cameraState, handleHeaderListClick}) => {
  
    const windowWidth: number = window.innerWidth;

    const pagebreak = (window.innerWidth > 440) ? ' ' : <br/>;



  return (
    <header className="header">
      <h1 className="header__title" onClick={() => handleHeaderListClick(0, 0, 5)}>Jakob{pagebreak}Luter</h1>
      <ul className='header__list'>
        <li className='header__list-item' onClick={() => handleHeaderListClick(1, 1, 3)}>Works</li>
        <li className='header__list-item' onClick={() => handleHeaderListClick(-1, 1, 3)}>About</li>
        <li className='header__list-item' onClick={() => handleHeaderListClick(1, -1, 3)}>Contact</li>
      </ul>
    </header>
  );
};

export default Header;