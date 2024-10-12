import React from 'react'

const AgeCalculator = () => {

let days;
let month;

const calcAge = () => {
    const input = document.getElementById('userInput');
    const result = document.querySelector('.result');
    const inputValue = input.value;
    if (inputValue === ""){
        alert('Please select your date of birth')
    }else{
        const age = fetchage(inputValue);
        result.innerHTML = `You are ${age} years, ${month} months and ${days}days  old`;
    }

}
    const fetchage = (inputValue) => {
        const currDate = new Date();
        const userbirthday = new Date(inputValue);

        let age = currDate.getFullYear() - userbirthday.getFullYear();
        month = currDate.getMonth() - userbirthday.getMonth();
        days = currDate.getDate() - userbirthday.getDate();

        if (
            month < 0 ||
            (month === 0 && currDate.getDate() < userbirthday.getDate())
          ) {
            age--;
          }
        console.log(age, month, days);

        return age;
    }


  return (
    <div className="container">
    <div className="jac">
        <div className="flexB">
            <div className="hr"> <hr /> </div>
            <div className="text"> <h1>Javascript <br /> <span className="ageCalcTxt">Age Calculator</span> </h1> </div>
        </div>
        <div className="calendar">
            <input type="date" id="userInput" />
            <div> <button className="calculate" id="calcBtn" onClick={calcAge}>Calculate</button> </div>
        </div>
        <p className="result"></p>
    </div>
</div>
  )
}

export default AgeCalculator;