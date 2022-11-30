import React from 'react';
import './DesktopDescription.scss';

const DesktopDescription: React.FC = () => {

    const windowWidth: number = window.innerWidth;

    return (
      <div className="desktop-description">
        <p className='desktop-description__paragraph'>Thank you for visiting my site! My name is <i className='bold'>Jakob Luter</i>, a Full-Stack Developer currently residing in San Antonio, Texas. After several years working with people with disablities, two of those years being as a social services professional, I decided to shift careers to the tech industry. I have since graduated from a software development boot camp via BrainStation. Currently, I am taking on contract work for web development and looking for my first full-time, professional experience as a developer. I strongly believe I would be an excellent long-term investment and am open to relocation. My primary skills are devloping in <i className='bold'>React</i> using <i className='bold'>TypeScript</i>, <i className='bold'>SCSS</i>, and <i className='bold'>Node</i>. If needed, I'm even experienced with SaaS applications such as <i className='bold'>WordPress</i>, <i className='bold'>WebFlow</i>, and other platforms! I also have practice with DBMS through MySQL, and building or consuming REST API's. As a life-long learner I am always willing to add new skills in order to put forward the best product possible. Please reach out to me for any business inquiries via my contact information on this website.</p>
      </div>
    );
}

export default DesktopDescription;