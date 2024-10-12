import React from 'react'
import PageContent from './PageContent';
import classes from './Home.module.css'
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <PageContent title="">
      <div className={classes.flexDiv} >
        <div className={classes.textElDiv} >
          <h1>Manage your events, <br/> keep a record <br/>and <span className={classes.track}> track </span></h1>
          <button>
            <NavLink to='/events/new'  className={classes.create}>Click to create an event.</NavLink>  
          </button>
          <p className={classes.ems} ><span className={classes.emsB}>Events Management System</span> - your all-in-one solution for seamless event management!</p>
        </div>
        <div className={classes.imgDiv} >
          <img src='images/ems-homepage-icon.jpg'className={classes.image} />
        </div>
      </div>
    </PageContent>
  )
}

export default HomePage;
