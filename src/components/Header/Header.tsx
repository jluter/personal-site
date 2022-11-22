import React, { useState } from 'react';
import './Header.scss';
import Headshot from '../../assets/images/profile-pic.jpg';


const Header: React.FC = (props) => {


    return <header>
        <figure>
            <img src={Headshot} alt="site-logo"/>
        </figure>
        <nav>
            <ul>
                <li>About</li>
                <li>Projects</li>
            </ul>
        </nav>
    </header>;
}

export default Header