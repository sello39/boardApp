import React from "react";
import "../styles/HomePage.css";

const statsData = [
  { value: "300+", label: "Unique Style" },
  { value: "200+", label: "Project Finished" },
  { value: "500+", label: "Happy Customer" },
];

const rectangleFrameTitles = [
  { words: "COLLECTION OG GAMING SPANING" },
  { words: "ACTION - PACKED" },
  { words: "MIND - BENDING" },
];

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
     <div className="image-background" />
      <div className="text-section">
        <h1 className="big-title">
          LET YOUR <br></br> MIND <span className="gradient-text">EXPLORE</span> NEW
          WORLD
        </h1>
        <p className="small-paragraph">
          Playing electronic games, whether through consoles, computers, mobile
          phones or another medium altogether. Gaming is a nuanced term that
          suggests regular gameplay, possibly as a hobby.
        </p>
        <div className="button-container">
          <button className="big-button" data="BUY NOW"></button>
          <button className="big-button" data="PLAY NOW"></button>
        </div>

        <div className="Dashcounter">
          <div className="u-repeater u-repeater-1">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="u-align-center u-container-style u-list-item u-repeater-item"
              >
                <div className="u-container-layout u-similar-container u-valign-top">
                  <h3 className="Dashcounternumber">
                    {stat.label === "Project Finished" ? (
                      <span className="gradient-text">{stat.value}</span>
                    ) : (
                      stat.value
                    )}
                  </h3>
                  <h6 className="Dashcounterlabel">{stat.label}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="Rectangleframe">
          <div className="scroll-container">
            {/* First set of titles */}
            {rectangleFrameTitles.map((title, index) => (
              <div key={index} className="frame-title">
                <img src="/Star.png" alt="Star" className="star-icon" />
                <span className="rectangle-text">{title.words}</span>
              </div>
            ))}
            {/* Duplicate set of titles for seamless scrolling */}
            {rectangleFrameTitles.map((title, index) => (
              <div
                key={index + rectangleFrameTitles.length}
                className="frame-title"
              >
                <img src="/Star.png" alt="Star" className="star-icon" />
                <span className="rectangle-text">{title.words}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
