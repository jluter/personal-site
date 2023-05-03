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
  

    const pagebreak = (window.innerWidth > 440) ? ' ' : <br/>;

    let x = Math.min(1.5, (window.innerWidth/window.innerHeight)*2)

  return (
    <header className="header">
      <h1 className="header__title" onClick={() => handleHeaderListClick(0, 0, 5)}>Jakob{pagebreak}Luter</h1>
      <ul className='header__list'>
        <li className='header__list-item' onClick={() => handleHeaderListClick(x, 1, 2.5)}>Works</li>
        <li className='header__list-item' onClick={() => handleHeaderListClick(-x, 1, 2.5)}>About</li>
        <li className='header__list-item' onClick={() => handleHeaderListClick(x, -1, 2.5)}>Contact</li>
      </ul>
    </header>
  );
};

export default Header;