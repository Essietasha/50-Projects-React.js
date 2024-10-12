import React from 'react';
import { Link } from 'react-router-dom';
import classes from './EventsNavigation.module.css';

const EventsList = ({ events }) => {
    
  return (
    <div className={classes.container}>
        <h2>All Events</h2>
        <ul>
            {events.map((event) => (
                <li key={event.id}>
                    <Link to={event.id}>
                    <div className={classes.grid}>
                        <div className={classes.imgCont}>
                        <img src={event.image} alt={event.title} />
                        </div>
                        <div className={classes.eventsInfo}>
                            <h3>{event.title}</h3>
                            <h4>{event.description}</h4>
                            <p className={classes.location}>Location: {event.place}</p>
                            <time className={classes.date}>Date: {event.date}</time>
                        </div>
                    </div>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  );
}

export default EventsList;



     
  