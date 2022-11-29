import React from 'react';
import './LineAnimation.scss';

const LineAnimation: React.FC = () => {

    function getRandomCoordinates(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }


    return (
      <div id="footer-navmenu">
        <svg
          className="wave-animation"
          preserveAspectRatio="none"
          viewBox="0 24 150 28"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <path
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              id="gentle-wave"
            />
          </defs>
          <g className="wave-bg">
            <use
              x='50'
              xlinkHref="#gentle-wave"
              y={getRandomCoordinates(-2, 0)}
            />
            <use
              x='50'
              xlinkHref="#gentle-wave"
              y={getRandomCoordinates(0.5, 1.5)}
            />
            <use x='50' xlinkHref="#gentle-wave" y={getRandomCoordinates(1.6, 2.99)} />
          </g>
        </svg>
      </div>
    );
}

export default LineAnimation;