import React, { useState } from 'react';
import './Header.scss';
// import Headshot from '../../assets/images/profile-pic.jpg';


const Header: React.FC = (props) => {


    return <header className='header'>
        {/* <figure>
            <img src={Headshot} alt="site-logo"/>
        </figure> */}
        <div>
            <h1>Jakob<br />Luter</h1>
            <nav>
                <ul>
                    <li>About Me</li>
                    <li>Email</li>
                    <li>LinkedIn</li>
                    <li>GitHub</li>
                </ul>
            </nav>
        </div>
    </header>;
}

export default Header