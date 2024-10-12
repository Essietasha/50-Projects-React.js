import React from 'react';

const Inputs = ({ onChangeInput, userInputStateObject }) => {


  return (
    <section id='user-input'>      
         
      <div className='input-group'>
            <label htmlFor="initialInvestment">Initial Investment 
                <input type="number" id='initialInvestment' required
                value={userInputStateObject.initialInvestment} 
                onChange={(event) => onChangeInput('initialInvestment', event.target.value)}/>
            </label>
            <label htmlFor="annualInvestment">Annual Investment 
                <input type="number" id='annualInvestment' required 
                value={userInputStateObject.annualInvestment} 
                onChange={(event) => onChangeInput('annualInvestment', event.target.value)}/>
            </label>
      </div>

      <div className='input-group'>
            <label htmlFor="expectedReturn">Expected Return 
                <input type="number" id='expectedReturn' required 
                value={userInputStateObject.expectedReturn} 
                onChange={(event) => onChangeInput('expectedReturn', event.target.value)}/>
            </label>
            <label htmlFor="duration">Duration 
                <input type="number" id='duration' required 
                value={userInputStateObject.duration} 
                onChange={(event) => onChangeInput('duration', event.target.value)}/>
            </label>
      </div>
  </section>
  )
}

export default Inputs;