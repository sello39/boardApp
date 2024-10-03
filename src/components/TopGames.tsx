import React from 'react';
import "../styles/HomePage.css"; 
import "../styles/TopGames.css";

import img1 from "../assets/images/TopGamer1.png";
import img2 from "../assets/images/TopGamer2.png";
import img3 from "../assets/images/TopGamer3.png";
import img4 from "../assets/images/TopGamer4.png";
import img5 from "../assets/images/TopGamer5.png";
import img6 from "../assets/images/TopGamer6.png";


const TopGames: React.FC = () => {
    return (
        <div className="gamez">
          <h1>WELCOME TO THE TOP <span>GAMES</span></h1>
          <div className="banner">
            <div className='button-container'>
            <div className="big-button" data="NewestGames"></div>
            <div className="big-button" data="Latest Games"></div>
            <div className="big-button" data="Fight Games"></div>
            <div className="big-button" data="Sport Games"></div>
            </div>
          </div>
          <div className="game-grid">
            {gameData.map((game, index) => (
              <div className="game-item" key={index}>
                <img src={game.imgUrl} alt="Game Image" />
                <p>{game.title}</p>
                <p>{game.author}</p>
                <button className="big-button" data="Live Demo"></button>
              </div>
            ))}
          </div>
        </div>
    );
};

const gameData = [
  { title: 'Core Philosophies', author: 'Catherine Williams', imgUrl: img1 },
  { title: 'Core Philosophies', author: 'Dustin Russell', imgUrl: img2 },
  { title: 'Core Philosophies', author: 'Cody Fisher', imgUrl: img3 },
  { title: 'Core Philosophies', author: 'Wade Warren', imgUrl: img4 },
  { title: 'Core Philosophies', author: 'James Cooper', imgUrl: img5 },
  { title: 'Core Philosophies', author: 'Jane Doe', imgUrl: img6 },
];

export default TopGames;