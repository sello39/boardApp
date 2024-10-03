import React from 'react';
import Navbar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import GameCarousel from "./components/GameCarousel"
import DiscoverGame from "./components/DiscoverGame"
import TopGames from "./components/TopGames"
import './App.css'

function App() {

  return (
     <>
      <Navbar />
      <HomePage />
      <GameCarousel />
      <DiscoverGame />
      <TopGames />
      <Footer /> 
      </>
  )
}

export default App
