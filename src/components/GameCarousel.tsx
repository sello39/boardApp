import React from 'react';
import '../styles/GameCarousel.css'; // Create your CSS file for styles
 
const GameCarousel = () => {
  return (
<section className="favorite-games-section">
      <div className="header">
        <h1>CHOOSE YOUR <br /><span>FAVORITE</span> GAMES</h1>
        <p>
          Offer sneak peeks and previews of upcoming games, including <br /> trailers, screenshots,
          and information about release.
        </p>
      </div>

      <div className="games-preview">
        <div className="game-card left">
          <img src="/left-game-card.png" alt="Game Preview Left" />
        </div>
        <div className="game-card combined">
        <img src="/logobadge.png" alt="Game Logo" className="game-logo" />
        <img src="/middle-game-card.png" alt="Combined Game Preview" className="combined-image" />
         <div className="sneak-peaks">SNEAK PEAKS</div>
        </div>
        <div className="game-card right">
          <img src="/right-game-card.png" alt="Game Preview Right" />
        </div>
      </div>

      <div className="buttons">
      <button className="big-button" data="VIEW ALL"></button>
      <button className="big-button" data="PLAY NOW"></button>
      </div>
    </section>

  );
};
 
export default GameCarousel;
 
