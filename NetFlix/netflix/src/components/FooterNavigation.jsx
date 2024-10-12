import React from 'react';
import classes from './MainNavigation.module.css';
import { Link } from 'react-router-dom';

const FooterNavigation = () => {

  return (
    <div className={classes.footer} >
        <div className={classes.socials} >
            <li><Link to='/in-progress'>f</Link></li>
            <li><Link to='/in-progress'>in</Link></li>
            <li><Link to='/in-progress'>X</Link></li>
        </div>
        <div className={classes.grid} >
            <div>
                <li><Link to='/in-progress'>Audio Description</Link></li>
                <li><Link to='/in-progress'>Investor Relations</Link></li>
                <li><Link to='/in-progress'>Legal Notices</Link></li>
            </div>
            <div>
                <li><Link to='/in-progress'>Help Center</Link></li>
                <li><Link to='/in-progress'>Jobs</Link></li>
                <li><Link to='/in-progress'>Cookie Preferences</Link></li>
            </div>
            <div>
                <li><Link to='/in-progress'>Gift Cards</Link></li>
                <li><Link to='/in-progress'>Terms of Use</Link></li>
                <li><Link to='/in-progress'>Corporate Information</Link></li>
            </div>
            <div>
                <li><Link to='/in-progress'>Media Canter</Link></li>
                <li><Link to='/in-progress'>Privacy</Link></li>
                <li><Link to='/in-progress'>Contact us</Link></li>
            </div>
        </div>
        <button>Service Code</button>
        <p className={classes.copy} > &copy; 2024</p>
    </div>
  )
}

export default FooterNavigation