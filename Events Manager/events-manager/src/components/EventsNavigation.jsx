import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './EventsNavigation.module.css';


const EventsNavigation = () => {
  return (
    <header>
        <nav >
            <ul className={classes.list}>
                <li>
                    <NavLink to='/events' className={({ isActive }) => isActive? classes.active : classes.inActive} end>All Events</NavLink>
                </li>
                <li>
                    <NavLink to='/events/new' className={({ isActive }) => isActive? classes.active : classes.inActive}>New Events</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default EventsNavigation;