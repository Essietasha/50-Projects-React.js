import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    
    const isActive = ({ isActive }) => isActive ? classes.active : undefined;

    return (
        <>
    <header>
        <nav className={classes.navFlex}>
            <div>
                <Link to="home" className={classes.logo} >NETFLIX</Link>
            </div>
            <ul className={classes.links}>
                <li>
                    <NavLink to='home' className={isActive} end> Home </NavLink>
                </li>
                <li>
                    <NavLink to='/home/movies' className={isActive}> Movies </NavLink>
                </li>
                <li>
                    <NavLink to='/home/movies/my-list' className={isActive}> My List </NavLink>
                </li>
                <li>
                    <NavLink to='watching' className={isActive}> Profile </NavLink>
                </li>
                <li>
                    <NavLink to='authentication' className={isActive}> Log </NavLink>
                </li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default MainNavigation;


// import React from 'react';
// import { NavLink, Link } from 'react-router-dom';
// import classes from './MainNavigation.module.css';

// const MainNavigation = () => {
//     const isActive = ({ isActive }) => isActive ? classes.active : undefined;

//   return (
//     <header>
//         <nav className={classes.navFlex}>
//             <div>
//                 <Link to="home" className={classes.logo} >NETFLIX</Link>
//             </div>
//             <ul className={classes.links}>
//                 <li>
//                     <NavLink to='home' className={isActive} end> Home </NavLink>
//                 </li>
//                 <li>
//                     <NavLink to='/home/movies' className={isActive}> Movies </NavLink>
//                 </li>
//                 <li>
//                     <NavLink to='/home/movies/my-list' className={isActive}> My List </NavLink>
//                 </li>
//                 <li>
//                     <NavLink to='watching' className={isActive}> Profile </NavLink>
//                 </li>
//                 <li>
//                     <NavLink to='authentication' className={isActive}> Log </NavLink>
//                 </li>
//             </ul>
//         </nav>
//     </header>
//   )
// }

// export default MainNavigation;