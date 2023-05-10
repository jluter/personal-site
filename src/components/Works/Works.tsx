import React, { useState } from "react";
import "./Works.scss";
import ranchWebsiteImage from "../../assets/images/ranch-website.jpg";
// import { SiGithub, SiLinkedin } from 'react-icons/si';

interface WorksListState {
  title: string;
  img: string;
  description: string;
}

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

  const [worksListState, setWorksListState] = useState<WorksListState>({
    title: "",
    img: "",
    description: "",
  });
  const worksArray = [
    {
      title: "Ranch Website",
      img: ranchWebsiteImage,
      description:
        "A mockup site for a local farm/ranch. Features custom styling and WordPress theme building.",
    },
    { title: "Pollution Poll", img: ranchWebsiteImage, description: "" },
    { title: "12Right", img: ranchWebsiteImage, description: "" },
    { title: "Sherco USA", img: ranchWebsiteImage, description: "" },
    { title: "FactoryONE Sherco", img: ranchWebsiteImage, description: "" },
    { title: "FactoryONE Motorsports", img: ranchWebsiteImage, description: "" },
    { title: "Sherco Vault", img: ranchWebsiteImage, description: "" },
    { title: "San Antonio Chess Club", img: ranchWebsiteImage, description: "" },
    { title: "Complete Chess", img: ranchWebsiteImage, description: "" },
    { title: "Complete Chess Foundation", img: ranchWebsiteImage, description: "" },
  ];

  const handleWorksTitleClick = (aSingleWork: WorksListState) => {
    setWorksListState({
      title: aSingleWork.title,
      img: aSingleWork.img,
      description: aSingleWork.description,
    });
  };

  return (
    <div className="works-container">
      <ul className="works-list">
        {worksArray.map((work) => (
          <li
            onClick={() => {
              handleWorksTitleClick(work);
            }}
            className="works-list__item"
          >
            <p className="works-list__item--text">{work.title}</p>
          </li>
        ))}
      </ul>
      {worksListState && (
        <article>
          <div>
            <p>{worksListState.title}</p>
            <img className="test2" src={worksListState.img}/>
          </div>
        </article>
      )}
    </div>
  );
};

export default Works;
