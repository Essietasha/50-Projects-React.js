import React, { useState, useRef, useEffect } from 'react';

const Lists = () => {
    
    const [getNote, setGetNote] = useState('');
    const [items, setItems] = useState([]);
    const divRef = useRef(null);

    useEffect(() => {
        const getItemsArray = JSON.parse(localStorage.getItem('itemsarray')) || [];
        setItems(getItemsArray);
    }, []);

    function handleChange(event) {
        setGetNote(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (getNote.trim() !== '') {
            const updatedItems = [...items, getNote];
            setItems(updatedItems);
            setGetNote(''); 
            localStorage.setItem('itemsarray', JSON.stringify(updatedItems));
        }
    }

    function saveItem() {
        const itemsArray = Array.from(divRef.current.querySelectorAll('p'))
            .map(itemArray => itemArray.textContent);
        localStorage.setItem('itemsarray', JSON.stringify(itemsArray));
    }

    function handleDelete(index) {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
        localStorage.setItem('itemsarray', JSON.stringify(updatedItems));
    }

    return (
        <div className="container">
            <h2>To-Do List</h2>
            <div className="formDiv">
                <form id="tasksForm" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Enter task" 
                        value={getNote} 
                        onChange={handleChange}
                    />
                    <button type="submit">Add Item</button>
                </form>
                <div ref={divRef} >
                    {items.map((item, index) => (
                        <div key={index} className="newEl">
                            <p>{item}</p>
                            <span><button className="delete" onClick={() => handleDelete(index)}>Delete</button></span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Lists;