import React, { useState } from 'react';
import './Works.scss';
// import { SiGithub, SiLinkedin } from 'react-icons/si';




const Works: React.FC = () => {

    const [workPosition, setWorkPosition] = useState<number>(0);

    const handleWorkListScroll = (event: React.UIEvent<HTMLDivElement>) => {
        let scrollTop = event.currentTarget.scrollTop;
        console.log(scrollTop);
        setWorkPosition(scrollTop + 100);
    }

    return(
        <div className='works-container'>
            <div className='works-list'>
                <div className='works-list__item' onScroll={(event) => handleWorkListScroll(event)} style={{color: `rgba(0,0,0,${workPosition})`}}>Work1</div>
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