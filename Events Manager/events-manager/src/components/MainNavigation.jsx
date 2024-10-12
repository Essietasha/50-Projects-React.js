import React from 'react';
import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';
import NewsletterSignup from './NewsletterSignup';

const activeClass = ({ isActive }) => isActive ? classes.active : undefined;

const MainNavigation = () => {
  return (
    <header>
        <div className={classes.flex}>
            <nav>
                <ul className={classes.list}>
                <li className={classes.ems} >EMS</li>
                    <li>
                        <NavLink to="/" className={activeClass} end>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to="/events" className={activeClass}>EVENTS</NavLink>
                    </li>
                    <li>
                        <NavLink to="/newsletter" className={activeClass}> NEWSLETTER </NavLink>
                    </li>

                </ul>
            </nav>
            <NewsletterSignup />
        </div>
    </header>
  )
}

export default MainNavigation;