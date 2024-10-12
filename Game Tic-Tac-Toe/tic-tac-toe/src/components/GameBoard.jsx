import React from 'react';
import { useState } from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const GameBoard = ({ onSelectBox, activePlayerSymbol }) => {
    
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleGameClick(eachRowIndex, colIndex){
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map((updatedPreArray => [...updatedPreArray]))];
            updatedBoard[eachRowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        });

        onSelectBox();
    }

  return (
        <ol id='game-board'>
            {gameBoard.map((eachRow, eachRowIndex) =>
                (<li key={eachRowIndex}>
                    <ol>
                        {eachRow.map((playerSymbol, colIndex) => 
                            <li key={colIndex}>
                                <button onClick={() => handleGameClick(eachRowIndex, colIndex)}>{playerSymbol}</button>
                            </li>)
                        }
                    </ol>
                </li>))
            }
        </ol>
  )
}

export default GameBoard;