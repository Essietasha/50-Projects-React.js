import React from 'react';
import { useState, useRef } from 'react';

const Player = () => {

    const [userName, setUserName] = useState('');
    const playerName = useRef();

    function handleClick() {
        setUserName( playerName.current.value);
    }
    
  return (
    <section id="player">
        <h2>Welcome { userName ? userName : 'User'}</h2>
        <p>
          <input ref={playerName} type="text"/>
          <button onClick={handleClick}>Set Name</button>
        </p>
    </section>
  )
}

export default Player;