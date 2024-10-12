import React from 'react';
import classes from './EventItem.module.css';
import { Link, useSubmit } from 'react-router-dom';

const EventItem = ({ event }) => {
  const submit = useSubmit();

    function startDeleteHandler(){
      const proceed = window.confirm('Are you sure?');

      if(proceed) {
        submit(null, {method: 'delete'});
      }
    };

  return (
    
    <article className={classes.container}>
        <img src={event.image} alt={event.title} />
        <h1>{event.title}</h1>
        <time>{event.date}</time>
        <p>{event.description}</p>
        <p>{event.place}</p>
        
        <menu className={classes.flex}>
            <Link to='edit' className={classes.edit}>Edit</Link>
            <button onClick={startDeleteHandler}>Delete</button>
        </menu>
    </article>
  )
}

export default EventItem;