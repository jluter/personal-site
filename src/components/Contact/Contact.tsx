import React from "react";
import "./Contact.scss";
import resume from '../../assets/images/resume.pdf';
import { FaGithub, FaLinkedin, FaAt, FaFilePdf } from 'react-icons/fa';
import { IconContext } from "react-icons";
interface Props {
    handleHeaderListClick: (x: number, y: number, z: number, name: string) => void;
}

let x = Math.min(1.5, (window.innerWidth/window.innerHeight)*2);

// const iconSize = '2rem';
// console.log(window.innerWidth);


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
          <div>
            <FaGithub />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/jakob-luter/"
          className="contact__link"
          target="_blank"
          rel="norefferer noopener"
        >
          <div>
            <FaLinkedin />
          </div>
        </a>
        <a
          href="mailto:jakobluter20@gmail.com"
          className="contact__link"
          target="_blank"
          rel="norefferer noopener"
        >
          <div>
            <FaAt />
          </div>
        </a>
        <a
          href={resume}
          className="contact__link"
          target="_blank"
          rel="norefferer noopener"
        >
          <div>
            <FaFilePdf />
          </div>
        </a>
      </div>
    </IconContext.Provider>
  );
};

export default Contact;
