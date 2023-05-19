import React from "react";
import "./Contact.scss";
import resume from '../../assets/images/resume.pdf';
import { FaGithub, FaLinkedin, FaAt, FaFilePdf } from 'react-icons/fa';
import { IconContext } from "react-icons";
interface Props {
    handleHeaderListClick: (x: number, y: number, z: number, name: string) => void;
}

let x = Math.min(1.5, (window.innerWidth/window.innerHeight)*2);


const Contact: React.FC<Props> = ({handleHeaderListClick}) => {
  return (
    <IconContext.Provider value={{ className: "react-icons", size: `${x}rem` }}>
      <div className="contact">
        <a
          href="https://github.com/jluter"
          className="contact__link"
          target="_blank"
          rel="norefferer noopener"
        >
            <div className="contact__text">github.com/jluter</div>
            <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jakob-luter/"
          className="contact__link"
          target="_blank"
          rel="norefferer noopener"
        >
            <div className="contact__text">linked.com/in/jakob-luter</div>
            <FaLinkedin />
        </a>
        <a
          href="mailto:jakobluter20@gmail.com"
          className="contact__link"
          target="_blank"
          rel="norefferer noopener"
        >
            <div className="contact__text">jakobluter20@gmail.com</div>
            <FaAt />
        </a>
        <a
          href={resume}
          className="contact__link"
          target="_blank"
          rel="norefferer noopener"
        >
            <div className="contact__text">resume</div>
            <FaFilePdf />
        </a>
      </div>
    </IconContext.Provider>
  );
};

export default Contact;
