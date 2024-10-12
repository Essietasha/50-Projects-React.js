import React from 'react';
import { useState, useRef } from 'react';
import ResultModal from './ResultModal';


const TimerChallenge = ( {title, targetTime} ) => {
    const [timerExpired, setTimerExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);

    const timer = useRef();
    const dialogPopUp = useRef();

    function handleStart(){
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialogPopUp.current.showModal();
        }, targetTime * 1000);

        setTimerStarted(true);
    };

    function handleStop (){
        clearTimeout(timer.current);
    };

  return (
    <>
    <ResultModal ref={dialogPopUp} targetTime={targetTime} result='lost'/>
    <section className='challenge'>
        <h2>{title}</h2>
        <p className='challenge-time'> {targetTime} second {targetTime > 1 ? 's' : ''}</p>
        <p> <button onClick={timerStarted ? handleStop : handleStart}> {timerStarted ? 'Stop' : 'Start'} Challenge</button></p>
        <p className={timerStarted ? 'active' : undefined}> {timerStarted ? 'Timer running' : 'Timer Inactive!'}</p>
    </section>
    </>
  )
}

export default TimerChallenge;