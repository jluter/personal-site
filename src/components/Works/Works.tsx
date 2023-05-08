import React, { useState } from 'react';
import './Works.scss';
import ranchWebsiteImage from '../../assets/images/ranch-website.jpg';
// import { SiGithub, SiLinkedin } from 'react-icons/si';




const Works: React.FC = () => {
    
    //List of works to be added.
  // ranch-website
  // pollutionpoll
  // 12right.com
  // shercousa
  // factoryonesherco
  // factoryonemotorsports
  // vault.shercousa
  // sanantoniochessclub
  // completechess
  // completechessfoundation
  
  const [worksListState, setWorksListState] = useState("");
  const worksArray = [
    {
      title: "Ranch Website",
      img: ranchWebsiteImage,
      description:
        "A mockup site for a local farm/ranch. Features custom styling and WordPress theme building.",
    },
    {title: 'Pollution Poll'},
    {title: '12Right'},
    {title: 'Sherco USA'},
    {title: 'FactoryONE Sherco'},
    {title: 'FactoryONE Motorsports'},
    {title: 'Sherco Vault'},
    {title: 'San Antonio Chess Club'},
    {title: 'Complete Chess'},
    {title: 'Complete Chess Foundation'},
  ];

  const handleWorksTitleClick = (title: string) => {
    setWorksListState(title);
  }

  return (
    <div className="works-container">
      <ul className="works-list">
        {worksArray.map((work) => (
            <li onClick={() => {handleWorksTitleClick(work.title)}} className='works-list__item'>{work.title}</li>
        ))}
      </ul>
      {worksListState && 
      <article>
        <div>
            <p>{worksListState}</p>
        </div>
      </article>
      }
    </div>
  );
};

export default Works;