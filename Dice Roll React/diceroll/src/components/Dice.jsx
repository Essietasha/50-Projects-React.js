import React from 'react'

const Dice = () => {


    function playGame () {
        const randomNumber1 = Math.floor(Math.random() * 6) + 1;
        const randomImage = "images/dice" + randomNumber1 + ".png";
        const image1 = document.querySelectorAll("img")[0];
        image1.setAttribute("src", randomImage);
    
    
        const randomNumber2 = Math.floor(Math.random() * 6) + 1;
        const randomImage2 = "images/dice" + randomNumber2 + ".png";
        const image2 = document.querySelectorAll("img")[1];
        image2.setAttribute("src", randomImage2);
    
    
    
    
        if (randomNumber1 > randomNumber2){
            document.querySelector("h1").innerHTML = "Player 1 Wins!"
        }else if (randomNumber2 > randomNumber1){
            document.querySelector("h1").innerHTML = "Player 2 Win!"
        }else{
            document.querySelector("h1").innerHTML = "Draw!!!"
        }
    
    }



  return (
    <div className="container">
    <button id="play" onClick={playGame}>PLAY</button>
    <h1>Click to play!</h1>

    <div className="dice">
      <p>Player 1</p>
      <img className="img1" src="images/dice6.png" />
    </div>

    <div className="dice">
      <p>Player 2</p>
      <img className="img2" src="images/dice6.png" />
    </div>
  </div>
  )
}

export default Dice;