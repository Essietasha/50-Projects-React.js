import React from 'react';
import classes from './Watching.module.css';
import { useNavigate } from 'react-router-dom';

const Watching = () => {
    
    const navigate = useNavigate();


    function handleHomePage(){
        console.log('first')
        navigate('/home');
    }
  return (
    <>
    <div className={classes.watch}>
        <h1>Who's watching?</h1>
        <div className={classes.flex}>
            <div>
                <p onClick={handleHomePage}>User 1</p>
            </div>
            <div>
                <p onClick={handleHomePage}>User 2</p>
            </div>
            <div>
                <p onClick={handleHomePage}>User 3</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Watching;