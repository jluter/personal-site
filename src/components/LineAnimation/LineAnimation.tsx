import React from 'react';
import './LineAnimation.scss';

const LineAnimation: React.FC = () => {
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
              fill="rgba(242,193,78,.5)"
              x="50"
              xlinkHref="#gentle-wave"
              y="0"
            />
            <use
              fill="rgba(242,193,78,.7)"
              x="50"
              xlinkHref="#gentle-wave"
              y="3"
            />
            <use fill="#344E41" x="50" xlinkHref="#gentle-wave" y="6" />
          </g>
        </svg>
      </div>
    );
}

export default LineAnimation;