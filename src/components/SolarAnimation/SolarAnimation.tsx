import React from 'react';
import './SolarAnimation.scss';

const SolarAnimation: React.FC = () => {
    return (
        <div className='solar-container'>
            <div className='orbit'>
                <div className='orbit'>
                    <div className='orbit'>
                        <div className='orbit sun'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolarAnimation;