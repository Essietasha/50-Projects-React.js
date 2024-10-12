import React from 'react';
import { useState } from 'react';

const NewTask = ({ onadd }) => {

    const [enteredTask, setEnteredTask]= useState('');
    
    function handleChange(event){
        setEnteredTask(event.target.value);
    };

    function handleClick(){
        if(enteredTask.trim() === ''){
            return;
        }
        onadd(enteredTask);
        setEnteredTask('');
    };

  return (
    <div className='flex item-center gap-4'>
        <input onChange={handleChange} 
            value={enteredTask} type='text' 
            className='w-64 px-2 py-1 rounded-sm bg-stone-200'/>
        
        <button onClick={handleClick} 
            className='text-stone-700 hover:bg-stone-950 hover:p-1 hover:text-stone-200'>
                Add Task
        </button>
    </div>
  )
}

export default NewTask;