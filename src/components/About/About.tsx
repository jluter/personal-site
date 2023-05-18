import React from "react";
import "./About.scss";
import resume from '../../assets/images/resume.pdf';

interface Props {
    handleHeaderListClick: (x: number, y: number, z: number, name: string) => void;
}

let x = Math.min(1.5, (window.innerWidth/window.innerHeight)*2);

const About: React.FC<Props> = ({handleHeaderListClick}) => {
  return (
    <div className="about">
      <p className="about__paragraph">Thank you for visiting. I'm a full stack developer interested in learning,
      collaborating, and exploring new opportunities.</p><p className="about__paragraph">Outside of tech, I feel passionate about the environment, music, and tabletop gaming. Feel free to <span className="about__contact-me" onClick={() => {
        handleHeaderListClick(x, -1, 2.5, 'contact')
      }}>contact me</span> for any personal or professional inquiries. </p>
      <p className="about__paragraph">Please take a look at my <a className="about__link" href={resume} target="_blank" rel="noreferrer noopener">resume</a>, or my <a className="about__link" href="https://stackshare.io/jluter/my-stack" target="_blank" rel="noreferrer noopener">tech stack</a>.</p> 
    </div>
  );
};

export default About;
