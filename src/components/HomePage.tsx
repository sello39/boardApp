import React from 'react';
import "../styles/HomePage.css"; 

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <div className="text-section">
        <h1 className="big-title">Let your mind explore new world</h1>
        <p className="small-paragraph">
        Playing electronic games, whether through consoles, computers, mobile phones or another medium altogether.
        Gaming is a nuanced term that suggests regular gameplay, possibly as a hobby.
        </p>
        <div className="button-container">
          <button className="big-button" data="BUY NOW"></button>
          <button className="big-button" data="PLAY NOW"></button>
        </div>
      </div>
      <div className="image-section">
        <div className="image-background"></div>
      </div>
    </div>
  );
};

export default HomePage;
