import React from "react";
import "./Contact.scss";
import resume from '../../assets/images/resume.pdf';

interface Props {
    handleHeaderListClick: (x: number, y: number, z: number, name: string) => void;
}

let x = Math.min(1.5, (window.innerWidth/window.innerHeight)*2);

const Contact: React.FC<Props> = ({handleHeaderListClick}) => {
  return (
    <div className="contact">
        
    </div>
  );
};

export default Contact;
