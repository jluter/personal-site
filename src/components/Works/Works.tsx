import React, { useState } from "react";
import "./Works.scss";
import ranchWebsiteImage from "../../assets/images/ranch-website.jpg";
import pollutionPoll from '../../assets/images/pollution-poll.jpg';
import oneTwoRight from '../../assets/images/12Right.jpg';
import factoryOneSherco from '../../assets/images/factoryonesherco.jpg';
import factoryOneMotorsports from '../../assets/images/factoryonemotorsports.jpg';
import shercoUSA from '../../assets/images/shercousa.jpg';
import shercoVault from '../../assets/images/vault-shercousa.jpg';
import sanAntonioChessClub from '../../assets/images/sanantoniochessclub.jpg';
import completeChess from '../../assets/images/completechess.jpg';
import compelteChessFoundation from '../../assets/images/completechessfoundation.jpg';

interface WorksListState {
  title: string;
  img: string;
  description: string;
  link: string;
}

const Works: React.FC = () => {

  const [worksListState, setWorksListState] = useState<WorksListState>({
    title: "",
    img: "",
    description: "",
    link: ""
  });
  const worksArray = [
    { id: 4, title: "Sherco USA", img: shercoUSA, description: "Company site for US importer of Sherco Motorcycles. Wrote custom PHP, JavaScript, HTML, and CSS. Improved site speed, SEO, and security by managing hosting, automating backups, and implementing analytics.", link:"https://shercousa.com" },
    { id: 6, title: "FactoryONE Motorsports", img: factoryOneMotorsports, description: "Off-road aftermarket ecommerce site. Increased conversion rate by 5% month over month and 20,000+ impressions by integrating with Meta and Google business & analytics platform.", link:"https://factoryonemotorsports.com" },
    { id: 5, title: "FactoryONE Sherco", img: factoryOneSherco, description: "Race team site for Sherco USA. Involved cross-collaboration with Sherco Marketing team and Progressive sponsorhsip team.", link:"https://factoryonesherco.com/" },
    { id: 7, title: "Sherco Vault", img: shercoVault, description: "Subscription based WordPress site for US Sherco Dealers resulting in $12,000+ monthly. Features site security and custom plugins via JavaScript, PHP, HTML, and CSS.", link:"https://vault.shercousa.com" },
    { id: 2, title: "Pollution Poll", img: pollutionPoll, description: "A full-stack application made to assist in climate awareness. Created in React and Node.js, utilizing Axios for HTTP requests, and consuming the Climatiq REST API.", link:"https://github.com/jluter/pollution-poll" },
    { id: 3, title: "12Right", img: oneTwoRight, description: "Custom WordPress site made in under 24 hours for a hangar at San Antonio International Airport. Assisted in the $15 million sale of the hangar by contracting company.", link:"https://12right.com" },
    { id: 8, title: "San Antonio Chess Club", img: sanAntonioChessClub, description: "Local chess club site for San Antonio. Contracted to automate events and registration.", link:"https://sanantoniochessclub.com" },
    { id: 9, title: "Complete Chess", img: completeChess, description: "Afterschool chess program based. Contracted to assist with site maintenance, event registration, and automating email marketing.", link:"https://completechesseducation.com" },
    { id: 10, title: "Complete Chess Foundation", img: compelteChessFoundation, description: "Non-profit organization supporting San Antonio youths through chess. Contracted for site maintenance and stability, event registration, and automating digital marketing.", link:"https://completechessfoundation.org" },
  ];

  const handleWorksTitleClick = (aSingleWork: WorksListState) => {
    setWorksListState({
      title: aSingleWork.title,
      img: aSingleWork.img,
      description: aSingleWork.description,
      link: aSingleWork.link
    });
  };


  return (
    <>
    <div className="works-container">
      <ul className="works-list">
        {worksArray.map((work) => (
          <li
            key={work.id}
            onClick={() => {
              handleWorksTitleClick(work);
            }}
            className="works-list__item"
          >
            <p key={`title_${work.id}`} className="works-list__item--text">{work.title}</p>
          </li>
        ))}
      </ul>
    </div>
      {worksListState.title && (
        <div className="works-article-container">
        <article className="works-article">
            <h4 className="works-article__title">{worksListState.title}</h4>
            <a className="works-article__link" target="_blank" rel="noopener noreferrer" href={worksListState.link}><img className="works-article__img" src={worksListState.img}/></a>
            <div className="works-article__description-wrapper">
            <div className="works-article__description">{worksListState.description}</div>
            </div>
        </article>
        </div>
      )}
    </>
  );
};

export default Works;
