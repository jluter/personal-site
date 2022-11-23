import React, { useState } from 'react';
import './Header.scss';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { HiMail } from 'react-icons/hi';
// import Headshot from '../../assets/images/profile-pic.jpg';


const Header: React.FC = (props) => {


    return <header className='header'>
        {/* <figure>
            <img src={Headshot} alt="site-logo"/>
        </figure> */}
        <div>
            <h1 className='title'>Jakob<br />Luter</h1>
            <nav className='navbar'>
                <ul className='navbar__list'>
                    <li className='navbar__item'><a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/jakob-luter/"><SiLinkedin size='3rem'/></a></li>
                    <li className='navbar__item'><a rel="noreferrer noopener" target="_blank" href="https://github.com/jluter"><SiGithub size='3rem'/></a></li>
                </ul>
            </nav>
        </div>
    </header>;
}

export default Header