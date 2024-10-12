import React from 'react';
import { useState } from 'react';
import { evaluate } from 'mathjs';

const Calculator = () => {
    const [inputValue, setInputValue] = useState('');

    function affixNumber(value){
        setInputValue(inputValue + value);
    }

    function calculateResult(){
        try{
            setInputValue(evaluate(inputValue).toString());
        }catch(error){
            setInputValue('Error!');
        }
    }

    function clearAll(){
        setInputValue('');
    };


  return (
    <section>
        <div id='container'>
            <div className="calcHeader">
                <p>calc</p>
            </div>
            <div className="results">
                <input className='result' type='text' disabled  value={inputValue} />
            </div>
            <div className='allBtns'>
                <button className='buttons' onClick={() => affixNumber('7')}>7</button>
                <button className='buttons' onClick={() => affixNumber('8')}>8</button>
                <button className='buttons' onClick={() => affixNumber('9')}>9</button>
                <button className='buttons' onClick={() => affixNumber('4')}>4</button>
                <button className='buttons' onClick={() => affixNumber('5')}>5</button>
                <button className='buttons' onClick={() => affixNumber('6')}>6</button>
                <button className='buttons' onClick={() => affixNumber('1')}>1</button>
                <button className='buttons' onClick={() => affixNumber('2')}>2</button>
                <button className='buttons' onClick={() => affixNumber('3')}>3</button>
                <button className='buttons' onClick={() => affixNumber('+')}>+</button>
                <button className='buttons' onClick={() => affixNumber('-')}>-</button>
                <button className='buttons' onClick={() => affixNumber('.')}>.</button>
                <button className='buttons' onClick={() => affixNumber('0')}>0</button>
                <button className='buttons' onClick={() => affixNumber('/')}>/</button>
                <button className='buttons' onClick={() => affixNumber('*')}>*</button>
            </div>
            <div className='resetAndEqualto'>
                <button className='buttons' id='del' onClick={clearAll}>C</button>
                <button className='buttons' id='cal' onClick={calculateResult}>=</button>
            </div>
        </div>
    </section>
  )
}

export default Calculator;