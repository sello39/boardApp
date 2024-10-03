import React from 'react';
import "../styles/DiscoverGame.css";
import "../styles/HomePage.css";

const DiscoverGame: React.FC = () => {
    return (
      <div className='discover-game-container'>
        <div className="row">
          <div className="wrapper">
            <div className="image-container">
              {/* The image will be displayed here */}
            </div>
          </div>
          <div className="column right-call-to-action">
            <h1>
              DISCOVER THE <span className="highlight">VIRTUAL</span> REALITY GAMING
            </h1>
            <p>
              A well-designed gaming header often incorporates elements such as game characters, iconic symbols, vibrant colors, and dynamic visuals to convey excitement, adventure, and the immersive nature of gaming.
            </p>
            <button className="big-button" data="PLAY NOW"></button>
          </div>
        </div>
      </div>
    );
};

export default DiscoverGame;
