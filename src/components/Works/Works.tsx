import React from 'react';
import './Works.scss';
// import { SiGithub, SiLinkedin } from 'react-icons/si';




const Works: React.FC = () => {

    //List of works to be added. 
    // pollutionpoll
    // ranch-website
    // shercousa
    // factoryonesherco
    // factoryonemotorsports
    // vault.shercousa
    // sanantoniochessclub
    // completechess
    // completechessfoundation



    return(
        <div className='works-container'>
            <div className='works-list'>
                <div className='works-list__item'>Work1</div>
                <div className='works-list__item'>Work2</div>
                <div className='works-list__item'>Work3</div>
                <div className='works-list__item'>Work4</div>
                <div className='works-list__item'>Work5</div>
                <div className='works-list__item'>Work6</div>
                <div className='works-list__item'>Work7</div>
            </div>
        </div>
    );
};

export default Works;