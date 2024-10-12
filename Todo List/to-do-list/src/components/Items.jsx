import React from 'react';

const Items = ({itemNote, itemBtn}) => {
  return (
    <div className='newEl'> 
        {itemNote} 
        <span>{itemBtn}</span>
    </div>
  )
}

export default Items;
