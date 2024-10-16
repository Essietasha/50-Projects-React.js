import React from 'react';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import { useState } from 'react';


const App = () => {

  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);
  
  function handleSelectBox() {
    setActivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' : 'X');
  }

  return (
    <>
    <Header />
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'} />
          <Player initialName='Player 2' symbol='O' isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectBox={handleSelectBox} activePlayerSymbol={activePlayer} />
      </div>
    </main>
    </>
  )
}

export default App;
