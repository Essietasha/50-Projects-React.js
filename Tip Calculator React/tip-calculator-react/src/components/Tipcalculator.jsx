import React from 'react'

const Tipcalculator = () => {

    // const calculateBtn = document.getElementById('calculate');

    function calculateTip () {
        const billInput = document.getElementById('bil').value;
        const tipPercent = document.getElementById('tp').value;
        const tipAmount = document.querySelector('.tpamount');
        const total = document.querySelector('.total');
    
        const tipCalc = billInput * tipPercent / 100;
    
        const tipResult = billInput * (1 + tipPercent / 100 );
        total.innerHTML = Math.round(tipResult);
        tipAmount.innerHTML = `TIP AMOUNT: ${tipCalc}`;
        console.log(tipCalc);
    }   
    // calculateBtn.addEventListener('click', calculateTip);

  return (
    <div className="container">
        <div className="innCont">
            <div className="tipC"><h1>TIP CALCULATOR</h1></div>
            
            <div className="cal">
                <label htmlFor="bil"> BILL AMOUNT <br /> <input type="number" name="bill" id="bil" /> </label>
                <label htmlFor="tp"> TIP PERCENTAGE <br /> <input type="number" name="tip" id="tp" /> </label>
                <div className="tpamount"> <h5> TIP AMOUNT: </h5></div> 
                
            </div>
            <div className="calcDiv">
                <button id="calculate" onClick={calculateTip}>CALCULATE</button>
            </div>
            
            <div id="total">Total: <p  className="total"></p></div> 
        </div>
    </div>
  )
}

export default Tipcalculator;