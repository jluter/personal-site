import React from 'react';
import './Footer.scss';
// import LineAnimation from '../LineAnimation/LineAnimation';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';


const Footer: React.FC = () => {

    const windowWidth: number = window.innerWidth;

    return (
        <footer className='footer'>
            Thank you for visiting. I'm a full stack developer interested in learning, collaborating, and exploring new opportunities. Feel free to contact me for any personal or professional inquiries. 
        </footer>
    );
};

export default Footer;