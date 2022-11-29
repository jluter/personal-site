import React from 'react';
import './Footer.scss';
import LineAnimation from '../LineAnimation/LineAnimation';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';


const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <nav className='footer__nav'>
                <div className='footer__nav-item'>
                    <FaPhoneAlt size='1rem' /><p className='footer__nav-item--info'>: (936) 346-9878</p>
                </div>
                <div className='footer__line-animation'>
                <LineAnimation />

                </div>
                <div className='footer__nav-item'>
                    <HiMail size='1.5rem'/><p className='footer__nav-item--info'>: jakobluter20@gmail.com</p>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;