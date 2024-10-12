import React from 'react';
import './App.css';
import Header from './components/Header';
import Inputs from './components/Inputs';
import Result from './components/Result';
import { useState } from 'react';

const App = () => {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10

});

function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
        return{
            ...prevUserInput,
            [inputIdentifier]: +newValue
        };
    });
}

  const  inputIsValid = userInput.duration >= 1;


  return (
    <>
    <Header />
    <Inputs userInputStateObject={userInput} onChangeInput={handleChange}/>
    {!inputIsValid && <p className='center'>Please enter a duration greater than zero.</p>}
    {inputIsValid && <Result userInputStObject={userInput} />}
    </>
  )
}

export default App;
