import React from 'react';
import { useState } from 'react';

const Converter = () => {
    const [weightValue, setWeightValue] = useState('');
    const errorText = weightValue <= 0 || isNaN(weightValue);

    function handleInputChange(event){
        setWeightValue(event.target.value);
    }

    const weightInKilogram = (weightValue / 2.205).toFixed(2) + 'kg';
    const weightInGrams = (weightValue / 453.592).toFixed(2) + 'g';
    const weightInOunces = (weightValue / 16).toFixed(2) + 'oz';
    const weightInPounds = weightValue + 'lbs';

  return (
    <div className="container">
            <h1>Weight Converter</h1>
            {errorText && <p className={weightInPounds ? 'errorMessage' : undefined}>Input a valid number</p>}
            <div className="flex">
                <p className="pounds">Pounds:</p>
                <input type="number" placeholder="Enter number" value={weightValue} onChange={handleInputChange}/>
                <button id="calculate"> Go </button>
            </div>
            <div className="result">
                <h2 className="resultInKg">Your weight in kg is: {weightInKilogram} </h2>
                <h2></h2>
            </div>


            <div className="allResults">
                <h2>Result</h2>
                <div className="resultsFlex">
                    <div >In Grams: {weightInGrams} </div>
                    <div></div> 
                </div>         
                <div className="resultsFlex">
                    <div>In Kilograms: {weightInKilogram} </div>
                    <div></div> 
                </div>         
                <div className="resultsFlex">
                    <div>In Pounds: {weightInPounds}</div>
                    <div></div> 
                </div>         
                <div className="resultsFlex">
                    <div>In Ounces:{weightInOunces} </div>
                    <div></div> 
                </div>         
            </div>

            <button id="reset">Reset</button>
    </div>  )
}

export default Converter;